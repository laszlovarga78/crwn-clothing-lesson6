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

// user tárolása adatbázisban
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //const userRef = firestore.doc('users/nemletezoUserID');
    //console.log(firestore.doc('users/nemletezoUserID'));
    //const snapShot = await userRef.get();
    //console.log(snapShot);

    /*
    const collectionRef = firestore.collection('users');
    const collectionSnapshot = await collectionRef.get();
    console.log({ collectionSnapshot });
    */

    const snapShot = await userRef.get();
    //console.log(snapShot);

    // ha nem létezik az adat az adatbázisban, akkor létrehozzuk
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
    
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    //console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        //console.log(newDocRef);
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;