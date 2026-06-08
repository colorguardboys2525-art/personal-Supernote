# 🚀 クイックスタートガイド

**5分で Firebase & GitHub Pages に統合！**

## 1️⃣ Firebase プロジェクトを作成（5分）

```bash
# 1. Firebase Console にアクセス
https://console.firebase.google.com

# 2. 新規プロジェクトを作成
# プロジェクト名: awareness-check-sheet

# 3. Web App を登録
# プロジェクト設定 → マイアプリ → ウェブ → 登録

# 4. 設定をコピー
```

## 2️⃣ src/firebase-config.js を編集（2分）

```javascript
// ⬇️ Firebase Console から取得した設定で置き換え
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "awareness-check-sheet-xxx.firebaseapp.com",
  projectId: "awareness-check-sheet-xxx",
  storageBucket: "awareness-check-sheet-xxx.appspot.com",
  messagingSenderId: "123456789000",
  appId: "1:123456789000:web:abc123def456"
};
```

## 3️⃣ ローカルテスト（3分）

```bash
# プロジェクトディレクトリで
npm install
npm run dev

# ブラウザで http://localhost:8080 を開く
# ✅ Firebase initialization completed が表示されたら成功
```

## 4️⃣ GitHub にデプロイ（5分）

```bash
# 1. GitHub で新規リポジトリを作成
# https://github.com/new
# 名前: awareness-check-sheet
# Public を選択

# 2. コミット＆プッシュ
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/awareness-check-sheet.git
git branch -M main
git push -u origin main

# 3. GitHub Pages を有効化
# Settings → Pages → Source: GitHub Actions → Save

# 4. デプロイ完了後、以下でアクセス
# https://your-username.github.io/awareness-check-sheet/
```

## ✅ チェックリスト

- [ ] Firebase プロジェクトを作成
- [ ] `src/firebase-config.js` を編集
- [ ] `npm install` を実行
- [ ] `npm run dev` でローカルテスト
- [ ] GitHub リポジトリを作成
- [ ] コードを push
- [ ] GitHub Pages を有効化
- [ ] デプロイ完了後、Web からアクセス確認

## 🎯 次のステップ

### すぐにできること
- ✅ アプリがオンラインでアクセスできることを確認
- ✅ Firebase Console でプロジェクトが表示されるか確認

### やることリスト（後で）
- ⏳ Firebase 認証を実装
- ⏳ Realtime Database の同期を実装
- ⏳ Cloud Storage への画像保存を実装
- ⏳ オフラインサポート（Service Worker）を追加

## 💡 ヒント

**Firebase Config がわからない場合：**
```
Firebase Console
→ プロジェクト設定（⚙️）
→ 「マイアプリ」セクション
→ ウェブアプリをクリック
→ firebaseConfig オブジェクトをコピー
```

**GitHub からデプロイ URL を確認：**
```
GitHub Repository
→ Settings → Pages
→ "Your site is live at https://..."
```

---

詳細は `SETUP.html` または `IMPLEMENTATION.md` を参照してください。
