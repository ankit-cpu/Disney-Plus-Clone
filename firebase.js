import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCFADjg_cxNN9N9fLQ3gpaOTWw0gvCBSJs",
    authDomain: "disney-clone-5a662.firebaseapp.com",
    projectId: "disney-clone-5a662",
    storageBucket: "disney-clone-5a662.appspot.com",
    messagingSenderId: "491432503846",
    appId: "1:491432503846:web:cb5798cea0ea0df05ad4e7",
    measurementId: "G-8SPVCZMBQ8"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;