import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB_w7ddILGiqyR6SIvGdH7cDay-2gUI990",
    authDomain: "rajafarel.firebaseapp.com",
    projectId: "rajafarel",
    storageBucket: "rajafarel.appspot.com",
    messagingSenderId: "38622762593",
    appId: "1:38622762593:web:cd45b7053f900efe307c20"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;