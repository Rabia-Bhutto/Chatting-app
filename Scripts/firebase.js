import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import {
    getAuth,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification
    }
    from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyDhH8tMLju3B-rW9bhMq3aqK25krSN0y_Y",
  authDomain: "signup-form-86fe7.firebaseapp.com",
  projectId: "signup-form-86fe7",
  storageBucket: "signup-form-86fe7.appspot.com",
  messagingSenderId: "841002137707",
  appId: "1:841002137707:web:9ba1f03d3eea194881192e",
  measurementId: "G-J5ZZE9EFTX"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export {
  getAuth ,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification
}