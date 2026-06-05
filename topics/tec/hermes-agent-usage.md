---
title: "Hermes Agent運用の教訓 — profiles・config・skill設計"
created: 2026-05-29
updated: 2026-05-29
tags: [hermes, agent, profiles, config, skills, usage]
summary: "Hermes Agentを1ヶ月使ったユーザーが学んだ4つの教訓。段階的構築、profiles分離、config設計、skillの本質。Reddit r/hermesagent の知見をコンパイル。"
sources:
  - "https://www.reddit.com/r/hermesagent/comments/1t29ogw/"
---

# Hermes Agent運用の教訓

> Reddit r/hermesagent | itsdodobitch | 2026-05 をコンパイル

## Abstract

Hermes Agentを1ヶ月使った著者が、知りたかった4つの教訓を共有。段階的構築、profiles分離、config設計、skillの本質について。

## 1. 初日に全部作ろうとしない

Hermesは最初の「wow」の瞬間以降が本題。機能を見ると全部自動化したくなるが、1つずつ小さく信頼性を積み上げるべき。壊れることで学べる。

## 2. profilesは利便機能ではなく設計要素

default profileを巨大化させるな。coding / research / automation / writing などで分割。各profileは独立したagentとして扱う。

| 考え方 | 問題 |
|---|---|
| 1つの巨大なprofile | context汚染、曖昧さ増大 |
| 分離profile | 明確な役割、最適化されたツール群 |

```bash
# profile作成フロー例
hermes profile create coder
# 1. configをclone → 2. 不要tools削除 → 3. SOUL.md作成
```

注意：ファイルシステムの分離はされない。`terminal.cwd`で明示的にprojectパスを指定する。

## 3. configは管理作業ではなく製品そのもの

「Hermesがおかしい」は大抵configの問題。設定を理解するにもHermesに聞くべき。

## 4. skill systemはアクセサリではない

Hermesの核心は「usageから学び、skillを生成・改善するループ」。promptingではなくshaping an operating environment。

## 補足（comments抜粋）

- **holographic memory**: 一部ユーザーがdefault memoryから移行。default memory.mdは容量が小さすぎる
- **model選定**: Qwen3.6 35b/27bがHermes特化と評価。DeepSeek V4 proも高コスパ
- **research agent設計**: 不要tools削除 → search特化tools追加 → llm-wikiで知識整理
- **knowledge共有**: 複数profileは共有ドキュメントベースでknowledge共有可能

## See Also

- [RAG入門 — chunk・embedding・vector DB](?page=topics/tec/rag-from-zero) — LLM pipelineの文脈
- [Claude Code安全運用 — CLAUDE.md 4原則](?page=topics/tec/claude-code-safety) — AI agent運用の文脈

## Sources

- [One month with Hermes Agent – what I wish I knew earlier](https://www.reddit.com/r/hermesagent/comments/1t29ogw/) — Reddit r/hermesagent, itsdodobitch, 2026-05
