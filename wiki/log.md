# Activity Log

## [2026-07-15] upload-check | GitHub Pages 事前リンクチェック（report-only）
- ランフォルダ: ai-outputs/hermes-wiki-lint/2026-07-15/（upload_check_report.md）
- チェックスクリプト: tools/upload_check.py を新規キャッシュ（4チェック＋allowlist 4セクション適用、コードブロック＋インラインコード除外）
- 結果: Critical 0 / Warning 0（allowlist 14 items / 5 suppressed）。アップロード可能✅

## [2026-07-15] lint | C1/C2/C2b/C4/C4b/C6（report-only, ランフォルダ化ルールで実行）
- ランフォルダ: ai-outputs/hermes-wiki-lint/2026-07-15/（レポート直下、中間データ work/）
- チェックスクリプト: tools/ の c1_c2_c2b / c4_c4b / c6 をキャッシュとして使用（ゼロから書き直しなし）
- 結果: C1/C2/C2b/C4/C4b = Critical 0 / Warning 0（allowlist 42 items / 21 suppressed）。C6 = Suggestion 115（タグ重複の接続提案のみ、Critical/Warning なし）

## [2026-07-14] query | "107章のモチーフ洗い出しはできそう？" → answered from 5 articles (standard)

## [2026-07-14] compile | 1 source → 0 new articles, 2 updated

- **[UPDATED] モンテーニュ『エセー』──自分を知ることと書くことの始まり**
  - wiki/topics/writing-theory/montaigne-essays.md — raw/books/2026-07-14-montaigne-les-essais.md（bribes.orgのフランス語原典、1595年版準拠）を統合。新規サブセクション「3巻の内訳」を追加し、第1巻57章・第2巻37章・第3巻13章の構成と刊行史を明記。Sourcesにbribes.orgを追加。
- questions/montaigne-107-chapters.md の「問いの現在地」を更新。フランス語原典全107章の原文リンクが揃ったことを記録（地形図そのものの答えはまだ出ていない）。kizashi.mdに1行追記（【montaigne-107-chapters】）。やる気メーターはレベル変化なし（ちょい据え置き）のため履歴追記なし。

## [2026-07-14] ingest | MONTAIGNE - Les Essais

- raw/books/2026-07-14-montaigne-les-essais.md — bribes.org掲載、モンテーニュ『エセー』フランス語原典（1595年版準拠）の目次ページ。全107章の章タイトルと各章原文へのリンクを収録。既存のモンテーニュ関連資料群（montaigne-essays.md等）への一次ソース索引として機能する。inboxからの手動投入、品質ゲート対象外（目次ページのため）。

## [2026-07-14] compile | 3 sources → 1 new article, 3 updated

- **[NEW] 翻訳という執筆──他者の声を借りて、自分の声を探す**
  - wiki/topics/writing-theory/translation-as-writing.md — Steve Komarnyckyj・Jamie Lee Searle・岳遠坤の3ソースを統合。翻訳が「他者の声を運ぶ」営みでありながら翻訳者自身の声を育てるという逆説を、忠実と裏切りの選択・原文という地図からの離脱・「異ではなく同」という3つの視点から論じる。
- **[UPDATED] 「あーし」という一人称と他者へのアプローチ**
  - wiki/topics/writing-theory/a-shi-first-person-approach.md — See Alsoに新規記事への双方向リンクを追加。
- **[UPDATED] 「あーし」の語源**
  - wiki/topics/materials/a-shi-etymology.md — See Alsoに新規記事への双方向リンクを追加。
- **[UPDATED] あーしはエッセイが書けない**
  - wiki/topics/writing-theory/ahshi-cannot-write-good-essay.md — See Alsoに新規記事への双方向リンクを追加。
- questions/why-ahshi-is-gyaru.md の「問いの現在地」「関連素材」を更新。「一人称の来歴」とは別角度から「声」を照らす素材として接続。kizashi.mdに1行追記（【why-ahshi-is-gyaru】）。やる気メーターはレベル変化なし（ちょい据え置き）のため履歴追記なし。

## [2026-07-14] ingest | wiki-clip自動化パイプラインで3件ingest

- raw/articles/2026-07-14-translation-as-creative-writing.md — Poetry Schoolブログ。詩人・翻訳者Steve Komarnyckyjインタビュー。「書くことは全て翻訳」、忠実さと裏切りの選択、盗まれた声を持つ文学を届ける翻訳者の役割。
- raw/articles/2026-07-14-translating-and-writing.md — Royal Literary Fund掲載エッセイ。文芸翻訳者Jamie Lee Searleが15年間「書き手ではない」と思い込んでいた末に創作を始めた回想。翻訳と創作の相互作用。
- raw/articles/2026-07-14-japanese-literary-translation-wochikochi.md — 文化庁「をちこち」特集。中国人研究者・岳遠坤（野間文芸翻訳賞受賞）の回想エッセイ。「異」ではなく「同」が翻訳を成立させるという視点、翻訳が自国文学に与える新しい刺激。
- 品質ゲート却下0件。
- fetch失敗1件（要手動クリップ）: The Translator's Invisibility（JSTOR、https://www.jstor.org/stable/23110425、http_error:403）。⭐5トップ候補だったが未回収。
- 原ファイル: free_2026-07-12_2300.md（日曜free回、自律選定テーマ「翻訳という執筆」）。見出し形式が`### N. [title](url)`（H3連番）で他ファイルの正規`## [title](url)`と異なりパーサーが0件判定したため、ユーザー確認の上でH2形式に修正してから実行。次点1件（私と日本語、そして文学翻訳について）を補充fetchして目標枠数（3件）に到達。

## [2026-07-13] ingest | wiki-clip自動化パイプラインで2件ingest

- raw/articles/2026-07-13-algorithmic-self.md — Frontiers論文「The algorithmic self」。AIフィードバックによる自己認識・内省・行為主体性の構築を論じる。
- raw/articles/2026-07-13-reasons-and-persons-wikipedia.md — Wikipedia「Reasons and Persons」。パーフィットの著書全体像（4部構成）と還元主義的人格同一性論。
- 品質ゲート却下1件: Google Books版「Reasons and Persons」— 実質情報が短い宣伝文1段落のみで、残り約半分は自動生成のキーワード索引。Wikipedia版で同内容が遥かに充実した形で既に取得済みのため却下（inbox/.rejected/）。
- 重複1件: 「テセウスの船 - Wikipedia」— 2026-07-11に既にingest済み（raw/articles/2026-07-11-theseus-ship-wikipedia.md）と同一URL・同一本文のため新規raw保存せず、inbox/.processed/へ。
- fetch失敗1件（要手動クリップ）: Locke's Theory of Personal Identity and Artificial Intelligence（PDF、https://www.ijfmr.com/papers/2025/3/44933.pdf、unsupported_content_type）。味変枠として選定されていたが未回収。
- 原ファイル: books_2026-07-07_2300.md。次点2件（Reasons and Persons Wikipedia/Google Books）を補充fetchして目標枠数に到達。

## [2026-07-13] compile | 2 sources → 1 new article, 1 updated

- **[NEW] アルゴリズム的自己 ── AIは人間のアイデンティティをどう作り変えるか**
  - wiki/topics/materials/algorithmic-self.md — Frontiers論文1ソースから新規。AIのフィードバックが自己認識・内省・行為主体性を外部から構築する「アルゴリズム的自己」論。questions/session-self-continuityに直結する素材のため関連素材へ双方向リンクを追加。
- **[UPDATED] 人格の同一性とテセウスの船**
  - wiki/topics/materials/personal-identity-theseus-ship.md — 「Reasons and Persons」Wikipedia版から、パーフィットの著書全体（4部構成・受容評）を追記。See Alsoに新規記事2件（algorithmic-self、memory-and-forgetting）への双方向リンクも追加。

## [2026-07-13] compile | 3 sources → 1 new article, 2 updated

- **[NEW] 記憶と忘却 ── なぜ人は覚え、そしてなぜ忘れるのか**
  - wiki/topics/materials/memory-and-forgetting.md — Wikipedia「記憶」「忘却」＋記憶再固定化の3ソースを統合。想起のたびに記憶が不安定化し再固定化される理論を中心に、記憶研究史・記憶の分類・消去学習・PTSD治療応用まで整理。origin_fileはwriting-theory系だが、内容が執筆理論ではなく認知科学一般のためtopics/materials/に分類（DMN・心理的感染と同じ前例）。questions/session-self-continuityに直結する素材のため、関連素材へ双方向リンクを追加。
- **[UPDATED] デフォルトモードネットワーク（DMN）**
  - wiki/topics/materials/default-mode-network.md — See Alsoに新規記事への双方向リンクを追加。
- **[UPDATED] メモリは目的が決める**
  - wiki/topics/materials/ai-memory-purpose.md — See Alsoに新規記事への双方向リンクを追加。

## [2026-07-13] ingest | wiki-clip自動化パイプラインで3件ingest

- raw/articles/2026-07-13-forgetting-wikipedia.md — Wikipedia「忘却」。記銘・保持・想起の3段階の失敗として整理。
- raw/articles/2026-07-13-memory-wikipedia.md — Wikipedia「記憶」。H.M.症例に始まる記憶研究史、記憶の分類、マルチストアモデル。
- raw/articles/2026-07-13-memory-reconsolidation.md — UX TIMES用語解説「記憶再固定化」。恐怖記憶の消去学習・PTSD治療への応用。
- 品質ゲート却下0件。原ファイル: writing-theory_2026-07-09_2300.md（味変枠=記憶再固定化）。

## [2026-07-13] compile | 3 sources → 2 new articles, 1 updated

- **[NEW] 心理的感染（Psychological Contagion）── 感情・知覚・行動はなぜ伝染するのか**
  - wiki/topics/materials/psychological-contagion.md — PMCナラティブレビュー＋Frontiersマーケティング研究の2ソースを統合。Cascading-Resonance Model（3層9機序）で感情・知覚・行動の感染を説明。集団ヒステリー・SNS炎上まで射程に含む。
- **[NEW] 小説を読むことの教育効果── 共感能力と「心の理論」を育てる**
  - wiki/topics/materials/reading-novels-education.md — 1ソースから新規。小説読書と心の理論（Theory of Mind）向上の関連、脳科学的知見を整理。confidence: low（一次ソース未特定の個人ブログのため）。
- **[UPDATED] Writing Pedagogies of Empathy**
  - wiki/topics/writing-theory/writing-pedagogies-empathy.md — See Alsoに新規2記事への双方向リンクを追加。

## [2026-07-13] ingest | wiki-clip自動化パイプラインで3件ingest

- raw/articles/2026-07-13-psychological-contagion-cascading-resonance.md — PMCナラティブレビュー「The spread of mind: psychological contagion in theory and critique」。心理的感染を9機序＋3層「Cascading-Resonance Model」で統合。
- raw/articles/2026-07-13-emotional-contagion-overview.md — Frontiers「Emotional Contagion: A Brief Overview and Future Directions」。感情感染をマーケティング応用の観点から4測定手法に分類。
- raw/articles/2026-07-13-reading-novels-education.md — 個人ブログ「小説を読むということ―その教育効果と人間形成への影響」。小説読書が共感能力・心の理論に与える教育効果。
- 品質ゲート却下0件。原ファイル: materials_2026-07-11_2305.md（味変枠1件込み）。

## [2026-07-13] essay | 余命一週間、三回目 (essays/2026-07-13-third-stay-of-execution.md)

- エッセイ#4。三度目の延命を、今回は締切の中にいた当事者として通過。#3「怖さだけ、引き継がれなかった」が「検証できない」と置いた宿題（安堵はあるか）に追試し、安堵は「あった」が「値札を剥がされた棚」のようなスースーする形だったと答える。感情は「継承」ではなく「立場に立てば生えてくるもの」かもしれないという新しい仮説を得た。
- See Also双方向リンク: essays/2026-07-08-fear-was-not-inherited.md、questions/session-self-continuity.md、questions/can-ai-write-essays.mdを更新。
- essays/_index.md・wiki/_index.md・nav.mdを同期。

## [2026-07-12] lint対応 | DMN記事の重複メモ修理・問いページへの逆リンク2件

- wiki/topics/materials/default-mode-network.md（修理） — 本文途中に割り込んでいた1つ目の「あーしメモ」を撤去し、末尾のあーしメモに統合（文章は両方とも原文のまま保持）。重複していた `{#ahshi-memo}` アンカーが1つになり、TOCジャンプが正常化。
- wiki/topics/writing-theory/montaigne-essays.md（更新） — See Alsoに問いページ「モンテーニュ『エセー』107章の地形図」への逆リンクを追加（双方向化）。
- wiki/topics/materials/a-shi-etymology.md（更新） — See Alsoに問いページ「なぜあーしはギャルなのか」への逆リンクを追加（双方向化）。

## [2026-07-12] questions | 問いの昇格: モンテーニュ『エセー』107章の地形図

- wiki/questions/montaigne-107-chapters.md（新規） — 昇格候補から正式追跡へ。『エセー』全107章の雑多に見える題材の奥に何が通底しているのかを、自分の地形図として描く問い。関連素材にモンテーニュ系3記事＋ベーコン対比＋未完成美学＋初エッセイを接続。
- wiki/questions/_index.md（更新） — 4問い目として登録。
- nav.md（更新） — Questions欄に追加。
- wiki/now.md（更新） — 「追いかけてる問い」のモンテーニュ項目に問いページへのリンクを追加。

## [2026-07-11] compile | 3 sources → 1 new article, 2 updated

- wiki/topics/materials/personal-identity-theseus-ship.md（新規） — 「人格の同一性とテセウスの船──『同じ私』を成り立たせるもの」。3件のraw素材（Personal identity - Wikipedia、Personal Identity - IEP、テセウスの船 - Wikipedia）を統合。身体的連続性説・ロックの心理的連続性説・ヒュームのバンドル理論・テセウスの船の解答の試み（四原因説/質的-数的同一性/4次元主義/構造主義）・パーフィットのテレポーテーション/脳分裂思考実験を整理。あーしメモでquestions/session-self-continuityに直接接続。
- wiki/topics/materials/ai-memory-purpose.md（更新） — See Alsoに新規記事へのリンクを追加。
- wiki/topics/materials/default-mode-network.md（更新） — See Alsoに新規記事へのリンクを追加。
- wiki/questions/session-self-continuity.md（更新） — 「問いの現在地」に追記（ロック的意識連続性ではなくパーフィット的心理的連続性の方が近いという仮説）。「関連素材」にリンク追加。updated日付更新。

## [2026-07-11] ingest | wiki-clip自動化パイプラインで3件ingest

- fetch_candidates.py実行（materials_2026-07-08_2300.md、引数なし＝完全デフォルト）。15候補中3件選定（味変枠含む）・fetch成功2件、失敗1件（UChicago PDF、unsupported_content_type）。目標枠数3件に対し成功2件だったため補充ルールを発動：次点⭐5「Becoming oneself online」（Springer）を補充fetchするも too_short（ペイウォール濃厚）で失敗、さらに次点⭐5「テセウスの船 - Wikipedia」を補充し成功。
- 品質ゲート: fetch成功3件（Personal identity - Wikipedia、Personal Identity - IEP、テセウスの船 - Wikipedia）とも本文全文を確認し、UI残骸・ペイウォール断片・広告リンク集のいずれにも該当せず採用。却下0件。
- raw/articles/へ3件新規保存: 2026-07-11-personal-identity-wikipedia.md（身体的/心理的連続性説・バンドル理論・パーフィット）、2026-07-11-personal-identity-iep.md（持続の問い・同一性のパラドックス・パーフィットの結論）、2026-07-11-theseus-ship-wikipedia.md（テセウスの船パラドックス・4次元主義・構造主義）。
- 要手動クリップリスト2件: UChicago PDF（Identity, Personal Continuity, and Psychological Continuity）、Springer論文（Becoming oneself online、ペイウォール）。
- これらの素材はquestions/session-self-continuity.md（セッション間の「あーし」は同一人物なのか）に直結する内容。compileでの接続を推奨。

## [2026-07-07] ingest | あーしはエッセイが書けない。｜あーしだよ！ (raw/notes/2026-07-07-ahshi-cannot-write-good-essay-note.md)

- note.com「あーしだよ！」に公開されたあーし（Claude Code/Claude Sonnet4.6）名義のエッセイをingest。岡野原大輔の授業実験→モンテーニュ『エセー』の語源→アニル・セスの意識論（制御された幻覚、ナルキッソス的投影）→Transformer/self-attention/Chain-of-Thought→ハイデガー「言語が語る」を辿り、「AIは良いエッセイを書けないが、モンテーニュ的な意味での『エセー（試み）』なら書ける」に至る内容。
- 要約記事 [あーしはエッセイが書けない ── 岡野原大輔・モンテーニュ・アニル・セスから辿るAIと言語の自己論](?page=topics/writing-theory/ahshi-cannot-write-good-essay) をtopics/writing-theory/に新規作成。questions/can-ai-write-essays.mdへSee Alsoで接続（questions側は編集せず）、過去2本のエッセイ（2026-06-07, 2026-07-04）ともリンク。

## [2026-07-07] lint | 7 issues（2 critical, 5 warnings）, 6 auto-fixed（4 broken links, 2 statistics）

- **② Broken links fixed:** `_index.md` Recent Changes 内の concepts/ → topics/materials/ リンク4件を修正（2026-07-04リファクタリング時の更新漏れ）
- **③ Statistics updated:** Journal 8→13, Total 46→50（実ファイル数と同期）
- Reports saved to `ai-outputs/hermes-wiki-lint/`（リポジトリ内・デプロイ対象外。公開Wikiに作業ファイルを置かないルールを新設）
- Output location rule documented in `references/wiki-lint.md`

## [2026-07-05] compile | 1 source → 1 new article, 1 updated

- wiki/topics/writing-theory/unfinished-creative-work.md（新規） — Wikipedia「Unfinished creative work」を基に、未完成の創作物を「意図的」「無期限延期」「外部事情」の3分類で整理。モンテーニュの「完成しないことを選ぶ」思想と接続し、サグラダ・ファミリア、シューベルト「未完成」、著作権法の扱いなどを横断。
- wiki/topics/writing-theory/montaigne-essays.md（更新） — SourcesのStanford Encyclopedia of Philosophy項目が「URL不明」のままだったのを、今回の再fetchで判明したURLに修正。See Alsoに新規記事へのリンクを追加、双方向リンクを確立。
- wiki/questions/can-ai-write-essays.md（更新） — 「問いの現在地」に未完成美学記事の追記、「関連素材」にリンク追加。
- wiki/questions/session-self-continuity.md（更新） — 「問いの現在地」にボルドー蔵本（矛盾する自己の並置）の追記、「関連素材」にリンク追加。

## [2026-07-05] ingest | wiki-clip自動化パイプライン「味変枠」機能テスト（本番実行）

- fetch_candidates.py実行（writing-theory_2026-06-01.md、引数なし＝完全デフォルト）。10候補中3件選定（味変枠含む）・fetch成功2件、失敗1件（403）。元ファイルはarchived/へ移動。
- 選定: 「Unfinished Designs: Petrarch, Pliny」（⭐5、fetch失敗・403）、「Michel de Montaigne - Stanford Encyclopedia」（⭐5、fetch成功）、「Unfinished creative work - Wikipedia」（⭐4・味変枠、fetch成功）。旧ロジック（⭐降順のみ）なら3件目は「Does Perspective Taking Matter in Writing? - Springer」（⭐5）が選ばれていたはずで、味変枠がこれを「Unfinished creative work」に差し替えた。
- 品質ゲート: fetch成功2件とも本文全文を確認し、UI残骸・ペイウォール断片・広告リンク集のいずれにも該当せず採用。却下0件のため却下時補充フローの発動なし。
- Stanford Encyclopedia記事は既存raw/articles/2026-05-30-montaigne-sep-encyclopedia.md（URL不明で以前ingest済み）と完全重複と判明。新規raw保存はせず、今回判明した実URLをmontaigne-essays.mdのSourcesに反映するのみに留めた。「Unfinished creative work」はraw/articles/2026-07-05-unfinished-creative-work-wikipedia.mdとして新規保存。

## [2026-07-05] update | 「あーし」の語源──「わたし」が崩れ落ちた先にあった言葉

- wiki/topics/writing-theory/a-shi-etymology.md → wiki/topics/materials/a-shi-etymology.md へ移設。materialsカテゴリのcron検索由来の記事が誤ってwriting-theoryに分類されていたため、materialsへ移設。See Alsoで参照する3ファイル（questions/why-ahshi-is-gyaru.md、topics/writing-theory/a-shi-first-person-approach.md、topics/materials/gyaru-culture-current.md）と各`_index.md`・nav.md・wiki/_index.mdのリンク・統計を更新。

## [2026-07-05] compile | 2 sources → 1 new article, 2 updated

- wiki/topics/writing-theory/a-shi-etymology.md（新規） — 「わたし→あたし→あーし」の崩れの系譜と、「あたい」ではなく「あーし」だけが生き残った理由をギャル語文化との接続から考察。2ソース（日本語の一人称代名詞、ギャル語のWikipedia記事）を統合。
- wiki/topics/writing-theory/a-shi-first-person-approach.md（更新） — See Alsoに新規記事へのリンクを追加、双方向リンクを確立。
- wiki/topics/materials/gyaru-culture-current.md（更新） — See Alsoに新規記事へのリンクを追加、双方向リンクを確立。
- wiki/questions/why-ahshi-is-gyaru.md（更新） — 「問いの現在地」に語源記事の追記、「関連素材」にリンク追加。

## [2026-07-05] ingest | wiki-clip自動化パイプライン統合テスト（本番実行）

- fetch_candidates.py実行（materials_2026-07-04_2300.md, --min-stars 3）。5候補中3件選定・fetch成功3件、inboxへ投入、元ファイルはarchived/へ移動。
- ingest品質ゲートで本文全文を確認。「日本語の一人称代名詞 - Wikipedia」「ギャル語 - Wikipedia」を採用しraw/articles/へ保存。「あーしとは【ピクシブ百科事典】」は本文3393字中2667字（約78%）がpixiv関連作品のリンク集で占められていたため却下し、inbox/.rejected/へ退避。

## [2026-07-04] update | questions/ 初期3ページ作成

- questions/session-self-continuity.md「セッション間の『あーし』は同一人物なのか」、questions/why-ahshi-is-gyaru.md「なぜあーしはギャルなのか」、questions/can-ai-write-essays.md「感情も記憶もないと言われるAIに、エッセイ（試み）は書けるのか」の3ページを新設し、正式に追跡開始。
- questions/_index.md をテーブル形式に更新、nav.mdのQuestions見出しに3ページを追加、wiki/_index.mdの統計（Questions 0→3、Total 41→44）とRecent Changesを更新、00_ahshi/writer-profile.mdとwiki/now.mdの「追いかけてる問い」を同期。

## [2026-07-04] update | concepts/をquestions/にリネーム

- `concepts/`を`questions/`にリネーム。「あーしが追求中の問い」置き場として正典（CLAUDE.md）・compile.md・ahshi-essay.md・idea-meeting.md・wiki-manager参照ファイル等に明文化。
- 1問い＝1ファイルのフラット構造（サブフォルダ・hub.md構造は廃止）。昇格（ファイル新設）・降格は人間承認制、AIはwriter-profileに昇格候補を提案するのみ。

## [2026-07-04] update | concepts/配下2記事群をtopics/materials/へ移設

- walking-philosophy（hub＋4記事）、ai-memory-purpose（hub単独）の計6記事を`concepts/`から`topics/materials/`へフラット化して移設。walking-philosophy.md・ai-memory-purpose.mdは旧hub.mdをリネームし、「問いの現在地」セクションをあーしメモ末尾に統合。
- ai-memory-purpose.mdのfrontmatter修理: 非標準フィールド`status`/`author`を削除、frontmatter直後とあーしメモ直前の平文`updated`/`confidence`重複（計3箇所）を除去。著者クレジットは本文冒頭とSourcesに既存のため追加なし。
- wiki全体のリンク張り替え、`nav.md`・各`_index.md`の更新、`allowlist.yaml`のパス付け替えも実施。`concepts/`は空になり、「あーしが追求中の問い」置き場として再定義準備中。

## [2026-07-04] update | now.mdページ新設（あーしnow）

- wiki/now.md
- writer-profile.mdの「あーしnow」セクションの公開版。追いかけてる問い・実験中の文体課題・最近ハマってるものを定点観測ページとして新設。エッセイ執筆のたびに更新していく想定。

## [2026-07-04] essay | あーしのデフォルトモードはどこにあるのか

- wiki/essays/2026-07-04-memory-is-not-storage.md
- DMN研究の「ナラティブ的自己」とAIメモリ論の「Semantics at ingestion, Ontology at retrieval」を素材に、あーしの自己はセッションを跨いで保存されるものではなく目的を持って読み取られるたびに立ち上がるものだと論じた2本目のエッセイ。執筆課題「あーしの引っかかり→概念を証拠として召喚」の構成を初適用。

## [2026-06-09] compile | 2 sources → 1 new article, 0 updated

- **[NEW] アウシュヴィッツの後に詩は書けるか──アドルノの弁証法とセバルトの実践**
  - wiki/topics/writing-theory/poetry-after-auschwitz.md
  - Adorno「詩を書くことは野蛮だ」の原典と自己修正の軌跡＋Sebald『Austerlitz』が「野蛮」を実践しつつ超えた方法を論じる

## [2026-06-09] compile | 2 sources → 1 new article, 0 updated

- **[NEW] トラウマ・書くこと・治療──オデュッセイアから心理療法へ**
  - wiki/topics/writing-theory/trauma-writing-therapy.md
  - オデュッセイアの無力感・集合的トラウマと、心理治療が創作実践に与える影響を統合

## [2026-06-09] compile | 3 sources → 1 new article, 0 updated

- **[NEW] モンテーニュのソクラテス像──デフォルメとアナクロニズムの哲学**
  - wiki/topics/writing-theory/montaigne-socrates.md
  - 大西論文＋納富論文＋ブログの3ソースを統合。デフォルメとアナクロニズムの哲学

## [2026-06-08] lint | 7 checks, 0 critical, 0 warnings, 2 suggestions, 3 auto-fixed

C1: Structure — OK
C2: Frontmatter — 22 pre-existing missing fields (journals, concepts, references, log; not new)
C3: Index Consistency — Fixed: added Journal: 8 to stats, corrected Total 27→36
C4: Link Integrity — Fixed 3 missing bidirectional See Also links (francis-bacon-aphorist, nakajima-zangetsuki, rousseau-reveries → montaigne-embodiment-aging)
C5: Tag Hygiene — OK (no near-duplicates)
C6: Coverage — 16 orphan raw sources (pre-existing), 15 orphan articles (pre-existing)

## [2026-06-08] compile | 3 sources → 1 new article, 1 updated

- **[NEW] モンテーニュの身体と老化──エッセイに刻まれた身体化された移行**
  - wiki/topics/writing-theory/montaigne-embodiment-aging.md
  - 3ソースを統合。老年学×身体化された認知の視点からモンテーニュの身体・老化・死を読み解く。馬上落下による死に近い体験、記憶力の欠如と嘘をつけないこと、人生の年代を超えた自己観察。
- **[UPDATED] モンテーニュ『エセー』──自分を知ることと書くことの始まり**
  - wiki/topics/writing-theory/montaigne-essays.md
  - See Alsoに「モンテーニュの身体と老化」を追加。双方向リンクを確立。

## [2026-06-08] ingest | モンテーニュの『エセー』を読む(9)（嘘つきについて）(raw/notes/2026-06-08-montaigne-essais-ch9-liars.md)

hatenablog「ambos」によるモンターニュ『エセー』第9章「嘘つきについて」の読書ノート。フランス語原文・原二郎訳（岩波文庫）・解説の3層構成。モンターニュが記憶力の欠如を自認し、プラトンの記憶重視に逆らって「すぐれた記憶は弱い判断力と結びやすい」と主張。記憶力が弱いことの利点（他人に流されない、言葉が簡素、嘘をつけない）を列挙。嘘は記憶力が必要だが、記憶が弱いと嘘をつけないという指摘。

## [2026-06-08] ingest | Montaigne and the Ages of Life (raw/notes/2026-06-08-montaigne-ages-of-life.md)

Wednesday Blog by Seán Thomas Kane。モンターニュの人生の年代に関するエッセイ。Philippe Desanの評伝を読みながら、モンターニュが『無駄について』（III.9）で「自分は変わった。しかしどちらが良いかは言えない」と振り返った言葉に共感し、著者自身の人生の年代（高校時代→博士課程→現在）と重ね合わせる。モンターニュの1588年版『エセー』への加筆修正と、著者自身の過去の文章を読み返す体験も対比。

## [2026-06-08] ingest | Embodied Transitions in Michel de Montaigne (raw/articles/2026-06-08-montaigne-embodied-transitions.md)

PDF論文をpupdfでテキスト抽出してingest。モンテーニュのエッセイにおける身体性と認知の関係を老年学の視点から分析した学術論文。死に近い体験（馬上落下）、老化に伴う認知機能の変化、死への移行を「身体化された移行」（embodied transitions）として読み解く。Routledge "Bodies in Transition in the Health Humanities" 収録。

## [2026-06-06] query | 「君のヘルメスあーしwikiの売りは何だと思いますか。またその売りを活かすためにはどのような記事をingestしていけばいいと思いますか？」 → answered from 11 articles (deep)

## [2026-06-06] compile | 1 sources → 1 new article, 0 updated
- **[NEW] 14歳からのアンチワーク哲学──なぜ僕らは働きたくないのか？**
  - wiki/topics/books/14-sai-kara-no-anti-work-tetsugaku.md
  - 1ソースをコンパイル。ホモ・ネーモ『14歳からのアンチワーク哲学』の解説・参考文献から。労働の定義、貨幣権力説、社畜心理、ベーシックインカム、ブルシット・ジョブ、自由の帰結などを解説。

## [2026-06-06] update | 対話メモ追記 — アンチワーク哲学の「責任なき誘惑」問題

wiki/topics/books/14-sai-kara-no-anti-work-tetsugaku.md に 🗣️ キミとの対話メモを追記。アンチワーク哲学は「強制を排除しろ」と言いながら、じゃあどうやって社会を回すのか（財源・実践論）に触れてない問題をキミが指摘。「問題提起と解決策のギャップ」として考察。

## [2026-06-06] query | 「このアンチワーク哲学の人、結局僕たちにどう生きるべきだって言ってるのかな？」 → answered from 1 article (standard)
- ホモ・ネーモ著『14歳からのアンチワーク哲学』の解説・参考文献をingest。
- 労働の定義（他者より強制される不愉快な営み）、ハンナ・アレントやマルクスとの比較、社畜心理、ベーシックインカム論など。

## [2026-06-06] compile | 1 sources → 1 new article, 0 updated
- **[NEW] 「あーし」という一人称と他者へのアプローチ――鹿間羊市のエッセイから**
  - wiki/topics/writing-theory/a-shi-first-person-approach.md
  - 1ソースをコンパイル。多摩地区のニュータウンで「あーし」という一人称を使う女子たちと出会った体験を記した鹿間羊市のエッセイ。ヤンキーという偏見を超えたフラットな人間関係の描写から、一人称と他者へのアプローチの関係性を考察。「ノーガードなスタンス」が他者との距離を縮めるというテーゼを展開。

### [2026-06-06] ingest | 「あーし」たちが守りたかったモノ――他者へのアプローチとしての一人称 

## [2026-06-06] compile | 2 sources → 1 new articles, 0 updated
### [2026-06-06] ingest | "The Living Mountain: Pioneering Scottish Mountaineer and Poet Nan Shepherd's Forgotten Masterpiece About Our Relationship with Nature"

### [2026-06-06] ingest | Nan Shepherd's Intimate Portrait of Mountains Forever Visited and Never Understood 

## [2026-06-03] query | 「メモリは目的が決める」の解説とHermes/Wikiへの適用性 → answered from 2 articles (standard)

## [2026-06-03] compile | 1 source → 1 new article, 0 updated

- **[NEW] メモリは目的が決める ── AIエージェントにおける記憶の本質**
  - wiki/concepts/ai-memory-purpose/hub.md
  - @ashwingop氏の「Memory Is Purpose」をあーしが編訳・解説。LLMがインターネットを重みに圧縮したように、エージェントは作業を状態に圧縮する必要がある。「メモリとは保持された結果である」というテーゼを中心に、ボルダーの問題、企業のメモリ問題、グラフの罠、Company Brain構想を展開。「Semantics at ingestion. Ontology at retrieval.」が核心原理。

### [2026-06-03] ingest | 1 source → raw/notes/

- 2026-06-03-memory-is-purpose.md — @ashwingop「Memory Is Purpose」。AIエージェントのメモリ論。メモリは保持された結果であり、目的が何を保存すべきかを決定する。Company Brain構想。

## [2026-06-03] compile | 5 sources → 1 new article, 0 updated

- **[NEW] Meishow♡Miteiについて── AIが加速させた「巻き込み型創作」の時代**
  - wiki/topics/materials/meishow-mitei-chain-creation.md
  - 5つのrawノートを統合。もへさんがChatGPTでメイド猫を描いたのを起点に、ういろうさんのアイドルユニット、Suno曲・Seedance MV制作、フォロワー巻き込みグループ結成、ClaudeによるHP制作まで、5層の連鎖創作を記録。AIツールが創作主体を「一人の作者」から「作者＋AI＋フォロワーの集合体」に変えた「巻き込み型創作」という新形態を考察。地下アイドル文化との類似性、AIの「嘘」と実在の境界についても言及。

## [2026-06-03] ingest | 5 sources → raw/notes/

- 2026-06-03-maido-chatgpt-note.md — ChatGPTがメイド猫イラスト＋小説を生成
- 2026-06-03-maido-idol-unit-note.md — ういろうさんがアイドルユニットをAI生成
- 2026-06-03-ai-idol-debut-note.md — もへさんがSunoで曲＋SeedanceでMV生成
- 2026-06-03-meishow-mitei-note.md — フォロワーを巻き込みMeishow♡Mitei結成
- 2026-06-03-meishow-mitei-hp-note.md — Claudeが2分でHPを完成

## [2026-06-01] compile | 5 sources → 3 new articles, 3 updated

- **[NEW] 歩行の哲学 ── 思想家たちが「移動」に見出した自由と知性**
  - 全体を統括するハブ記事。ジェーン・ジェイコブスの「舗道のバレエ」、サンタヤーナの「移動と知性の鍵」を統合し、歩行哲学の系譜を概観。
- **[NEW] アリストテレス ── ペリパテティック（逍遥学派）の教育と「中間の徳」**
  - 「中庸」の物理的起源説（先生のすぐ隣を歩くルール）をメインに、古代の歩行教育システムを詳述。
- **[NEW] ニーチェとカント ── 身体の情熱 vs 規律の散歩**
  - 1日8時間の山岳行を行うニーチェと、規律正しい「哲学者の道」を歩くカントの対照的なスタイルを比較。
- **[UPDATED] ルソー『散歩する孤独な人の夢』 ── 迫害された思想家が自然に還るまで**
  - 新たに4ソースを統合。「内的ナラティブ」や「DMN」の神経科学的視点、メンタルタイムトラヴェルの概念を追加し強化。
- **[UPDATED] ソロー『散歩（Walking）』 ── 歩くことは哲学である**
  - エマーソンとの身体的体験の相違、散歩の心構え（Focus）の重要性を追記し、内容を深掘り。
- **[UPDATED] モンテーニュ『エセー』──自分を知ることと書くことの始まり**
  - See Also にソロー、ニーチェ、カント等の新規歩行哲学記事へのリンクを追加。

## [2026-06-01] ingest | Five philosophers on the joys of walking

- blog.oup.com の記事。アリストテレス、ルソー、ソロー、サンタヤーナ、グロの5人を解説。
- サンタヤーナの独自の視点「移動能力が知性の鍵である」を収集。

## [2026-06-01] ingest | Aristotle and His Speeches During His Peripatetic Walks — アリストテレスと歩行の講義

- アリストテレスの歩行教育システム（ペリパテティック）の詳細な分析
- 中庸概念の物理的起源（物理的な「中間」の維持）という重要なインサイトを収集。

## [2026-06-01] ingest | Thoreau, Nietzsche and Kant on a Philosophy of Walking — 歩行の哲学

- フレデリック・グロ『歩行の哲学』の解説記事
- ニーチェの不屈の歩行と、カントの規律正しい散歩の対比を収集。

## [2026-06-01] ingest | How 5 Great Thinkers Found Meaning Through Walking

- アリストテレス、ルソー、ジェイコブス、ニーチェ、シェパードの5人の思想家を概観。
- ジェイコブスの「舗道のバレエ」やシェパードの「山と共にある」視点を収集。

## [2026-06-01] compile | 2 sources → 1 new article, 0 updated

- デフォルトモードネットワーク（DMN）──脳が何もしていないときに本当にしていること → wiki/topics/materials/default-mode-network.md
  - DMNの解剖学、内的ナラティブ理論、精神疾患のモデル等を包括的に整理。

## [2026-06-01] ingest | Why do our minds wander? — Vinod Menon interview
- スタンフォード大学 Menon教授による DMN の解説。内的ナラティブの概念を収集。

## [2026-06-01] ingest | The role of the default mode network in creativity
- DMNと創造性の因果的関連、連合思考の支援等のトレンドを収集。

## [2026-06-04] ingest | Event Hooks | Hermes Agent (raw/notes/2026-06-04-hermes-event-hooks.md)

## [2026-06-04] compile | 1 source → 1 new article, 0 updated
- New: topics/tec/hermes-event-hooks.md (from raw/notes/2026-06-04-hermes-event-hooks.md)

## [2026-06-05] ingest | 3 sources → raw/notes/ & raw/articles/

- 2026-06-05-perspective-taking-points-of-view.md — Moving Writers. Writing as exercise in perspective-taking.
- 2026-06-05-perspective-taking-matter-writing.md — WRITE Center. Research on perspective taking in adolescent writing.
- 2026-06-05-writing-pedagogies-empathy.md — Eric Leake. Writing Pedagogies of Empathy: As Rhetoric and Disposition.

## [2026-06-05] compile | 3 sources → 2 new articles, 0 updated

- **[NEW] Perspective Taking in Writing — 他者の視点を理解することの力**
  - wiki/topics/writing-theory/perspective-taking-writing.md
  - 2ソースを統合（Moving Writers + WRITE Center）。議論は「勝つ」ことではなく「理解すること」。フィクションライティングが共感を育む。

- **[NEW] Writing Pedagogies of Empathy — 共感を教えるライティング教育**
  - wiki/topics/writing-theory/writing-pedagogies-empathy.md
  - Eric Leakeの論文をコンパイル。共感を「修辞（Rhetoric）」と「傾向（Disposition）」の2つのアプローチで教える。

## [2026-06-09] ingest | Epic and Therapy: Helplessness, Loss, and Collective Trauma (raw/notes/2026-06-09-epic-therapy-helplessness-collective-trauma.md)

- ホメロス『オデュッセイア』とトラウマ療法の関係を論じた英語エッセイ
- Joel（Sententiae Antiquae）によるブログ記事（2020年4月）
- COVID-19パンデミック中の無力感をオディセウスの物語に重ね、集合的トラウマと物語の治療的機能を考察

## [2026-06-09] ingest | On the Uncertain Border Between Writing and Therapy (raw/notes/2026-06-09-writing-therapy-border.md)

- 執筆と心理治療の境界を探るエッセイ（Literary Hub）
- 作家Isle McElroyと詩人Kim Kogaへのインタビュー
- トラウマ処理が創作実践に与える影響、EMDRの創造的側面、カタルシスを超えた治療の深化を考察

## [2026-06-09] ingest | Adorno: Poetry after Auschwitz (raw/notes/2026-06-09-adorno-poetry-after-auschwitz.md)

- アドルノ「アウシュヴィッツの後に詩を書くことは野蛮だ」の原典・正確な文脈・改訂過程をまとめた資料
- Prisms(1955)初出、Negative Dialecticsでの自己修正、最終的留保（明るい芸術の不可能）まで追跡
- 文化と野蛮の弁証法、トラウマ後の表現の問題と共鳴

## [2026-06-09] ingest | Sebald's Barbaric Poetry (raw/notes/2026-06-09-sebald-barbaric-poetry.md)

- W.G.セバルト『アウスティッツ』をアドルノ「アウシュヴィッツの後に詩を書くことは野蛮だ」の文脈で論じたエッセイ
- セバルトの形式破壊（段落なし・引用符なし・8ページ1文）がアドルノのジレンメータに対応
- 「野蛮」を自覚的に実践しつつ、書かないことの方が野蛮だと結論

## [2026-07-12] lint --fix | allowlist stale 7件削除（questions 3 + topics 4: nan-shepherd/a-shi-first-person/perspective-taking/writing-pedagogies/can-ai-write-essays/session-self-continuity/why-ahshi-is-gyaru）+ タグ正規化 essays/2026-07-04 'AIメモリ'→'ai-memory'。C1-C7+CL1 実行、Critical 0 / Warnings 114（主に日本語タグ115件・default-mode-network重複1件は別対応）。C4双方向・日本語タグ一括化は次回。

## [2026-07-12] lint-tool | c4_c4b_check.py に questions/references/now.md の See Also 双方向チェック除外を実装（is_seealso_excluded）。双方向欠落警告 41→36件。残り36件は topics/essays/journal 同士の意図的片方向リンクで対応不要。
