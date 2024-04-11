// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f45a3.firebaseapp.com",
  projectId: "mern-blog-f45a3",
  storageBucket: "mern-blog-f45a3.appspot.com",
  messagingSenderId: "750743780670",
  appId: "1:750743780670:web:9401de8bff330493a9806f",
  measurementId: "G-LY09L4VTBB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);