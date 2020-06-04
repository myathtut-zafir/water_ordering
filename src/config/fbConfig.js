import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Replace this with your own config details
let config = {
    apiKey: "AIzaSyDG6SL5ChpAzKRxSLu_UYHy3-A2RA2efXM",
    authDomain: "reacttest-ac34f.firebaseapp.com",
    databaseURL: "https://reacttest-ac34f.firebaseio.com",
    projectId: "reacttest-ac34f",
    storageBucket: "reacttest-ac34f.appspot.com",
    messagingSenderId: "466330380244",
    appId: "1:466330380244:web:d757d16f2e057c47"
};

let fbConfig = firebase.initializeApp(config);

export default fbConfig;
