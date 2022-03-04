import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAShwhegr4NGpNKEu3vPCMg52EiSie3898",
    authDomain: "whatsapp-clone-b6e60.firebaseapp.com",
    projectId: "whatsapp-clone-b6e60",
    storageBucket: "whatsapp-clone-b6e60.appspot.com",
    messagingSenderId: "113522590752",
    appId: "1:113522590752:web:36324b341c66a01c5e6845",
    measurementId: "G-6672N4956F"
};
  

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
    
export default db;