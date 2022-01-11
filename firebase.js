import firebase from "firebase/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBG-likKjVbHvmH1HxluF-v7zgso8oG-24",
  authDomain: "to-do-list-firebase-46ccf.firebaseapp.com",
  projectId: "to-do-list-firebase-46ccf",
  storageBucket: "to-do-list-firebase-46ccf.appspot.com",
  messagingSenderId: "63450002693",
  appId: "1:63450002693:web:a6aeae05a2ac654d39336c",
};

const app = initializeApp(firebaseConfig);

export default firebase;
export const db = getFirestore(app);
