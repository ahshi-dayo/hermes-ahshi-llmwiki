---
title: "DuckDuckGo Search — ddgs CLI による無料Web検索"
date: 2026-05-31
tags: [hermes-agent, ddgs, duckduckgo, web-search, free, cli, tools]
summary: "ddgs CLIを使ったDuckDuckGo検索の完全ガイド。テキスト・ニュース・画像・動画検索の全フラグ、Python API、execute_codeとのランタイム分離の注意点、トラブルシューティング。"
---

# DuckDuckGo Search — ddgs CLI による無料Web検索

APIキー不要でDuckDuckGoを使う方法。cronの情報収集ジョブでも実際に使われている。

> 検証環境: ddgs==9.11.2

## 偵測フロー（どの手段を使うか）

```bash
command -v ddgs >/dev/null && echo "DDGS_CLI=installed" || echo "DDGS_CLI=missing"
```

1. `ddgs` CLIが入っている → **terminal + `ddgs` を使う（推奨）**
2. `ddgs` CLIが無い → `execute_code` でimportできると仮定しない
3. 必要ならインストールする
4. それ以外は built-in web/browser ツールにフォールバック

**重要な実行時注意:**
- terminal と `execute_code` は別のランタイム
- shellでインストールしても `execute_code` からimportできるとは限らない

## インストール

```bash
pip install ddgs
ddgs --help
```

## CLI検索（推奨）

```bash
# テキスト検索
ddgs text -q "python async programming" -m 5

# ニュース検索
ddgs news -q "artificial intelligence" -m 5

# 画像検索
ddgs images -q "landscape photography" -m 10

# 動画検索
ddgs videos -q "python tutorial" -m 5

# 地域フィルター
ddgs text -q "best restaurants" -m 5 -r us-en

# 期間指定（d=日, w=週, m=月, y=年）
ddgs text -q "latest AI news" -m 5 -t w

# JSON出力（パース用）
ddgs text -q "fastapi tutorial" -m 5 -o json
```

### CLIフラグ一覧

| フラグ | 説明 | 例 |
|--------|------|-----|
| `-q` | クエリ（必須） | `-q "search terms"` |
| `-m` | 最大結果数 | `-m 5` |
| `-r` | 地域 | `-r us-en` |
| `-t` | 期間制限 | `-t w`（1週間） |
| `-s` | セーフサーチ | `-s off` |
| `-o` | 出力形式 | `-o json` |

## Python API（確認済みランタイムのみ）

`from ddgs import DDGS` は、そのランタイムにddgsがインストールされている確認をしてから使う。

**`max_results` は必ずキーワード引数で渡すこと。** Positionalだと全メソッドでエラー。

### テキスト検索 → title, href, body

```python
from ddgs import DDGS

with DDGS() as ddgs:
    for r in ddgs.text("python async programming", max_results=5):
        print(r["title"], r["href"], r.get("body", "")[:200])
```

### ニュース検索 → date, title, source, url, body

```python
with DDGS() as ddgs:
    for r in ddgs.news("AI regulation 2026", max_results=5):
        print(r["date"], r["title"], r.get("source", ""))
```

### 画像検索 → title, image, thumbnail, url

### 動画検索 → title, content, duration, provider

## クイックリファレンス

| メソッド | 用途 | 主なフィールド |
|----------|------|---------------|
| `text()` | 一般検索、企業、ドキュメント | title, href, body |
| `news()` | 最新情報、速報 | date, title, source, body, url |
| `images()` | ビジュアル、図表 | title, image, thumbnail, url |
| `videos()` | チュートリアル、デモ | title, content, duration, provider |

## ワークフロー: 検索→抽出

DDGSはタイトル・URL・スニippetを返すだけ。本文が必要なら `web_extract` でURLを開く。

```bash
ddgs text -q "fastapi deployment guide" -m 3 -o json
# → 最適なURLを web_extract で開く
```

## 制限事項

- **レート制限**: 大量リクエストでthrottleされる場合あり。数秒のdelayを入れる
- **本文抽出なし**: DDGSはスニippetのみ。本文は `web_extract` 等で別途取得
- **可用性**: クラウドIPからブロックされる場合あり
- **フィールド可動性**: 返り値フィールドは `.get()` で安全に取得
- **ランタイムの分離**: terminalで動いても `execute_code` で動くとは限らない

## トラブルシューティング

| 問題 | 原因 | 対処 |
|------|------|------|
| `ddgs: command not found` | CLIが未インストール | `pip install ddgs` または built-inツール |
| `ModuleNotFoundError: No module named 'ddgs'` | Pythonランタイムに未インストール | CLIを使うかランタイムを準備 |
| 検索結果が空 | レート制限 or クエリが悪い | 数秒待つ or クエリ変更 |

## ピットフォール

- **`max_results` はキーワード専用**: `ddgs.text("query", 5)` → エラー
- **CLIの存在を仮定しない**: `command -v ddgs` で確認
- **`execute_code` でimportできると仮定しない**
- **パッケージ名**: `ddgs`（旧 `duckduckgo-search`）
- **`-q` と `-m` を混同しない**

## See Also

- [Web Search & Extract 検索バックエンド選定ガイド](?page=topics/tec/hermes-web-search-extract) — DDGSを含む検索バックエンド全一覧
- [Cron トラブルシューティング完全ガイド](?page=topics/tec/hermes-cron-troubleshooting) — cronジョブ全体の診断
- [Hermes Agent運用の教訓](?page=topics/tec/hermes-agent-usage) — profiles・config・skill設計

## Sources

- Hermes Agent公式ドキュメント — [DuckDuckGo Search](https://hermes-agent.nousresearch.com/docs/user-guide/skills/optional/research/research-duckduckgo-search)
