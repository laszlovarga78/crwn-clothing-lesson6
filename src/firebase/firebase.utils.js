/**
8-as firebase esetén:
 
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

Hibaüzenet: export 'default' (imported as 'firebase') was not found in 'firebase/app'
*/

//9-es firebase-hez:
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyA4EoC2xDDXnjNiLBq4XvXyzyNip8rt_gU",
  authDomain: "crwn-db-4c009.firebaseapp.com",
  projectId: "crwn-db-4c009",
  storageBucket: "crwn-db-4c009.appspot.com",
  messagingSenderId: "881330011006",
  appId: "1:881330011006:web:164bd60530b882bd02512f",
  measurementId: "G-FYGK3H7H83",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;