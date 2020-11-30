import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
var firebaseConfig = {
    apiKey: "AIzaSyBstWa8mKruADwNKLVxJrISl5p_nhUqdV8",
    authDomain: "fire2-fd608.firebaseapp.com",
    databaseURL: "https://fire2-fd608.firebaseio.com",
    projectId: "fire2-fd608",
    storageBucket: "fire2-fd608.appspot.com",
    messagingSenderId: "589500547098",
    appId: "1:589500547098:web:251ec77957d97be841d1a3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore()
  const projectStorage = firebase.storage()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export {projectFirestore, projectStorage, timestamp}