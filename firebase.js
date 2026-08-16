// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz7ykyV3OLnf1wl2gMTNgITgHwEBLEkPs",
  authDomain: "simp-511a4.firebaseapp.com",
  projectId: "simp-511a4",
  storageBucket: "simp-511a4.firebasestorage.app",
  messagingSenderId: "638035539856",
  appId: "1:638035539856:web:494b3bfd0045c7c770a515",
  measurementId: "G-72YLY7ZNBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
