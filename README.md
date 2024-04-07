# README

みんなで使えるツールを寄せ集めるサイトです。気軽に追加していってください。

## Getting Started

```bash
bun install
bun dev

# too-hub を末尾につけてください
http://localhost:3000/tool-hub
```

## アイテムの追加（GitHub 上から可能）

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/dninomiya/tool-hub?quickstart=1)

1. [data/item.ts](../../edit/main/data/item.ts) にアイテムを追加
   - アイテム ID はドメイン名の引用を推奨
   - タグはよしなに追加してもらっても OK です
2. [public/images](../../tree/main/public/images) にサムネイル**(.png)**を追加
   - ファイル名はアイテム ID と一致させる
   - 概ね 16:9 であれば良いです
   - 該当サイトの素材の雰囲気がわかるショットだと良いです（ロゴなど抽象的なものは避ける）
3. プルリクエストの作成後、オーナーがレビュー&マージします。

## アイテムの追加（リクエストベース）

コードを書かない場合、Issue からリクエストをお願いします。サムネイルはリクエスト後の Issue に添付してください。サムネイルがない場合こちらでショットします。

[リクエスト](https://github.com/dninomiya/tool-hub/issues/new?assignees=&labels=feature&projects=&template=new.yml&title=%5Bリクエスト%5D%3A+)

## 備考

- クオリティを担保したいので、僕の独断で追加を見送ることがあります。ご了承ください。
- 機能追加の提案やアイディアがあれば気軽に Issue や [X](https://x.com/d151005/status/1776989554639278583) でご連絡ください。
