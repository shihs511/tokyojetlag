<p align="center">
  <img src="public/favicon.svg" alt="Tokyo Jet Lag Logo" width="80">
</p>

<h1 align="center">Tokyo Jet Lag Site</h1>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4">
  <img src="https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa&logoColor=white" alt="PWA">
  <img src="https://img.shields.io/badge/License-Private-red" alt="License">
</p>

<p align="center">
  <strong>東京のナイトライフ・ベニューガイド — Tokyo Nightlife & Venue Guide</strong>
</p>

---

## Screenshots

<!-- スクリーンショットを追加してください -->

| Home | About | Contact |
|------|-------|---------|
| ![Home](screenshots/home.png) | ![About](screenshots/about.png) | ![Contact](screenshots/contact.png) |

> **Note:** `screenshots/` フォルダを作成し、スクリーンショットを配置してください。

---

## プロジェクト概要

Tokyo Jet Lag Site は、東京のナイトライフ情報を発信する React SPA（シングルページアプリケーション）です。Vite + React + Tailwind CSS をベースに、モダンで高速なフロントエンドを実現しています。PWA 対応済みで、モバイルデバイスからもアプリライクな体験を提供します。

---

## 機能一覧

- **ホームページ** — ヒーローセクション、ベニュー紹介、ハイライト
- **About ページ** — プロジェクトの背景、ミッション、チーム情報
- **Contact ページ** — お問い合わせフォーム、SNSリンク
- **レスポンシブデザイン** — モバイル・タブレット・デスクトップ対応
- **PWA サポート** — Service Worker、Web App Manifest、オフライン対応
- **SEO 最適化** — sitemap.xml、robots.txt、OGP メタタグ
- **パフォーマンス最適化** — Vite によるビルド最適化、コード分割

---

## ファイル構成

```
Tokyo Jet Lag Site/
├── public/
│   ├── favicon.svg          # ファビコン
│   └── icons.svg            # アイコンスプライト
├── src/
│   ├── assets/
│   │   └── hero.png         # ヒーロー画像
│   ├── components/
│   │   ├── Navbar.jsx       # ナビゲーションバー
│   │   └── Footer.jsx       # フッター
│   ├── pages/
│   │   ├── Home.jsx         # ホームページ
│   │   ├── About.jsx        # About ページ
│   │   └── Contact.jsx      # Contact ページ
│   ├── App.jsx              # ルーティング設定
│   ├── App.css              # アプリ共通スタイル
│   ├── index.css            # グローバルスタイル
│   └── main.jsx             # エントリーポイント
├── dist/                     # ビルド出力
├── icon-192.svg             # PWA アイコン (192x192)
├── icon-512.svg             # PWA アイコン (512x512)
├── ogp-image.svg            # OGP 画像
├── manifest.json            # Web App Manifest
├── sw.js                    # Service Worker
├── robots.txt               # クローラー設定
├── sitemap.xml              # サイトマップ
├── vite.config.js           # Vite 設定
├── eslint.config.js         # ESLint 設定
├── package.json             # 依存関係
└── README.md                # このファイル
```

---

## セットアップ方法

### 前提条件

- Node.js 18+
- npm 9+

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd "Tokyo Jet Lag Site"

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:5173` を開きます。

### リント

```bash
npm run lint
```

---

## ビルド & デプロイ

### プロダクションビルド

```bash
npm run build
```

`dist/` フォルダに最適化されたファイルが生成されます。

### プレビュー

```bash
npm run preview
```

### デプロイ方法

#### GitHub Pages

1. `vite.config.js` に `base` を設定:
   ```js
   export default defineConfig({
     base: '/tokyo-jet-lag-site/',
     // ...
   })
   ```
2. ビルド後、`dist/` フォルダを `gh-pages` ブランチにプッシュ

#### Netlify / Vercel

1. リポジトリを接続
2. ビルドコマンド: `npm run build`
3. 公開ディレクトリ: `dist`

---

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | React 19 |
| ビルドツール | Vite 8 |
| スタイリング | Tailwind CSS 4 |
| ルーティング | React Router DOM 7 |
| リント | ESLint 9 |
| PWA | Service Worker + Manifest |

---

## TODO

- [ ] ベニューデータの CMS 連携
- [ ] 画像の WebP 変換・最適化
- [ ] i18n（多言語化）対応
- [ ] ダークモード / ライトモード切替
- [ ] Google Analytics 導入
- [ ] お問い合わせフォームのバックエンド接続
- [ ] ユニットテスト・E2Eテスト追加
- [ ] CI/CD パイプライン構築

---

<p align="center">
  Built with ❤️ in Tokyo
</p>
