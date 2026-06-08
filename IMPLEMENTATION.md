# Firebase & GitHub 統合 - 実装チェックリスト

このドキュメントは、意識チェックシートを Firebase と GitHub に統合する際の実装チェックリストです。

## 📋 前提条件

- ✅ Firebase アカウント（Google アカウント）
- ✅ GitHub アカウント
- ✅ Node.js 18 以上
- ✅ Git
- ✅ コマンドライン操作の基本知識

## 🔧 セットアップの流れ

### フェーズ1：Firebase プロジェクト作成（実装済み）

- ✅ `src/firebase-config.js` - Firebase設定ファイル
- ✅ `src/storage-manager.js` - クラウドストレージ管理
- ✅ `firebase.json` - Firebaseホスティング設定
- ✅ `database.rules.json` - Realtime Database ルール
- ✅ `storage.rules` - Cloud Storage ルール
- ✅ `.github/workflows/deploy.yml` - CI/CD パイプライン

**あなたがすること:**

1. **SETUP.htmlを開いて実行**
   ```bash
   # ブラウザで以下を開く
   file:///c:/My%20For7/スーパーノート-アプリ開発/個人チェック表の開発/SETUP.html
   ```

2. **Firebase Console に登録**
   - https://console.firebase.google.com にアクセス
   - 新規プロジェクトを作成
   - Web App を登録
   - 設定をコピー

3. **src/firebase-config.js を編集**
   ```javascript
   // このセクションを Firebase Console から取得した設定で置き換え
   export const firebaseConfig = {
     apiKey: "YOUR_API_KEY",          // ← Firebase Console から
     authDomain: "YOUR_PROJECT_ID...",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT...",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

4. **ローカルテスト**
   ```bash
   # プロジェクトディレクトリで
   npm install
   npm run dev
   
   # http://localhost:8080 でアクセス
   # ブラウザコンソール（F12）で エラーが無いか確認
   ```

### フェーズ2：GitHub リポジトリ作成（実装済み）

- ✅ `.gitignore` - Git無視ファイル
- ✅ `.github/workflows/deploy.yml` - GitHub Actions パイプライン
- ✅ `README.md` - プロジェクトドキュメント

**あなたがすること:**

1. **GitHub で新規リポジトリを作成**
   - https://github.com/new にアクセス
   - Repository name: `awareness-check-sheet`
   - Description: `毎日の意識を記録するチェックシート - Firebase & GitHub Pages版`
   - Public を選択
   - Create

2. **ローカルリポジトリを初期化**
   ```bash
   cd "c:\My For7\スーパーノート-アプリ開発\個人チェック表の開発"
   
   # Git ユーザー設定（初回のみ）
   git config --global user.name "Your Name"
   git config --global user.email "your-email@example.com"
   
   # リポジトリ初期化
   git init
   git add .
   git commit -m "Initial commit: Firebase & GitHub Pages setup"
   
   # リモート追加
   git remote add origin https://github.com/your-username/awareness-check-sheet.git
   
   # Push
   git branch -M main
   git push -u origin main
   ```

3. **GitHub Pages を有効化**
   - https://github.com/your-username/awareness-check-sheet/settings
   - 左メニュー → Pages
   - Source: GitHub Actions
   - Save

### フェーズ3：Firebase 認証有効化（TODO）

**次のステップ:**

1. Firebase Console → Authentication → Sign-in method
2. Google と Email/Password を有効化
3. このフェーズが完了したら、`index.html` に認証機能を実装

### フェーズ4：Realtime Database 統合（TODO）

**準備:**

1. Firebase Console → Realtime Database
2. テストモード で データベース作成
3. ロケーション: asia-northeast1 (Asia/Tokyo)

**実装内容:**

- [ ] `src/storage-manager.js` の Firebase 統合コードを有効化
- [ ] `index.html` で storage-manager を使用するように修正
- [ ] localStorage から Firebase への移行
- [ ] リアルタイム同期のテスト

### フェーズ5：Cloud Storage 統合（TODO）

**準備:**

1. Firebase Console → Storage
2. asia-northeast1 でバケット作成

**実装内容:**

- [ ] シート画像を Cloud Storage に保存
- [ ] アップロード後の URL を Database に保存
- [ ] ユーザーが画像を確認できるUI実装

## 📊 実装状況

```
✅ 完了 (100%)
├─ Firebase 設定ファイル
├─ Storage Manager（localStorage + Firebase対応）
├─ GitHub Actions パイプライン
├─ Firebaseホスティング設定
├─ セキュリティルール

⏳ 進行中 (0%)
├─ index.html の Firebase 統合
├─ Firebase 認証の実装
├─ Realtime Database との同期
└─ Cloud Storage への画像保存

❌ 未実装 (0%)
├─ PWA (Progressive Web App)
├─ Service Worker（オフライン対応）
├─ マルチデバイス同期
└─ 履歴の同期
```

## 🚀 デプロイ確認

Firebase と GitHub Pages へのデプロイの確認手順：

1. **GitHub Actions のデプロイ確認**
   ```
   https://github.com/your-username/awareness-check-sheet/actions
   ```
   
   ✅ 「Firebase Deploy」ワークフローが成功しているか確認

2. **GitHub Pages でアクセス**
   ```
   https://your-username.github.io/awareness-check-sheet/
   ```
   
   ✅ アプリが正常に読み込まれているか確認

3. **Firebase Console でデータ確認**
   ```
   https://console.firebase.google.com
   ```
   
   - Realtime Database にデータが保存されているか確認
   - Cloud Storage に画像が保存されているか確認

## 🆘 トラブルシューティング

### ❌ Firebase に接続できない

**症状:** コンソールに `Firebase initialization failed` と表示される

**解決方法:**
```javascript
// src/firebase-config.js を確認
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",  // ← 正しく設定されているか？
  authDomain: "YOUR_PROJECT_ID...",
  // ... 他の設定も確認
};
```

- [ ] Firebase Console から設定をコピー
- [ ] `src/firebase-config.js` に正しく貼り付け
- [ ] ファイルを保存
- [ ] ブラウザをリロード（Ctrl+F5で完全リロード）

### ❌ GitHub Actions デプロイが失敗

**症状:** Actions タブで赤いXマークが表示される

**解決方法:**
1. Actions タブで失敗したワークフローをクリック
2. ログを確認してエラーメッセージを確認
3. 一般的なエラー：
   - `FIREBASE_SERVICE_ACCOUNT secret not found` → GitHub Secrets を設定
   - `npm ERR!` → `npm install` に問題あり

### ❌ GitHub Pages にアクセスできない

**症状:** `404 Not Found` と表示される

**解決方法:**
- [ ] Settings → Pages で Source が "GitHub Actions" に設定されているか確認
- [ ] デプロイが成功しているか Actions タブで確認
- [ ] キャッシュをクリア（Ctrl+Shift+Delete）して再度アクセス
- [ ] URL が正しいか確認（`https://your-username.github.io/awareness-check-sheet/`）

## 📞 さらなるサポート

- 📖 [Firebase 公式ドキュメント](https://firebase.google.com/docs)
- 🔗 [GitHub Actions ドキュメント](https://docs.github.com/en/actions)
- 💬 [GitHub Issues](https://github.com/your-username/awareness-check-sheet/issues) でサポートリクエスト

## 📝 メモ

このセクションに個人用のメモを残してください：

- Firebase Project ID: ___________________
- GitHub Repository: ___________________
- Deployed URL: ___________________
- 設定完了日時: ___________________
