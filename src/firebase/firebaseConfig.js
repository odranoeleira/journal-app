// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5kIg5rUYjrLYEWlLeIZ4KhQjL_KrsDb4",
  authDomain: "journal-app-47be2.firebaseapp.com",
  projectId: "journal-app-47be2",
  storageBucket: "journal-app-47be2.appspot.com",
  messagingSenderId: "190379785297",
  appId: "1:190379785297:web:d4f027e640b203e9decc70",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
