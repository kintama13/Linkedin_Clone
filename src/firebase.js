// import firebase from "firebase";

// const firebaseConfig = {
//     apiKey: "AIzaSyDg3L-9VbL98cUSBr1QiTBpFQWnNc9iQsk",
//     authDomain: "clone-linkedin-project.firebaseapp.com",
//     projectId: "clone-linkedin-project",
//     storageBucket: "clone-linkedin-project.appspot.com",
//     messagingSenderId: "908200990450",
//     appId: "1:908200990450:web:69b71dd5b6658cfdc1626b"
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
  GoogleAuthProvider, 
  getAuth, 
  signInWithPopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail, 
  signOut 
} from "firebase/auth";
import { 
  getFirestore, 
  query, 
  getDocs, 
  collection, 
  where, 
  addDoc 
} from "firebase/firestore";
// import * as firestore from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg3L-9VbL98cUSBr1QiTBpFQWnNc9iQsk",
  authDomain: "clone-linkedin-project.firebaseapp.com",
  projectId: "clone-linkedin-project",
  storageBucket: "clone-linkedin-project.appspot.com",
  messagingSenderId: "908200990450",
  appId: "1:908200990450:web:69b71dd5b6658cfdc1626b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// const db1 = firestore

// const lof = db1.collection('posts').onSnapshots()

export { db, auth }