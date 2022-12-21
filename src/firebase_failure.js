// /*import firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyBiFWOnbgj7jkvDf4El8yQP3xf5-UrRCvU",
//     authDomain: "webdesignkekw-53277.firebaseapp.com",
//     projectId: "webdesignkekw-53277",
//     storageBucket: "webdesignkekw-53277.appspot.com",
//     messagingSenderId: "432755055473",
//     appId: "1:432755055473:web:4f4e2e07d9123307daf4d0"
//   };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export {db, auth};*/
// import { initializeApp } from "firebase/app";

// import { 
//   GoogleAuthProvider, 
//   getAuth, 
//   signInWithPopup, 
//   signInWithEmailAndPassword, 
//   createUserWithEmailAndPassword, 
//   sendPasswordResetEmail, 
//   signOut 
// } from "firebase/auth";
// import { 
//   getFirestore, 
//   query, 
//   getDocs, 
//   collection, 
//   where, 
//   addDoc 
// } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDnR6j9dCWHAJ3zIcgZVj_319X8h18ZGEI",
//   authDomain: "cloning-linkedin.firebaseapp.com",
//   projectId: "cloning-linkedin",
//   storageBucket: "cloning-linkedin.appspot.com",
//   messagingSenderId: "282449241316",
//   appId: "1:282449241316:web:f548f91efb5ae99c21b8f1"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const db = getFirestore(app);

// const googleProvider = new GoogleAuthProvider();
// const signInWithGoogle = async () => {
//     try {
//         const res = await signInWithPopup(auth, googleProvider);
//         const user = res.user;
//         const q = query(collection(db, "users"), where("uid", "==", user.uid));
//         const docs = await getDocs(q);
//         if (docs.docs.length === 0) {
//         await addDoc(collection(db, "users"), {
//             uid: user.uid,
//             name: user.displayName,
//             authProvider: "google",
//             email: user.email,
//         });
//         }
//         return user;
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };
// const logInWithEmailAndPassword = async (email, password) => {
//     try {
//         const req = await signInWithEmailAndPassword(auth, email, password);
//         return req;
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };
// const registerWithEmailAndPassword = async (name, email, password) => {
//     try {
//         const res = await createUserWithEmailAndPassword(auth, email, password);
//         const user = res.user;
//         await addDoc(collection(db, "users"), {
//         uid: user.uid,
//         name,
//         authProvider: "local",
//         email,
//         });
//         return user;
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };
// const sendPasswordReset = async (email) => {
//     try {
//         await sendPasswordResetEmail(auth, email);
//         alert("Password reset link sent!");
//     } catch (err) {
//         console.error(err);
//         alert(err.message);
//     }
// };
// const logout = () => {
//     signOut(auth);
// };
// export {
//     auth,
//     db,
//     signInWithGoogle,
//     logInWithEmailAndPassword,
//     registerWithEmailAndPassword,
//     sendPasswordReset,
//     logout,
//     signInWithEmailAndPassword,
// };