import firebase from "firebase";

//? Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXoC7820vM_9XMtArnvO2f-9CwS7BptO8",
  authDomain: "nextjs-13dde.firebaseapp.com",
  projectId: "nextjs-13dde",
  storageBucket: "nextjs-13dde.appspot.com",
  messagingSenderId: "997356056141",
  appId: "1:997356056141:web:4d1b1d7ca645a3e974f604",
};

//? Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
