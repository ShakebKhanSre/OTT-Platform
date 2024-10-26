// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdRlNslXsQslboxk5fAUWy69Mdy5ukGWU",
  authDomain: "ott-platform-e3285.firebaseapp.com",
  projectId: "ott-platform-e3285",
  storageBucket: "ott-platform-e3285.appspot.com",
  messagingSenderId: "232198773954",
  appId: "1:232198773954:web:cef5029f67fb10f280ef5b",
  measurementId: "G-T39PF20550",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
