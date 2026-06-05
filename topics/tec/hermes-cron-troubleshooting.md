---
title: "Hermes Agent — Cron トラブルシューティング完全ガイド"
date: 2026-05-31
tags: [hermes-agent, cron, troubleshooting, devops, automation, gateway]
summary: "Hermes Agentのcronジョブが動かないときの診断手順。ジョブが発火しない、配信失敗、スキル読み込み失敗、エラーの4カテゴリ別チェックリストと対処法。"
---

# Hermes Agent — Cron トラブルシューティング完全ガイド

cronジョブが期待通りに動かないとき、この順序でチェックしていく。大抵の問題は4つのカテゴリのどれかに当てはまる。

1. **Timing** — スケジュールが発火しない
2. **Delivery** — 結果が届かない
3. **Skill Loading** — スキルが読めない
4. **Errors** — ジョブ内でエラー

---

## ジョブが発火しない

### 1. ジョブの状態を確認

```bash
hermes cron list
```

`[active]` かを確認。`[paused]` や `[completed]` なら原因。`[completed]` は repeat_count を使い切った可能性。

### 2. スケジュール式が正しいか

| 式 | 意味 |
|-----|------|
| `0 9 * * *` | 毎朝9時 |
| `0 9 * * 1` | 毎週月曜9時 |
| `every 2h` | 2時間ごと |
| `30m` | 30分後（一回限り） |
| ISO timestamp | 指定UTC時刻に一回限り |

一回だけ動いて消えたら one-shot スケジュール。正常挙動。

### 3. ゲートウェイが動いているか

cronジョブはゲートウェイのバックグラウンドティッカー（60秒間隔）が発火させる。**通常のCLIセッションでは自動発火しない。**

自動発火を期待するなら:
```bash
hermes gateway          # フォアグラウンド
hermes gateway start    # サービスとして
```

手動テスト:
```bash
hermes cron tick
```

### 4. システムクロックとタイムゾーン

ジョブはローカルタイムゾーンを使う。

```bash
date
hermes cron list   # next_run と比較
```

---

## 配信に失敗する

### 1. 配信先の設定を確認

| ターゲット | 必要な設定 |
|-----------|-----------|
| `telegram` | `~/.hermes/.env` に `TELEGRAM_BOT_TOKEN` |
| `discord` | `~/.hermes/.env` に `DISCORD_BOT_TOKEN` |
| `slack` | `~/.hermes/.env` に `SLACK_BOT_TOKEN` |
| `origin` | ジョブ作成元のチャットに配信 |
| `local` | `~/.hermes/cron/output/` への書き込み権限 |

失敗してもジョブ自体は実行される。配信だけ止まる。

### 2. [SILENT] に注意

空出力や `[SILENT]` を返すと配信が抑制される。条件分岐で誤って全部飲み込んでないか確認。

### 3. プラットフォームの権限

- **Telegram**: ボットは対象グループ/チャンネルの管理者である必要あり
- **Discord**: ボットに対象チャンネルの送信権限が必要
- **Slack**: ワークスペースに追加され `chat:write` スコープが必要

### 4. レスポンスラップ

デフォルトでcronレスポンスにヘッダ・フッタが付く。オフにする:

```yaml
cron:
  wrap_response: false
```

---

## スキル読み込みに失敗する

### 1. スキルがインストールされているか

```bash
hermes skills list
```

### 2. `max_results` はキーワード引数必須

`ddgs.text("query", 5)` はエラー。`ddgs.text("query", max_results=5)` を使う。

### 3. スキル名が正しいか

大文字小文字区別あり。`hermes skills list` の出力を正確に使う。

### 4. インタラクティブツールを使うスキルに注意

cronジョブでは `cronjob`, `messaging`, `clarify` ツールセットが無効。これらに依存するスキルはcronでは動かない。

### 5. 複数スキルのロード順序

```bash
/cron add "0 9 * * *" "..." --skill context-skill --skill target-skill
```

`context-skill` が先にロードされる。依存関係に注意。

---

## ジョブ内でエラー

### 1. 直近の出力を確認

1. 配信先のチャット（配信が成功した場合）
2. `~/.hermes/logs/agent.log`
3. `hermes cron list` の `last_run` メタデータ

### 2. よくあるエラーパターン

| エラー | 原因 | 対処 |
|--------|------|------|
| `No such file or directory` (スクリプト) | パスが絶対パスでない | `~/.hermes/scripts/` に配置 |
| `Skill not found` | スケジューラ側に未インストール | `hermes skills install` |
| ジョブは動くが出ない | 配信先の問題 or `[SILENT]` | Deliveryセクション参照 |
| ジョブがハング/タイムアウト | 非活動タイムアウト（デフォルト600秒） | `HERMES_CRON_TIMEOUT` で調整 |

### 3. ロック競合

2つのゲートウェイが同時に動いているとジョブが遅延・スキップされる。

```bash
ps aux | grep hermes
# 重複プロセスはkillして1つだけ残す
```

### 4. jobs.json の権限

```bash
ls -la ~/.hermes/cron/jobs.json
chmod 600 ~/.hermes/cron/jobs.json
```

---

## パフォーマンス

- **起動が遅い**: 各ジョブは新AIAgentセッションを作る。時刻に厳密なスケジュールにはバッファを入れる
- **重複ジョブが多い**: 同時刻のジョブは順次実行。ずらす（`0 9 * * *` と `5 9 * * *`）
- **スクリプト出力が大きい**: スクリプト側でフィルタ・サマリーしてから出す

---

## 診断コマンド

```bash
hermes cron list                    # 全ジョブ・状態・次回実行時刻
hermes cron run <job_id>            # 次ティックで発火（テスト用）
hermes cron edit <job_id>           # 設定修正
hermes logs                         # 最近のログ
hermes skills list                  # インストール済みスキル確認
```

---

## See Also

- [Web Search & Extract 検索バックエンド選定ガイド](?page=topics/tec/hermes-web-search-extract) — cronジョブの検索手段選定
- [DuckDuckGo Search — ddgs CLI による無料Web検索](?page=topics/tec/hermes-duckduckgo-search) — DDGSの詳細な使い方
- [Hermes Agent運用の教訓](?page=topics/tec/hermes-agent-usage) — profiles・config・skill設計

## Sources

- Hermes Agent公式ドキュメント — [Cron Troubleshooting](https://hermes-agent.nousresearch.com/docs/guides/cron-troubleshooting)
