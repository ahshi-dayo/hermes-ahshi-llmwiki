---
title: "Hermes Agent — Web Search & Extract 検索バックエンド選定ガイド"
date: 2026-05-31
tags: [hermes-agent, web-search, web-extract, firecrawl, searxng, tavily, exa, ddgs, cron, tools]
summary: "Hermes AgentのWeb検索・抽出機能の解説。web_searchとweb_extractの使い方、バックエンド（Firecrawl, SearXNG, Brave, DDGS, Tavily, Exa等）の比較表と設定方法。cronジョブの検索手段選定用リファレンス。"
---

# Hermes Agent — Web Search & Extract 検索バックエンド選定ガイド

Hermes Agentには、モデル呼び出し可能な2つのWebツールがある。

- **`web_search`** — Webを検索し、ランキング形式で結果を返す
- **`web_extract`** — 1つまたは複数のURLからコンテンツを取得・抽出する

## バックエンド一覧

| プロバイダー | 環境変数 | 検索 | 抽出 | 無料プラン |
|---|---|---|---|---|
| **Firecrawl**（デフォルト） | `FIRECRAWL_API_KEY` | ✔ | ✔ | 500クレジット/月 |
| **SearXNG** | `SEARXNG_URL` | ✔ | — | 無料（セルフホスト） |
| **Brave Search** | `BRAVE_SEARCH_API_KEY` | ✔ | — | 2,000件/月 |
| **DDGS**（DuckDuckGo） | —（キーなし） | ✔ | ✔ | 無料 |
| **Tavily** | `TAVILY_API_KEY` | ✔ | ✔ | 1,000件/月 |
| **Exa** | `EXA_API_KEY` | ✔ | ✔ | 1,000件/月 |
| **xAI（Grok）** | `XAI_API_KEY` | ✔ | — | 有料 |

## 選定のポイント

- **検索のみ必要な場合**: SearXNG（セルフホストで完全無料）またはDDGS（キー不要）で十分
- **検索＋抽出が必要な場合**: Firecrawl, Tavily, Exa のいずれか
- **無料で始めたい場合**: 検索にSearXNG＋抽出に別プロバイダーを組み合わせるのが最適
- **cronジョブ向け**: 安定性重視ならセルフホストSearXNG、手軽さ重視ならDDGS（[DuckDuckGo Search](?page=topics/tec/hermes-duckduckgo-search))

## 設定方法

シングルバックエンドの場合:

```yaml
# ~/.hermes/config.yaml
web:
  backend: "searxng"
```

検索と抽出で異なるプロバイダーを使う場合:

```yaml
web:
  search_backend: "searxng"
  extract_backend: "firecrawl"
```

## cronジョブへの適用

情報収集cronジョブでは `web_search` ツールが使えるため、追加のAPIキーなしでも検索可能（web_extract と組み合わせる場合は要設定）。検索結果のURLリスト作成だけなら SearXNG または DDGS で十分機能する。

## See Also

- [Hermes Agent運用の教訓](?page=topics/tec/hermes-agent-usage)
- [RAG入門](?page=topics/tec/rag-from-zero)
- [Cron トラブルシューティング完全ガイド](?page=topics/tec/hermes-cron-troubleshooting) — cronジョブが動かないときの診断
- [DuckDuckGo Search](?page=topics/tec/hermes-duckduckgo-search) — DDGSの詳細な使い方・全フラグ・トラブルシューティング

## Sources

- Hermes Agent公式ドキュメント — [Web Search & Extract](https://hermes-agent.nousresearch.com/docs/user-guide/features/web-search)
