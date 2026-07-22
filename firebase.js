// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBTOGG0DZv7eIa0U-XZFCcXOYAf8IPT-0",
  authDomain: "sentrix-vxe.firebaseapp.com",
  projectId: "sentrix-vxe",
  storageBucket: "sentrix-vxe.firebasestorage.app",
  messagingSenderId: "392250155609",
  appId: "1:392250155609:web:136617e31f25bfef6bc748",
  measurementId: "G-23JWKYB2YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
