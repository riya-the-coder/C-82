import firebase from 'firebase';
require ('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAbDaIxFFjh2aOoxs5LXNk62t0oNvmj1Zw",
    authDomain: "book-santa-120dc.firebaseapp.com",
    databaseURL: "https://book-santa-120dc.firebaseio.com",
    projectId: "book-santa-120dc",
    storageBucket: "book-santa-120dc.appspot.com",
    messagingSenderId: "261428889858",
    appId: "1:261428889858:web:939dba7399fad8bc235a1b",
    measurementId: "G-XYVJXVSHXS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore();