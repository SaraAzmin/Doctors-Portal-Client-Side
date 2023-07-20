// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm_iAtOfDyt2GCAvU1Pa1VsUnZ6Gc41kI",
  authDomain: "doctors-portal-aea50.firebaseapp.com",
  projectId: "doctors-portal-aea50",
  storageBucket: "doctors-portal-aea50.appspot.com",
  messagingSenderId: "91191788920",
  appId: "1:91191788920:web:96e368f2a51a856057f48d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
