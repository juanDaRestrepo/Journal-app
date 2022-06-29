// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmpSI19ikK3tYavZymq5-8ZnHvTigPZT4",
    authDomain: "journal-app-136dc.firebaseapp.com",
    projectId: "journal-app-136dc",
    storageBucket: "journal-app-136dc.appspot.com",
    messagingSenderId: "770430866711",
    appId: "1:770430866711:web:14cb0eff9e3534c5a19352",
    measurementId: "G-MPKR8DVHDJ"
  };

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore( FirebaseApp);