# Nuxt Minimal Starter
# Nuxt3 デモアプリケーション

このプロジェクトはPR-agentの動作確認のために作成されたNuxt3のデモアプリケーションです。

## 機能

- ユーザープロフィール表示と編集
- タスク管理（追加・完了・一覧表示）
- カウンター機能
- レスポンシブデザイン

## 技術スタック

- [Nuxt 3](https://nuxt.com/) - Vue.jsフレームワーク
- [Vue 3](https://vuejs.org/) - UIフレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な開発
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストCSS
- [Pinia](https://pinia.esm.dev/) - 状態管理

## 始め方

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動 (http://localhost:3000/)
npm run dev

# プロダクションビルド
npm run build

# ビルドされたアプリケーションのプレビュー
npm run preview
```

## ディレクトリ構成

```
/
├── app/              # アプリケーションコード
│   ├── components/   # Vueコンポーネント
│   ├── composables/  # コンポーザブル関数
│   ├── layouts/      # レイアウトコンポーネント
│   ├── pages/        # ページコンポーネント
│   ├── types/        # TypeScript型定義
│   └── assets/       # スタイルシートや画像などのアセット
├── public/           # 静的ファイル
└── nuxt.config.ts    # Nuxt設定ファイル
```

## ライセンス

MIT
Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
