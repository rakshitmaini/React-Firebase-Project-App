import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD4FZbJC-lSe9nzsNE5jrTw9LrldZ_E8QA",
    authDomain: "react-project-app-33fa6.firebaseapp.com",
    databaseURL: "https://react-project-app-33fa6.firebaseio.com",
    projectId: "react-project-app-33fa6",
    storageBucket: "react-project-app-33fa6.appspot.com",
    messagingSenderId: "170206285418",
    appId: "1:170206285418:web:c576819d2e7e4accaf4413"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();
// firebase.database.enableLogging(false,false);

export default firebase;