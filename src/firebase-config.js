/**
 * Firebase Configuration
 * このファイルは、Firebaseコンソールから取得した設定を含みます
 */

// ================================
// Firebase Config（要編集）
// ================================
// 以下の値を Firebase Console から取得して置き換えてください
// Firebase Console: https://console.firebase.google.com/

export const firebaseConfig = {
  apiKey: "AIzaSyBXearn3_2XIF2XJAGRwlCJ4FxH57DnfeU",
  authDomain: "personal-supernote.firebaseapp.com",
  projectId: "personal-supernote",
  storageBucket: "personal-supernote.firebasestorage.app",
  messagingSenderId: "181455246117",
  appId: "1:181455246117:web:4bc30fff2a919b593640cc"
};

// ================================
// Firebase 初期化
// ================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase, connectDatabaseEmulator } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getStorage, connectStorageEmulator } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";

// Firebase App 初期化
export const app = initializeApp(firebaseConfig);

// Firebase Services
export const auth = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);

// ================================
// エミュレータの設定（開発時のみ）
// ================================
const USE_EMULATOR = false; // 開発時に true にしてローカルエミュレータを使用

if (USE_EMULATOR && typeof window !== 'undefined' && window.location.hostname === 'localhost') {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
    connectDatabaseEmulator(database, 'localhost', 9000);
    connectStorageEmulator(storage, 'localhost', 9199);
    console.log('🔧 Firebase Emulator に接続しました');
  } catch (error) {
    // エミュレータが実行していない場合はスキップ
    console.log('💡 エミュレータは使用していません');
  }
}

console.log('✅ Firebase 初期化完了');
