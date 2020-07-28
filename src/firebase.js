import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-uVWRE72IepKCgRfKd_zQRuSZWcl2X_c",
    authDomain: "peliculas-react.firebaseapp.com",
    databaseURL: "https://peliculas-react.firebaseio.com",
    projectId: "peliculas-react",
    storageBucket: "peliculas-react.appspot.com",
    messagingSenderId: "728000572191",
    appId: "1:728000572191:web:65b3bc4cc2f07960ba1e2a",
    measurementId: "G-C4B18345Y4"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
  //export const auth = firebase.auth();
  export const db = fb.firestore();

 