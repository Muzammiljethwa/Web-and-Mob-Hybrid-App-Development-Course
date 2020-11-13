import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC5dh-TF1zS9YOdCRdtLb9_647YPgdX_jY",
    authDomain: "amzn-clone-saylani.firebaseapp.com",
    databaseURL: "https://amzn-clone-saylani.firebaseio.com",
    projectId: "amzn-clone-saylani",
    storageBucket: "amzn-clone-saylani.appspot.com",
    messagingSenderId: "996399190658",
    appId: "1:996399190658:web:f9a5e6b475ef6f2af71a9b",
    measurementId: "G-KSLEMQF7XL"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth };