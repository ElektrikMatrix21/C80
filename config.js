import firebase from 'firebase'; 
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBJ6dfWslS8enUfzQjPJ1ywj4UWvXs4UsY",
    authDomain: "barterapp-c12d6.firebaseapp.com",
    databaseURL: "https://barterapp-c12d6.firebaseio.com",
    projectId: "barterapp-c12d6",
    storageBucket: "barterapp-c12d6.appspot.com",
    messagingSenderId: "500817200788",
    appId: "1:500817200788:web:be738e447d6d7cc3f69681",
    measurementId: "G-ZQ3L38J3H3"
  };

firebase.initializeApp(firebaseConfig); export default firebase.firestore();