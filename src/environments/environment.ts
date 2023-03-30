// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtHP4Oy85pEG7nOElR6wZpU5nFHmLdj6Q",
  authDomain: "socialconnect-c7431.firebaseapp.com",
  projectId: "socialconnect-c7431",
  storageBucket: "socialconnect-c7431.appspot.com",
  messagingSenderId: "899323934708",
  appId: "1:899323934708:web:d9db56bd97eaf4622f6ba1",
  measurementId: "G-1X10PZN9D3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);