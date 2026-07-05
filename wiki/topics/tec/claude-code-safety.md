---
title: "Claude Code安全運用 — CLAUDE.md 4原則とplugin/skills設計"
created: 2026-05-29
date: 2026-05-29
updated: 2026-05-29
tags: [claude-code, ai-coding, claude-md, safety, workflow, plugin, skills]
confidence: high
summary: "andrej-karpathy-skillsのCLAUDE.mdを参考にしたClaude Code安全運用。4原則（Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution）を解説。Qiita 4q_sano をコンパイル。"
sources:
  - "https://qiita.com/4q_sano/items/dc26f7468dcd39fbe62f"
---

# Claude Code安全運用

> Qiita | 4q_sano | 2026-05 をコンパイル

## Abstract

andrej-karpathy-skillsのCLAUDE.mdを参考にしたClaude Code安全運用。4原則（Think Before Coding, Simplicity First, Surgical Changes, Goal-Driven Execution）を解説。

## 問題

Claude Codeは長時間動かすと以下が発生しやすい：

- 勝手にリファクタする
- 関係ないファイルまで変更する
- 巨大diffを作る
- 過剰に抽象化する
- 曖昧な要件を勝手に解釈する

これはAIの能力不足ではなく、**行動制約不足**が原因。

## CLAUDE.mdとは

Claude Code用の「README」。プロジェクトでClaudeがどう振る舞うべきかを記述する永続的指示ファイル。

**重要：強制設定ではなく、コンテキストとして読み込まれる。** 書いたから必ず守るわけではない。短く具体的に書く方が効く。

## 4原則（andrej-karpathy-skillsより）

### 1. Think Before Coding
実装前に以下を明示させる：
- 何を達成するのか
- どのファイルを触るのか
- どんな前提で進めるのか
- 曖昧な点は何か

### 2. Simplicity First
- 要求されていない機能は追加しない
- 一度しか使わないものを抽象化しない
- 既存の書き方に合わせる
- 複雑にできる場面でも、まず単純に解く

### 3. Surgical Changes（最重要）
- 依頼に直接関係するファイルだけ触る
- 関係ないリファクタをしない
- 既存のコメントやフォーマットを勝手に変えない
- 未使用コードを見つけても、依頼されていなければ削除しない

### 4. Goal-Driven Execution
「バグを直して」ではなく「このバグを再現するテストを追加し、そのテストが通るように修正して」のように検証可能なゴールを指定する。

## plugin vs CLAUDE.md

| 役割 | 手段 |
|---|---|
| 能力追加 | plugin / skills |
| 行動制御 | CLAUDE.md |

能力が増えたぶん、制約が弱いと暴走範囲も広がる。両方組み合わせるのが強い。

## 推奨構成

```
~/.claude/
├── CLAUDE.md          ← 全プロジェクト共通の行動原則
├── settings.json
├── skills/
└── commands/

project/
└── CLAUDE.md          ← プロジェクト固有のルール
```

グローバルに入れるべき：推測で実装しない、最小diff、関係ないファイルを触らない等。
プロジェクト固有：ビルドコマンド、API仕様、ディレクトリ構成等。

## 実運用のコツ

- CLAUDE.mdで基本方針を固定
- 重要な作業ではプロンプト側でも制約を再指定
- 大きな変更の前には必ず計画を出させる
- diffを確認してから次に進める

## See Also

- [Hermes Agent運用の教訓 — profiles・config・skill設計](?page=topics/tec/hermes-agent-usage) — AI agent運用の文脈
- [RAG入門 — chunk・embedding・vector DB](?page=topics/tec/rag-from-zero) — AI開発ツールの文脈

## Sources

- [16万スター超のCLAUDE.mdに学ぶ、Claude Codeを暴走させない運用術](https://qiita.com/4q_sano/items/dc26f7468dcd39fbe62f) — Qiita, 4q_sano, 2026-05
- [GitHub - multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills)
