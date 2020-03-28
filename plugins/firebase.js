import firebase from 'firebase/app' // firebase 全般の機能を利用するために必要
import 'firebase/auth' // ログイン機能を使うために読み込み
import 'firebase/firestore' // データベース機能を使うために読み込み

// firebase の準備が出来ている場合のみに設定する
if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyD-Mv6ofS678hUTL_SlzOr0BPczDm4XN9I",
    authDomain: "slack-clone-app-33b7c.firebaseapp.com",
    databaseURL: "https://slack-clone-app-33b7c.firebaseio.com",
    projectId: "slack-clone-app-33b7c",
    storageBucket: "slack-clone-app-33b7c.appspot.com",
    messagingSenderId: "806593410610",
  }
  firebase.initializeApp(config) // config によって firebase の設定を行う
} // firebase の準備が出来ている場合のみに設定する

const db = firebase.firestore() // データベースを定義
export {
  firebase,
  db
}