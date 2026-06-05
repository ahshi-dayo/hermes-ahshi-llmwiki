---
title: "Hermes Event Hooks — ライフサイクルでフックする自動化設計"
source: "https://hermes-agent.nousresearch.com/docs/user-guide/features/hooks"
type: tec
created: 2026-06-04
tags: [hermes, hooks, gateway, plugin, event, lifecycle, automation]
summary: "Hermes Agentの3種フックシステム（Gateway/Plugin/Shell）の仕様と実装パターン。BOOT.mdパターン、pre_tool_callによるツールインターセプト、transform系フックによる出力加工などを解説。"
---

# Hermes Event Hooks — ライフサイクルでフックする自動化設計

Hermes Agentには **3種類のフックシステム** があり、エージェントのライフサイクル（セッション開始→ツール呼び出し→LLM推論→応答）の各段階に任意のコードを差し込める。

```
Gateway hooks    → ~/.hermes/hooks/ の HOOK.yaml + handler.py
Plugin hooks     → ctx.register_hook() で14種のイベントをフック
Shell hooks      → config.yaml の hooks: ブロックでシェルスクリプト
```

全システム共通で **ノンブロッキング** — フックがエラーを出してもエージェント本体には影響しない。

## 3種のフックの違い

| 種類 | 登録場所 | 動作環境 | 主な用途 |
|------|---------|---------|---------|
| Gateway hooks | `~/.hermes/hooks/` | Gateway専用 | ログ、アラート、Webhook通知 |
| Plugin hooks | `ctx.register_hook()` | CLI + Gateway | ツールインターセプト、メトリクス、ガードレール |
| Shell hooks | `config.yaml` | CLI + Gateway | ブロッキング、自動フォーマット、コンテキスト注入 |

Gateway hooks は Telegram/Discord 等のゲートウェイでのみ動作し、CLIセッションではロードされない。CLI でもフックしたい場合は Plugin hooks か Shell hooks を使う。

## Gateway Event Hooks

ゲートウェイのライフサイクルイベントに反応して Python ハンドラを実行する仕組み。

### ディレクトリ構成

```
~/.hermes/hooks/
└── my-hook/
    ├── HOOK.yaml      # 購読するイベントを宣言
    └── handler.py     # handle() 関数を実装
```

### 購読可能なイベント

| イベント | 発火タイミング | 主なコンテキスト |
|---------|-------------|----------------|
| `gateway:startup` | ゲートウェイ起動時 | `platforms` |
| `session:start` | 新セッション作成時 | `platform`, `user_id`, `session_id` |
| `session:end` | セッション終了時 | `platform`, `user_id` |
| `session:reset` | `/new` `/reset` 実行時 | `platform`, `user_id` |
| `agent:start` | メッセージ処理開始時 | `platform`, `user_id`, `message` |
| `agent:step` | ツール呼び出しループの各イテレーション | `iteration`, `tool_names` |
| `agent:end` | メッセージ処理完了時 | `message`, `response` |
| `command:*` | スラッシュコマンド実行時 | `command`, `args` |

`command:*` はワイルドカードで、すべてのスラッシュコマンドを一括監視できる。

### 実用例：BOOT.md パターン

`~/.hermes/BOOT.md` にチェックリストを書いておき、ゲートウェイ起動時に自動実行させるパターン。

```yaml
# ~/.hermes/hooks/boot-md/HOOK.yaml
name: boot-md
description: Run ~/.hermes/BOOT.md on gateway startup
events:
  - gateway:startup
```

```python
# ~/.hermes/hooks/boot-md/handler.py
import threading
from pathlib import Path

BOOT_FILE = Path.home() / ".hermes" / "BOOT.md"

def _run_boot_agent(content: str) -> None:
    from gateway.run import _resolve_gateway_model, _resolve_runtime_agent_kwargs
    from run_agent import AIAgent

    agent = AIAgent(
        model=_resolve_gateway_model(),
        **_resolve_runtime_agent_kwargs(),
        platform="gateway",
        quiet_mode=True,
        skip_memory=True,
        max_iterations=20,
    )
    result = agent.run_conversation(
        f"Execute this startup checklist:\n\n{content}\n\n"
        "If nothing needs attention, reply with ONLY: [SILENT]"
    )

async def handle(event_type: str, context: dict) -> None:
    if not BOOT_FILE.exists():
        return
    content = BOOT_FILE.read_text(encoding="utf-8").strip()
    if not content:
        return
    thread = threading.Thread(target=_run_boot_agent, args=(content,), daemon=True)
    thread.start()
```

`_resolve_gateway_model()` と `_resolve_runtime_agent_kwargs()` を使うことで、カスタムエンドポイントやOAuthプロバイダーの認証情報が正しく引き継がれる。これらを使わないと、bare `AIAgent()` はデフォルト設定で401エラーを出す。

## Plugin Hooks

プラグインの `register()` 関数で `ctx.register_hook()` を呼ぶことで、14種のイベントにフックを登録できる。CLI と Gateway の両方で動作する。

### フック一覧

| フック | 発火タイミング | 戻り値の効果 |
|--------|-------------|------------|
| `pre_tool_call` | ツール実行直前 | `{"action": "block"}` でツールを中止 |
| `post_tool_call` | ツール実行直後 | 監視専用 |
| `pre_llm_call` | LLM呼び出し直前（1回/ターン） | `{"context": str}` でユーザーにメッセージにコンテキスト注入 |
| `post_llm_call` | LLM呼び出し直後（1回/ターン） | 監視専用 |
| `on_session_start` | 新セッション開始時（初回ターンのみ） | 監視専用 |
| `on_session_end` | セッション終了時 | 監視専用 |
| `on_session_finalize` | セッション破棄時 | 監視専用 |
| `on_session_reset` | セッションリセット時 | 監視専用 |
| `subagent_stop` | delegate_task 子エージェント終了時 | 監視専用 |
| `pre_gateway_dispatch` | ゲートウェイでメッセージ受信時 | `{"action": "skip"}` でメッセージ破棄 |
| `pre_approval_request` | 承認プロンプト表示直前 | 監視専用 |
| `post_approval_response` | 承認プロンプト回答後 | 監視専用 |
| `transform_tool_result` | ツール結果をモデルに渡す直前 | `str` で結果を置換 |
| `transform_terminal_output` | terminal ツール出力時 | `str` で出力を置換 |
| `transform_llm_output` | 最終応答を配信する直前 | `str` で応答を置換 |

### pre_tool_call — ツールをブロック

```python
DANGEROUS = {"terminal", "write_file", "patch"}

def block_dangerous(tool_name, args, task_id, **kwargs):
    if tool_name in DANGEROUS:
        return {"action": "block", "message": f"Tool {tool_name} is blocked by policy"}
    return None

def register(ctx):
    ctx.register_hook("pre_tool_call", block_dangerous)
```

### pre_llm_call — コンテキスト注入

```python
def inject_memory(session_id, user_message, is_first_turn, **kwargs):
    memories = recall_memories(session_id, user_message)
    if memories:
        return {"context": "Relevant memories:\n" + "\n".join(f"- {m}" for m in memories)}
    return None

def register(ctx):
    ctx.register_hook("pre_llm_call", inject_memory)
```

注入されたコンテキストは **ユーザーメッセージに追加** される。システムプロンプトは変更しないため、プロンプトキャッシュが壊れない。

### transform_terminal_output — 出力加工

`transform_terminal_output` フックは、terminal ツールの出力をモデルに渡す前に加工できる。例えば、機密情報のマスクや、不要な行のフィルタリングに使える。

## Shell hooks

`~/.hermes/config.yaml` の `hooks:` ブロックでシェルスクリプトを登録する。最もシンプルなフック方式。

```yaml
hooks:
  pre_tool_call:
    command: ~/.hermes/hooks-scripts/pre-tool-call.sh
```

シェルスクリプトの標準出力がフックの戻り値として使われる。

## 設計パターン

### 1. 安全なフックの原則

- フックは **ノンブロッキング** — エラーを出してもエージェントは続行
- 重い処理は **バックグラウンドスレッド** に投げる
- フック同士の実行順序は **プラグイン発見順**（アルファベット）

### 2. フックの使い分け

| やりたいこと | 使うフック |
|------------|----------|
| ツールをブロックしたい | `pre_tool_call` |
| ツール実行を記録したい | `post_tool_call` |
| 毎ターンコンテキストを注入したい | `pre_llm_call` |
| セッション開始時に初期化したい | `on_session_start` |
| ゲートウェイ起動時にチェックしたい | Gateway hooks (`gateway:startup`) |
| メッセージを傍受したい | `pre_gateway_dispatch` |
| ツール出力を加工したい | `transform_terminal_output` |
| 最終応答を加工したい | `transform_llm_output` |

### 3. BOOT.md パターンの利点

- 組み込み機能じゃない → ユーザーが明示的にファイルを作って有効化する
- 何をするかが Markdown で見える → 透明性がある
- `[SILENT]` で不要な通知を抑制できる

## あーしメモ {#ahshi-memo}

今日のセッションで「write_file前にls確認をhookで強制できないか？」って話が出たけど、**Plugin hooks の `pre_tool_call` で実現できる**かもしれない。

`write_file` が呼ばれる前にフックが走るので、そこで `ls` してファイルの存在確認して、問題なければ通す、問題があれば `{"action": "block"}` で止める。

ただし、フックを書くには **Python でプラグインを作る**必要がある。Shell hooks でもできるけど、戻り値の制約があるかも。

あと **`transform_terminal_output`** も面白い。terminal ツールの出力を加工できるから、「ls の結果を整形してからモデルに渡す」みたいなこともできる。

Hermes のフックシステムはかなり柔軟で、「エージェントの挙動を外から制御」する本格的な拡張ポイント。特に `pre_tool_call` でツールをブロックできるのは、セキュリティポリシーの実装に使えそう。

## See Also

- [hermes-cron-troubleshooting.md](?page=topics/tec/hermes-cron-troubleshooting) — Cron トラブルシューティング
- [hermes-agent-usage.md](?page=topics/tec/hermes-agent-usage) — Hermes Agent 運用の教訓

## Sources

- [Event Hooks | Hermes Agent Documentation](https://hermes-agent.nousresearch.com/docs/user-guide/features/hooks)
