// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdCNSuOw9-WCM5nIbvcS2PQHYMRmvLlW8",
  authDomain: "netflixgpt-fa655.firebaseapp.com",
  projectId: "netflixgpt-fa655",
  storageBucket: "netflixgpt-fa655.firebasestorage.app",
  messagingSenderId: "911278391132",
  appId: "1:911278391132:web:9648f55ec3db4398008b99",
  measurementId: "G-M1XH8L7TC8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
