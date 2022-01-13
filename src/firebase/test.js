import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firestore = firebase.firestore();

// collection lekérdezése:
firestore.collection('users');

// adott doc lekérdezése:
firestore.collection('users').doc('QYeR7p4rIgVvaKBJ0enRjkvSmF62');

// adott dokumentumhoz tartozó collection lekérdezése láncolással:
firestore.collection('users').doc('QYeR7p4rIgVvaKBJ0enRjkvSmF62').collection('cartItems');

// újabb (konkrét) doc lekérése
firestore.collection('users').doc('QYeR7p4rIgVvaKBJ0enRjkvSmF62').collection('cartItems').doc('rjwWMak1vgM5azdl0V6L');

// ugyanez másképpen:
firestore.doc('users/QYeR7p4rIgVvaKBJ0enRjkvSmF62/cartItems/rjwWMak1vgM5azdl0V6L');

// ezt collectionáre is lehet alkalmazni:
firestore.collection('users/QYeR7p4rIgVvaKBJ0enRjkvSmF62/cartItems');

// --
const myObjectToStore = { name: 'Ödön '};
window.localStorage.setItem('myItem', JSON.stringify(myObjectToStore));

// kiolvasás:
const myRetrievedObject = window.localStorage.getItem('myItem');

console.log(JSON.parse(myRetrievedObject));