/**
 * Storage Manager
 * Firebase Realtime Database と localStorage をフォールバックで使用
 */

import { database } from './firebase-config.js';
import { ref, set, get, remove, update, onValue, off } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js';

// ========================
// 接続状態の管理
// ========================
let isFirebaseConnected = false;
let currentUserId = null;

/**
 * Firebase接続状態をチェック
 */
export async function checkFirebaseConnection() {
  try {
    const connectedRef = ref(database, '.info/connected');
    return new Promise((resolve) => {
      onValue(connectedRef, (snap) => {
        isFirebaseConnected = snap.val() === true;
        console.log(isFirebaseConnected ? '🔗 Firebase に接続しました' : '🔌 Firebase に接続できません（ローカルモード）');
        resolve(isFirebaseConnected);
      });
    });
  } catch (error) {
    console.warn('⚠️ Firebase 接続確認エラー:', error);
    isFirebaseConnected = false;
    return false;
  }
}

// ========================
// ユーザーデータ管理
// ========================

/**
 * ユーザーデータを取得
 */
export async function loadUsers(userId) {
  currentUserId = userId;
  
  // Firebase から取得を試みる
  if (isFirebaseConnected && userId) {
    try {
      const userRef = ref(database, `users/${userId}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        return snapshot.val();
      }
    } catch (error) {
      console.warn('⚠️ Firebase からユーザーデータを取得できません:', error);
    }
  }
  
  // ローカルストレージからフォールバック
  return loadLocalDB().users || [];
}

/**
 * ユーザーデータを保存
 */
export async function saveUsers(userId, usersData) {
  // ローカルストレージに保存（常に）
  const db = loadLocalDB();
  db.users = usersData;
  saveLocalDB(db);
  
  // Firebase に同期を試みる
  if (isFirebaseConnected && userId) {
    try {
      const userRef = ref(database, `users/${userId}`);
      await set(userRef, usersData);
      console.log('✅ ユーザーデータを Firebase に保存しました');
    } catch (error) {
      console.warn('⚠️ Firebase への保存に失敗しました:', error);
    }
  }
}

// ========================
// シートデータ管理
// ========================

/**
 * シートデータを取得
 */
export async function loadSheets(userId) {
  // Firebase から取得を試みる
  if (isFirebaseConnected && userId) {
    try {
      const sheetsRef = ref(database, `sheets/${userId}`);
      const snapshot = await get(sheetsRef);
      if (snapshot.exists()) {
        return snapshot.val() || [];
      }
    } catch (error) {
      console.warn('⚠️ Firebase からシートデータを取得できません:', error);
    }
  }
  
  // ローカルストレージからフォールバック
  return loadLocalDB().sheets || [];
}

/**
 * シートデータを保存
 */
export async function saveSheets(userId, sheetsData) {
  // ローカルストレージに保存（常に）
  const db = loadLocalDB();
  db.sheets = sheetsData;
  saveLocalDB(db);
  
  // Firebase に同期を試みる
  if (isFirebaseConnected && userId) {
    try {
      const sheetsRef = ref(database, `sheets/${userId}`);
      await set(sheetsRef, sheetsData);
      console.log('✅ シートデータを Firebase に保存しました');
    } catch (error) {
      console.warn('⚠️ Firebase への保存に失敗しました:', error);
    }
  }
}

/**
 * リアルタイム同期リスナーを設定
 */
export function onSheetsUpdate(userId, callback) {
  if (!isFirebaseConnected) {
    console.log('💡 Firebase に接続していないため、リアルタイム同期は無効です');
    return () => {};
  }
  
  try {
    const sheetsRef = ref(database, `sheets/${userId}`);
    const unsubscribe = onValue(sheetsRef, (snapshot) => {
      const data = snapshot.val() || [];
      callback(data);
    });
    return unsubscribe;
  } catch (error) {
    console.warn('⚠️ リアルタイム同期の設定に失敗しました:', error);
    return () => {};
  }
}

// ========================
// ローカルストレージ（フォールバック）
// ========================

/**
 * ローカルDB を読み込み
 */
function loadLocalDB() {
  try {
    return JSON.parse(localStorage.getItem('csheet_db') || '{}') || { users: [], sheets: [] };
  } catch (error) {
    console.warn('⚠️ ローカルデータの読み込みに失敗しました:', error);
    return { users: [], sheets: [] };
  }
}

/**
 * ローカルDB を保存
 */
function saveLocalDB(db) {
  try {
    localStorage.setItem('csheet_db', JSON.stringify(db));
  } catch (error) {
    console.warn('⚠️ ローカルデータの保存に失敗しました:', error);
  }
}

/**
 * 全ローカルデータを取得
 */
export function getAllLocalData() {
  return loadLocalDB();
}

/**
 * 全ローカルデータを設定
 */
export function setAllLocalData(db) {
  saveLocalDB(db);
}

/**
 * 接続状態を取得
 */
export function isConnected() {
  return isFirebaseConnected;
}

/**
 * データを完全にクリア（開発用）
 */
export function clearAllData() {
  if (confirm('すべてのローカルデータが削除されます。よろしいですか？')) {
    localStorage.removeItem('csheet_db');
    console.log('✅ ローカルデータをクリアしました');
  }
}
