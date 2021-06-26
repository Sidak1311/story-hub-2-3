import firebase from "firebase"
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBi2qznDsPilOmZxPtlXB2Sq33KSB1g_VA",
    authDomain: "story-hub-3aa42.firebaseapp.com",
    projectId: "story-hub-3aa42",
    storageBucket: "story-hub-3aa42.appspot.com",
    messagingSenderId: "872682478784",
    appId: "1:872682478784:web:95ad59bed69b6a633ae125"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()