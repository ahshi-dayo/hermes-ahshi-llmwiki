---
title: "RAG入門 — chunk・embedding・vector DB・retrieve/generate"
created: 2026-05-29
updated: 2026-05-29
tags: [rag, llm, embedding, vector-db, chunking, retrieval, generation]
summary: "RAGの全体像を初心者向けに解説。Load→Split→Embed→Storeの準備フェーズと、Retrieve→Generateの使うフェーズ。chunk、embedding、vector DB、コサイン類似度を順番に説明。Qiita jagaimo_daisuki をコンパイル。"
sources:
  - "https://qiita.com/jagaimo_daisuki/items/39c3e7f0634e25e0e3a1"
---

# RAG入門

> Qiita | jagaimo_daisuki | 2026-05 をコンパイル

## Abstract

RAG（Retrieval-Augmented Generation）の全体像を初心者向けに解説。Load→Split→Embed→Storeの準備フェーズと、Retrieve→Generateの使うフェーズ。

## 前提：LLMが知らないこと4つ

1. ハルシネーション（嘘をそれっぽく言う）
2. 最新情報の欠如（knowledge cutoff）
3. 社内文書を知らない
4. 根拠を示せない

RAGはこれら4つを「同じ仕組みで」解決する。

## RAGの本質

**parametric memory**（モデル内知識）+ **non-parametric memory**（外部文書集）の組み合わせ。

料理本の編集者に例えると、新人ライター（LLM）に原稿を書かせる前に編集者（検索）が関連ページを3つ抜き出して渡す。

## 2つのフェーズ

| フェーズ | いつ走る | 処理 |
|---|---|---|
| Indexing（準備） | 文書追加時のみ | Load → Split → Embed → Store |
| Retrieval & Generation | 質問が来るたびに | Retrieve → Generate |

## 用語解説

### chunk
長い文書を数段落単位に分割した塊。1000文字＋200文字オーバーラップが例。
- 大きすぎる：複数トピック混在 → 精度低下
- 小さすぎる：意味のまとまりが壊れる

### embedding
文章をベクトル（例：1024個の数値の並び）に変換する。意味が近い文章はベクトルとしても近くなる。

```
「ハンバーグの作り方」→ [0.124, -0.873, 0.456, ..., 0.211]
```

1024次元の理由：多すぎるとストレージ・計算コスト増、少なすぎると表現力不足。中間として1024 or 1536が多い。

### token
AIが扱う文章の最小単位。日本語は1文字≒1〜2トークン。embeddingモデルには入力上限（512トークン等）がある。

### Vector Database
ベクトルを保存し、「近いベクトルtop-k」を高速に検索できるDB。Chroma, Pinecone, Weaviate, Qdrant等。

メタデータ（出典・章・ページ等）も一緒に保存でき、検索時の事前フィルタに使える。

### コサイン類似度
2つのベクトルの近さを測る指標。1.0=同一方向、0=直角（無関係）、-1.0=反対方向。

## 使うフェーズの詳細

1. ユーザーの質問も同じembeddingモデルでベクトル化
2. Vector DBからtop-kを取得（retrieve）
3. メタデータで事前フィルタ可能（精度・コスト同時改善）
4. 取り出したchunkを「参考文献」としてLLMのプロンプトに差し込み
5. LLMが出典付きの回答を出力

## context window 1M tokens問題

「全部contextに入れればRAG不要では？」→ そうではない。理由：

1. **Lost in the Middle**：長文の中央部分が読み落とされる（Stanford Liu et al. 2023）
2. コスト（トークン数に比例）
3. ノイズ増加による精度低下
4. セキュリティ（全文書をcontextに入けたくない場合）

## See Also

- [Hermes Agent運用の教訓 — profiles・config・skill設計](?page=topics/tec/hermes-agent-usage) — LLM agent運用の文脈
- [Claude Code安全運用 — CLAUDE.md 4原則](?page=topics/tec/claude-code-safety) — AI開発ツールの文脈
- [メモリは目的が決める ── AIエージェントにおける記憶の本質](?page=concepts/ai-memory-purpose/hub) — メモリと検索の接点

## Sources

- [RAGってそもそも何なのか — indexもchunkもretrieveも知らない人のためのRAG入門](https://qiita.com/jagaimo_daisuki/items/39c3e7f0634e25e0e3a1) — Qiita, jagaimo_daisuki, 2026-05
