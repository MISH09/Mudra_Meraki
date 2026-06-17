// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7mYpqTzjaF0i1VSJTftTIoFKDRTgLQu0",
  authDomain: "mudra-meraki.firebaseapp.com",
  projectId: "mudra-meraki",
  storageBucket: "mudra-meraki.firebasestorage.app",
  messagingSenderId: "263850219228",
  appId: "1:263850219228:web:8490825498084469398619",
  measurementId: "G-860EZS4BQZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);