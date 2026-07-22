import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBTOGG0DZv7eIa0U-XZFCcXOYAf8IPT-0",
  authDomain: "sentrix-vxe.firebaseapp.com",
  projectId: "sentrix-vxe",
  storageBucket: "sentrix-vxe.firebasestorage.app",
  messagingSenderId: "392250155609",
  appId: "1:392250155609:web:136617e31f25bfef6bc748",
  measurementId: "G-23JWKYB2YV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

window.auth = auth;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
