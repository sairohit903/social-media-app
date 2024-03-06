// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFPDDqkHJVrtIWL3I8wdjODRSAdU6pmUs",
  authDomain: "react-course-578aa.firebaseapp.com",
  projectId: "react-course-578aa",
  storageBucket: "react-course-578aa.appspot.com",
  messagingSenderId: "104330941574",
  appId: "1:104330941574:web:bc1e98237d1a555c5e2d07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);