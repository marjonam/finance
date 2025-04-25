// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSm8hrjYIjdvMfpxlRl_NWD-YfYSHA1sU",
  authDomain: "finance-app-c2d13.firebaseapp.com",
  projectId: "finance-app-c2d13",
  storageBucket: "finance-app-c2d13.firebasestorage.app",
  messagingSenderId: "521836502357",
  appId: "1:521836502357:web:c16aca7363f1ade78fe3dc",
  measurementId: "G-YBQFW0VWF7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
