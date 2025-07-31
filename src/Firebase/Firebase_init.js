// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhXednxSXBscwdCjKYjrLOmGqtDbiQKv0",
  authDomain: "simple-firebase-c3186.firebaseapp.com",
  projectId: "simple-firebase-c3186",
  storageBucket: "simple-firebase-c3186.firebasestorage.app",
  messagingSenderId: "595547885988",
  appId: "1:595547885988:web:c70bc8fb8bb4c618edb131",
  measurementId: "G-9DLVQK6GWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth