import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: process.env.FIREBASE,
  authDomain: "blog-comunity.firebaseapp.com",
  projectId: "blog-comunity",
  storageBucket: "blog-comunity.appspot.com",
  messagingSenderId: "489732735024",
  appId: "1:489732735024:web:a1132b40debc0041d82df5",
  measurementId: "G-7M307H1HTL",
});

// Initialize Firebase
export const auth = firebaseApp.auth();
export const db = firebaseApp.firestore();
export default firebaseApp;
