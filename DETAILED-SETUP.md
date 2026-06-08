# 📚 詳細ステップバイステップガイド - ステップ3以降

このガイドは、以下の方を対象としています：
- ターミナル操作が初めての方
- コマンドが何をしているのか詳しく知りたい方
- 各ステップで何が起こるのか理解したい方

## 📍 現在地確認

✅ **完了済み:**
- Firebase プロジェクトの作成
- Firebase 設定の取得と `src/firebase-config.js` への記入

⏳ **これからすること:**
- **ステップ3:** ローカルでアプリを動作確認
- **ステップ4:** GitHub リポジトリを作成
- **ステップ5-7:** デプロイ設定
- **ステップ8:** 実際にインターネットで公開

---

## ステップ3️⃣：ローカルで動作確認

### 3-1) ターミナル（コマンドプロンプト）を開く

<details>
<summary>📌 Windows 10/11 の場合（クリックして展開）</summary>

**方法1: エクスプローラーから**
1. プロジェクトフォルダを開く
   ```
   c:\My For7\スーパーノート-アプリ開発\個人チェック表の開発
   ```
2. 上部のアドレスバーを右クリック
3. 「ここでターミナルを開く」を選択

**方法2: Windows キー + X から**
1. Windows キーを押しながら X キーを押す
2. 「Windows Terminal」を選択
3. 以下のコマンドでプロジェクトディレクトリに移動：
   ```bash
   cd "c:\My For7\スーパーノート-アプリ開発\個人チェック表の開発"
   ```

**方法3: スタートメニューから**
1. スタートメニューを開く
2. 「Terminal」「cmd」「PowerShell」などで検索
3. 「PowerShell」（または「コマンドプロンプト」）を選択
4. 上記のコマンドでプロジェクトディレクトリに移動

</details>

### 3-2) ターミナルでのコマンド実行

ターミナルが開いたら、以下のコマンドを**1行ずつ**実行します。

#### コマンド1: npm install

```bash
npm install
```

**このコマンドは何をしているか？**
- 📦 `package.json` に書かれた「依存パッケージ」を自動でダウンロード
- 📁 `node_modules/` フォルダが作成される
- 🔧 Firebase SDK などが準備される

**実行結果の例：**
```
added 123 packages, and audited 456 packages
found 0 vulnerabilities
```

**この処理には1-2分かかります。以下の表示が出たら完了です：**
```
✅ added XXX packages
```

<details>
<summary>❌ エラーが出た場合（クリック）</summary>

**エラー例1: `npm: command not found`**
- → Node.js がインストールされていません
- → https://nodejs.org/ から LTS版をダウンロード＆インストール
- → ターミナルを再起動してからもう一度試す

**エラー例2: `npm ERR! code ERESOLVE`**
- → パッケージの競合
- → 以下のコマンドで強行実行：
  ```bash
  npm install --legacy-peer-deps
  ```

</details>

#### コマンド2: npm run dev

```bash
npm run dev
```

**このコマンドは何をしているか？**
- 🚀 ローカルサーバーを起動
- 🌐 `http://localhost:8080` でアプリにアクセス可能になる
- 📝 ファイル変更時に自動でリロード（ホットリロード）

**実行結果の例：**
```
Starting up http-server, serving ./

http-server version: 14.1.1
http-server settings:
CORS: disabled
Cache: -1 seconds
Connection Timeout: 120 seconds
...
Started on http://127.0.0.1:8080
```

**このメッセージが出たら、サーバーが起動しています。**

### 3-3) ブラウザでアプリを開く

1. **Web ブラウザを開く**（Chrome、Edge、Firefox など）

2. **アドレスバーに以下を入力:**
   ```
   http://localhost:8080
   ```

3. **Enter キーを押す**

4. **アプリが表示される！** 🎉

**確認項目:**
- [ ] ページが読み込まれて、「意識チェックシート」が表示される
- [ ] ブラウザの F12 キーでコンソールを開く
- [ ] 以下のメッセージが表示されているか確認：
  ```
  ✅ Firebase 初期化完了
  ```

<details>
<summary>❌ ページが読み込めない場合（クリック）</summary>

**確認事項:**
1. URL が正しいか確認
   - ❌ `http://localhost/` ← 間違い
   - ✅ `http://localhost:8080` ← 正しい

2. ターミナルでサーバーが起動しているか確認
   - ターミナルに `Started on http://127.0.0.1:8080` と表示されているか？
   - 表示されていない場合は、`npm run dev` をもう一度実行

3. ファイアウォールがブロックしていないか確認
   - Windows Defender ファイアウォール → 許可するアプリの変更
   - Node.js または npm をチェック

</details>

### 3-4) ターミナルでの操作を停止

アプリのテストが終わったら、以下のキーを押してサーバーを停止：

```
Ctrl + C
```

確認メッセージが表示されたら、`Y` キーを押して終了。

---

## ステップ4️⃣：GitHub リポジトリを作成

### 4-1) GitHub で新規リポジトリを作成

1. **Web ブラウザで GitHub にアクセス**
   ```
   https://github.com/new
   ```

2. **ログインしていない場合はログイン**

3. **以下の情報を入力:**

   | 項目 | 入力内容 |
   |------|---------|
   | Repository name | `awareness-check-sheet` |
   | Description | `毎日の意識を記録するチェックシート - Firebase & GitHub Pages版` |
   | Public / Private | **Public** を選択 |

4. **「Create repository」をクリック**

5. **作成完了！**
   - リポジトリのURLが表示されます
   - 例：`https://github.com/your-username/awareness-check-sheet`

### 4-2) 初期化コマンドを実行

リポジトリ作成後、以下のようなコマンドが表示されます。

**GitHub に指示されたコマンドをコピーしてターミナルで実行します。**

あるいは、以下の手順で行うこともできます：

#### ステップA: Git 設定（初回のみ）

ターミナルで以下を実行：

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

**このコマンドは何か？**
- `Your Name` → 自分の名前に置き換え（例：`Taro Yamada`）
- `your-email@example.com` → 自分のメールアドレスに置き換え

**例：**
```bash
git config --global user.name "太郎 山田"
git config --global user.email "taro@example.com"
```

#### ステップB: Git リポジトリを初期化

```bash
git init
```

**このコマンドは何か？**
- 📁 ローカルフォルダを Git リポジトリに変換
- `.git/` という隠しフォルダが作成される（目で見えません）

#### ステップC: すべてのファイルをステージ

```bash
git add .
```

**このコマンドは何か？**
- 📝 フォルダ内のすべてのファイルを「コミット予定」に追加
- 「`.`」はカレントディレクトリ内のすべてを意味します

#### ステップD: コミット（保存）

```bash
git commit -m "Initial commit: Firebase & GitHub Pages setup"
```

**このコマンドは何か？**
- 💾 変更内容を「スナップショット」として保存
- `-m "メッセージ"` → このコミットの説明文
- メッセージの内容は日本語でも英語でも OK

**実行結果の例：**
```
[main (root-commit) abc1234] Initial commit
 15 files changed, 3456 insertions(+)
```

#### ステップE: リモートリポジトリを追加

```bash
git remote add origin https://github.com/your-username/awareness-check-sheet.git
```

**このコマンドは何か？**
- 🔗 ローカルの Git リポジトリを GitHub のリポジトリに接続
- `origin` = GitHub 上のリポジトリのニックネーム
- **`your-username`** を自分の GitHub ユーザー名に置き換えてください
  - 例：`https://github.com/taro-yamada/awareness-check-sheet.git`

#### ステップF: ブランチ名を変更

```bash
git branch -M main
```

**このコマンドは何か？**
- 🌳 デフォルトブランチを `main` に統一（GitHub のデフォルト）

#### ステップG: GitHub に Push（アップロード）

```bash
git push -u origin main
```

**このコマンドは何か？**
- 📤 ローカルのファイルを GitHub にアップロード
- `-u` = 今後のために接続を記憶
- `origin main` = GitHub の `main` ブランチへ

**実行結果の例：**
```
Enumerating objects: 15, done.
...
To https://github.com/your-username/awareness-check-sheet.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

<details>
<summary>❌ `error: permission denied` が出た場合（クリック）</summary>

**原因:** GitHub へのアクセス認証に失敗

**解決方法:**
1. **Personal Access Token を生成**
   - GitHub Settings → Developer settings → Personal access tokens
   - 「Generate new token」をクリック
   - スコープを選択（`repo` にチェック）
   - トークンをコピー

2. **Push を再度実行**
   ```bash
   git push -u origin main
   ```
   - ユーザー名を聞かれたら GitHub ユーザー名を入力
   - パスワードを聞かれたら上記のトークンを貼り付け

</details>

### 4-3) GitHub で確認

1. **GitHub のリポジトリページを開く**
   ```
   https://github.com/your-username/awareness-check-sheet
   ```

2. **ファイルが表示されているか確認** ✅
   - `index.html`
   - `package.json`
   - `src/` フォルダ
   - など

---

## ステップ5️⃣：GitHub Pages を有効化

### 5-1) Settings を開く

1. GitHub リポジトリのページを開く
2. 上部の **「⚙️ Settings」** をクリック

### 5-2) Pages を設定

1. 左メニューで **「Pages」** をクリック
2. 「Build and deployment」セクションで：
   - **Source** を **「GitHub Actions」** に変更
   - **「Save」** をクリック

3. しばらく待つと以下のメッセージが表示されます：
   ```
   ✅ Your site is live at https://your-username.github.io/awareness-check-sheet/
   ```

---

## ステップ6️⃣：Firebase デプロイトークンを取得

### 6-1) Firebase CLI をインストール

ターミナルで以下を実行：

```bash
npm install -g firebase-tools
```

**このコマンドは何か？**
- 📦 `firebase-tools` をグローバルにインストール
- `-g` = グローバル（全プロジェクトで使用可能）
- これで `firebase` コマンドが使えるようになる

**実行結果：**
```
added 386 packages
```

### 6-2) Firebase にログイン

```bash
firebase login
```

**このコマンドは何か？**
- 🔐 Google アカウントで Firebase に認証
- ブラウザが自動で開く

**実行の流れ：**

1. コマンド実行後、ブラウザが開く
2. **「Allow」** をクリック（Firebase が自分のアカウント情報にアクセスすることに同意）
3. 以下のメッセージが表示：
   ```
   ✓ Logged in as your-email@gmail.com
   ```
4. ターミナルに戻ると以下が表示：
   ```
   ✓ Success! Logged in as your-email@gmail.com
   ```

### 6-3) デプロイトークンを生成

```bash
firebase login:ci
```

**このコマンドは何か？**
- 🔑 GitHub Actions 用の特別なトークンを生成
- このトークンで GitHub が Firebase にアクセス権を得る

**実行の流れ：**

1. ブラウザが開く
2. 再度 **「Allow」** をクリック
3. ターミナルに長い文字列が表示される：
   ```
   ✔ Success! Use this token to login on a CI server:

   1//0gQx...（長い文字列）...abc123xyz
   ```

4. **この長い文字列をコピー** 📋
   - 右クリック → コピー
   - またはマウスドラッグで選択してコピー

5. **テキストエディタに一時保存しておく** 📝
   - このトークンはこの後、GitHub Secrets に設定します

---

## ステップ7️⃣：GitHub Secrets を設定

### 7-1) Repository Settings を開く

1. GitHub のリポジトリページを開く
2. **「⚙️ Settings」** をクリック
3. 左メニューで **「Secrets and variables」** → **「Actions」** をクリック

### 7-2) FIREBASE_TOKEN を追加

1. **「New repository secret」** をクリック
2. 以下を入力：

   | 項目 | 値 |
   |------|-----|
   | Name | `FIREBASE_TOKEN` |
   | Secret | ステップ6-3でコピーした長い文字列を貼り付け |

3. **「Add secret」** をクリック

### 7-3) FIREBASE_PROJECT_ID を追加

1. 同様に **「New repository secret」** をクリック
2. 以下を入力：

   | 項目 | 値 |
   |------|-----|
   | Name | `FIREBASE_PROJECT_ID` |
   | Secret | Firebase Console から確認した Project ID |

   > **Project ID はどこにある？**
   > Firebase Console → Project Settings → Project ID
   > 例：`awareness-check-sheet-abc123`

3. **「Add secret」** をクリック

---

## ステップ8️⃣：デプロイを実行

### 8-1) GitHub Actions デプロイを確認

1. GitHub リポジトリのページを開く
2. **「Actions」** タブをクリック
3. **「Firebase Deploy」** ワークフローが表示される

### 8-2) デプロイが実行されるのを待つ

1. ワークフローをクリック
2. ジョブの進捗を確認：
   - ⏳ 実行中（黄色い円）
   - ✅ 成功（緑色のチェック）
   - ❌ 失敗（赤い×）

**通常3-5分で完了します。**

### 8-3) デプロイ完了後、Web で確認

1. **以下の URL にアクセス:**
   ```
   https://your-username.github.io/awareness-check-sheet/
   ```

2. **アプリが表示される！** 🎉

3. **アプリをテスト:**
   - 新規ユーザーを作成
   - チェックシートを記入
   - 「保存」ボタンで画像をダウンロード
   - などなど...

---

## 🎉 セットアップ完了！

これで以下が完成しました：

✅ **Firebase プロジェクト** - データの保存先
✅ **GitHub リポジトリ** - コード管理
✅ **GitHub Pages** - Web でのホスティング
✅ **GitHub Actions** - 自動デプロイ

---

## 📞 トラブルシューティング

### ❓ よくある質問

<details>
<summary>Q: コマンドが何をしているのか分からない</summary>

A: 以下のコマンドで説明を表示できます（英語）：
```bash
command --help
```

例：
```bash
npm --help
git --help
firebase --help
```

</details>

<details>
<summary>Q: 途中でミスしたらどうする？</summary>

A: 大丈夫、やり直せます：
```bash
# Git のコミット履歴をリセット
git reset --hard HEAD

# または最初からやり直し
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

</details>

<details>
<summary>Q: GitHub Pages のデプロイに時間がかかる</summary>

A: 初回は5-10分かかることがあります。
- Settings → Pages で確認
- 「Deployments」タブでも確認可能

</details>

---

## 次のステップ

ここからは以下を検討してください：

1. **[Firebase 認証を実装](README.md#next-steps)** - Google/メールでログイン
2. **Realtime Database で同期** - 複数デバイス間でデータを自動同期
3. **Cloud Storage に画像保存** - シート画像をクラウド保存

---

**作成日:** 2026-06-08
**このガイドが役立つことを願っています！**
