// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-comunity.firebaseapp.com",
  projectId: "blog-comunity",
  storageBucket: "blog-comunity.appspot.com",
  messagingSenderId: "489732735024",
  appId: "1:489732735024:web:a1132b40debc0041d82df5",
  measurementId: "G-7M307H1HTL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
