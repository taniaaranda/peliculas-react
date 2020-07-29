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
  /*
  var firebaseConfigAnele = {
    apiKey: "AIzaSyAFSLOicO0TnKiur12zbfwQ9TPJWjkKlMI",
    authDomain: "tp3appweb.firebaseapp.com",
    databaseURL: "https://tp3appweb.firebaseio.com",
    projectId: "tp3appweb",
    storageBucket: "tp3appweb.appspot.com",
    messagingSenderId: "828310208483",
    appId: "1:828310208483:web:5f805ba7f9b43f860eaad6"
  };
  */
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig); //REEMPLAZAR POR firebaseConfig. yo solo estoy probando con una mia
  //firebase.analytics();
  //export const auth = firebase.auth();
  export const db = fb.firestore();

 