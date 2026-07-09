---
title: "lobster-wiki リファレンス"
tags: [lobster-wiki, static-site, markdown, wiki-tool, reference]
date: 2026-05-31
updated: 2026-06-06
summary: "Markdownフォルダをそのままミニマルなwikiサイトに変換するlobster-wikiツールの解説。nav.md・wiki.config.jsonの設定、?page=形式のリンク仕様、目次自動生成、CSS設計をまとめる。"
---

# lobster-wiki リファレンス

> **MarkdownのフォルダがそのままWikiサイトになる**
> カテゴリ: ツール *(references)*
> 最終更新: 2026-05-30

## 概要

**lobster-wiki** は [lobster.js](https://github.com/Hacknock/lobsterjs) の拡張スクリプト。
Markdownファイルのフォルダを、**HTML 1ファイル + JSON 1つ** だけで Wiki 風の複数ページサイトに変換する。

対応機能：
- サイドバーナビゲーション（`nav.md`）
- SPAルーティング（クエリ or ハッシュ）
- ページ内見出しからの自動目次生成
- 共通ヘッダー / フッター（Markdown で記述）
- レスポンシブ対応（640px以下でサイドバー折りたたみ）

## 最小構成

必要なファイルは 4 つだけ：

```
my-wiki/
  index.html          ← 15行のHTML
  wiki.config.json    ← 設定ファイル
  nav.md              ← サイドバーナビゲーション
  content/
    intro.md          ← 中身のMarkdown
    guide.md
```

### index.html

CSSの読み込みと `initWiki()` の呼び出しだけ：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Wiki</title>
  <link rel="stylesheet" href="https://hacknock.github.io/lobster-wiki/style.css" />
</head>
<body>
<script type="module">
import { initWiki } from "https://hacknock.github.io/lobster-wiki/lobster-wiki.js";
initWiki("./wiki.config.json");
</script>
</body>
</html>
```

### wiki.config.json

設定はJSON1つにまとまる：

```json
{
  "title": "My Wiki",
  "navigation": "./nav.md",
  "defaultPage": "intro",
  "tableOfContents": true
}
```

キー名は省略せず `navigation`・`tableOfContents` のようにフルワード。
初めて見る人でも読めることを優先している。

### nav.md

サイドバーは普通のMarkdownリスト。リンク先に `?page=スラッグ` を指定するだけ：

```markdown
- Getting Started
  - [Introduction](?page=intro)
  - [Guide](?page=guide)
```

カテゴリ名（リンクなしテキスト）は自動的に見出し風スタイルになる。ネストも自由。

### content/

Markdownファイルを置くだけでページが増える。

## 設定リファレンス

| キー | 説明 | デフォルト |
|------|------|------------|
| `title` | サイトタイトル（`<title>`タグ） | — |
| `navigation` | サイドバーのMarkdownパス（必須） | — |
| `header` | ヘッダーのMarkdownパス | — |
| `footer` | フッターのMarkdownパス | — |
| `contentDir` | コンテンツディレリ | `./content/` |
| `defaultPage` | デフォルトページスラッグ | `intro` |
| `tableOfContents` | 目次自動生成（`true` or `{minLevel, maxLevel}`） | `false` |
| `routing` | ルーティング方式: `query` or `hash` | `query` |
| `lobsterUrl` | lobster.jsのURL | GitHub Pages CDN |

## Markdownでヘッダー・フッターを書く

ロゴとタグラインを1行で表現できる：

```markdown
![logo](./images/logo.png =x28) [**My Wiki**](?page=intro) ドキュメント・ガイド・リファレンス
```

`=x28` はlobster.jsの画像サイズ指定構文（高さ28px）。
HTMLタグなしでヘッダーもフッターも構成できるのがポイント。

## 目次の自動生成

`"tableOfContents": true` でページ内の見出し（h2〜h4）から「On this page」を自動生成：

- 各見出しにID自動付与
- クリックでスムーズスクロール
- stickyヘッダー高さを考慮したオフセット
- 1024px以下で自動非表示

見出しレベルのカスタマイズも可能：

```json
{
  "tableOfContents": { "minLevel": 2, "maxLevel": 3 }
}
```

## SPAルーティング

- `?page=intro` 形式のクエリパラメータでページ識別
- 遷移時にサイドバー・フッターは維持（メインコンテンツだけ差し替え）
- `history.pushState` でブラウザの戻る/進むに対応
- 現在のページのサイドバーリンクが自動ハイライト
- `<title>` もページごとに自動更新

ローカルファイル（`file://`）ではクエリが使えない場合がある。
その場合は `"routing": "hash"` → `#page=intro` に切り替え。

## ⚠️ 本文中のリンク仕様（重要）

**LOBSTER-wikiは本文中の `.md` 相対パスリンクを `?page=` 形式に変換しない。**

本文中に他のwiki記事へのリンクを張る場合、**必ず `?page=` 形式で書く**こと：

```markdown
[表示テキスト](?page=topics/writing-theory/montaigne-essays)
```

❌ 禁止：`.md` 相対パス
```markdown
[表示テキスト](montaigne-essays.md)
[表示テキスト](../books/nakajima-zangetsuki.md)
```

`.md` 相対パスはLOBSTER-wikiのSPAルーティングの対象外。ブラウザが直接解決しようとして `http://localhost:XXXX/montaigne-essays.md` のようなURLになり、ページ遷移に失敗する。

**`?page=` の値**：`contentDir`（デフォルト `./content/`）からの相対パスで、`.md` を除いたスラグを指定する。本Wikiの場合は `contentDir: "./wiki/"` なので、`?page=topics/writing-theory/montaigne-essays` のように `wiki/` より後を書く。

**例外（`.md` 相対パスでもOK）**：
- `raw/` へのリンク：fetch で取得されるため
- `_index.md` ファイル内のリンク：直接ファイル参照されるため

## CSS設計（2層構造）

### レイアウト層（`lbw-*`）

| クラス | 要素 |
|--------|------|
| `lbw-header` / `lbw-header-inner` | ヘッダー |
| `lbw-sidebar` | サイドバー |
| `lbw-main` | メインコンテンツ |
| `lbw-toc` | 目次 |
| `lbw-footer` | フッター |
| `lbw-body` | レイアウトコンテナ |
| `lbw-active` | アクティブなナビリンク |

### コンテンツ層（`lbs-*`）

lobster.jsが出力する見出し・段落・コードブロック・テーブル等すべてに付くクラス。
レイアウトとコンテンツが分離しているため、**骨格はそのままテーマだけ差し替え**られる。

## lobster.jsとの関係

lobster-wiki は lobster.js のラッパー：

- Markdownのパース・レンダリング → lobster.jsが担当
- 骨格生成・ルーティング・ナビ・目次 → lobster-wiki が担当
- lobster.js は実行時に動的インポート（バンドルに含まれない）
  - バンドルサイズ: 5.3KB gzip (1.9KB)

lobster.jsの拡張構文（`:::warp`、サイレントテーブル、`:::details`等）は
Wiki内のコンテンツページで全て使える。

## 実物

[デモサイト](https://hacknock.github.io/lobster-wiki/) 自体が lobster-wiki で構築されている。

## リンク

- [hacknock/lobster-wiki](https://github.com/Hacknock/lobster-wiki) — GitHub
- [デモサイト](https://hacknock.github.io/lobster-wiki/)
- [hacknock/lobsterjs](https://github.com/Hacknock/lobsterjs) — コアライブラリ

## Sources

- [lobster-wiki入門 — Zenn.dev](https://zenn.dev/kyome/articles/9937ce78b948bc) 
