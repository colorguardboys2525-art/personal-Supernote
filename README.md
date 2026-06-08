# 意識チェックシート - Firebase & GitHub 統合版

> 毎日の意識を記録して成長を可視化するアプリケーション

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Enabled-brightgreen)](https://github.com/your-username/awareness-check-sheet/deployments/activity_log?environment=github-pages)
[![Firebase](https://img.shields.io/badge/Firebase-Enabled-orange)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 🚀 機能

### コア機能
- ✅ **複数ユーザー対応** - パスワードで保護されたユーザー管理
- 📊 **週単位のチェックシート** - 7日間の記録を一目で確認
- 💬 **反省・気づき欄** - 毎日の気づきを記録
- 📥 **画像エクスポート** - シートをJPG形式で保存
- 🎨 **カラーテーマ** - 6種類のテーマから選択可能
- 📅 **過去シート管理** - 過去の記録を履歴から参照

### クラウド機能（新機能）
- 🔐 **Firebase認証** - Googleアカウント・メール認証に対応予定
- ☁️ **Realtime Database** - データをクラウドに自動同期
- 📸 **Cloud Storage** - シート画像をクラウド保存予定
- 🔄 **リアルタイム同期** - デバイス間でのデータ自動同期
- 📱 **オフラインサポート** - ネット切断時はローカルで動作

### デプロイ機能
- 🌐 **GitHub Pages** - 無料でWebアプリをホスト
- ⚙️ **自動デプロイ** - GitHub Actions で自動ビルド＆デプロイ
- 🔒 **セキュアな設定** - Database Rules と Storage Rules で保護

## 📋 セットアップガイド

### 前提条件
- Node.js 18以上
- Git
- Firebaseアカウント
- GitHubアカウント

### ステップ1: Firebase プロジェクト作成

1. [Firebase Console](https://console.firebase.google.com/) にアクセス
2. 「プロジェクトを作成」をクリック
3. プロジェクト名を入力（例：`awareness-check-sheet`）
4. 設定を完了

### ステップ2: Firebase 設定を取得

1. Firebase Console で プロジェクト設定を開く
2. 以下の情報をコピー：
   ```
   apiKey
   authDomain
   projectId
   storageBucket
   messagingSenderId
   appId
   ```

3. `src/firebase-config.js` の以下の部分を編集：
   ```javascript
   export const firebaseConfig = {
     apiKey: "YOUR_API_KEY",  // ↑ここに貼り付け
     authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
     // ... 他の設定
   };
   ```

### ステップ3: ローカルで動作確認

```bash
# 依存関係をインストール
npm install

# ローカルサーバーを起動
npm run dev

# ブラウザで http://localhost:8080 にアクセス
```

### ステップ4: GitHub リポジトリを作成

1. GitHub で新しいリポジトリを作成（`awareness-check-sheet`）
2. リポジトリをクローン：
   ```bash
   git clone https://github.com/your-username/awareness-check-sheet.git
   cd awareness-check-sheet
   ```

3. ファイルをコミット＆プッシュ：
   ```bash
   git add .
   git commit -m "Initial commit: Firebase & GitHub Pages setup"
   git push origin main
   ```

### ステップ5: GitHub Pages を有効化

1. GitHub リポジトリの Settings → Pages
2. Build and deployment の Source を「GitHub Actions」に設定
3. 「Save」

### ステップ6: Firebase デプロイトークンを取得

```bash
# Firebase CLI をグローバルにインストール
npm install -g firebase-tools

# ログイン
firebase login

# トークンを生成
firebase login:ci
```

生成されたトークンをコピーしておきます。

### ステップ7: GitHub Secrets を設定

リポジトリの Settings → Secrets and variables → Actions から以下を追加：

| Secret 名 | 値 |
|-----------|-----|
| `FIREBASE_PROJECT_ID` | Firebase プロジェクトID |
| `FIREBASE_TOKEN` | ステップ6で取得したトークン |
| `FIREBASE_SERVICE_ACCOUNT` | Firebase Service Account JSON（詳細は下記） |

**Service Account JSON 取得方法：**
1. Firebase Console → Project Settings → Service Accounts
2. Python の「新しい秘密鍵を生成」をクリック
3. ダウンロードしたJSONの内容を `FIREBASE_SERVICE_ACCOUNT` に貼り付け

### ステップ8: CI/CD パイプラインをテスト

```bash
# main ブランチにプッシュしてデプロイが実行されることを確認
git commit --allow-empty -m "Trigger deployment"
git push origin main

# GitHub Actions のログを確認：リポジトリ → Actions タブ
```

## 📦 デプロイ後のアクセス

デプロイ完了後、以下のURLでアプリにアクセスできます：

```
https://your-username.github.io/awareness-check-sheet/
```

## 🔧 トラブルシューティング

### ❌ Firebase に接続できない
- `src/firebase-config.js` の設定を確認
- Firebase Console でプロジェクトが有効になっているか確認
- ブラウザのコンソール（F12キー）でエラーを確認

### ❌ デプロイが失敗する
- GitHub Secrets が正しく設定されているか確認
- GitHub Actions ログで詳細を確認：リポジトリ → Actions
- `firebase.json` が存在するか確認

### ❌ GitHub Pages にアクセスできない
- Settings → Pages で正しいブランチが選択されているか確認
- GitHub Actions が正常に完了したか確認
- キャッシュをクリアして再度アクセス

## 🛠️ 開発用 Firebase エミュレータ

ローカル開発時にFirebaseエミュレータを使用できます：

```bash
# エミュレータをインストール
npm install -g firebase-tools

# エミュレータを起動
firebase emulators:start

# src/firebase-config.js で USE_EMULATOR を true に設定
```

## 📝 ファイル構造

```
.
├── index.html                 # メインHTMLファイル
├── src/
│   ├── firebase-config.js     # Firebase設定
│   ├── storage-manager.js     # データ管理（Firebase + localStorage）
│   └── app.js                 # アプリケーション主要ロジック（今後作成）
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions CI/CDパイプライン
├── firebase.json              # Firebaseホスティング設定
├── database.rules.json        # Realtime Database ルール
├── storage.rules              # Cloud Storage ルール
├── package.json               # 依存関係
├── .gitignore                 # Git無視ファイル
└── README.md                  # このファイル
```

## 🚀 次のステップ

- [ ] Firebase認証（Google/メール）を実装
- [ ] Realtime Database との同期を実装
- [ ] Cloud Storage への画像保存を実装
- [ ] PWA（Progressive Web App）対応
- [ ] オフラインサポート（Service Worker）
- [ ] マルチデバイス同期
- [ ] ダークモード対応
- [ ] 多言語対応

## 📄 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照

## 🤝 貢献

プルリクエストを歓迎します。大きな変更の場合は、まずissueを開いて変更内容を議論してください。

## 📞 サポート

問題が発生した場合は、GitHubの Issues タブで報告してください。

---

**作成日:** 2026-06-08
**最終更新:** 2026-06-08
