// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9IBDN59DmbX_jSwIm3H6CjCUgjYf8cx8",
  authDomain: "crud-react-eb587.firebaseapp.com",
  projectId: "crud-react-eb587",
  storageBucket: "crud-react-eb587.appspot.com",
  messagingSenderId: "772069828037",
  appId: "1:772069828037:web:619fabc755e47c5baa57ac",
};

// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
