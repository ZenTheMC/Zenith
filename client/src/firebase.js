// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zenith-1cc65.firebaseapp.com",
  projectId: "zenith-1cc65",
  storageBucket: "zenith-1cc65.appspot.com",
  messagingSenderId: "970921186849",
  appId: "1:970921186849:web:c9d29a6e1ada17be91b560"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);