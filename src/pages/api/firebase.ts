import firebase from "firebase/compat/app"
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDK3S4lqDCTX_vzui8Pn7LrFaUbY76Y15o",
  authDomain: "findingspots-2874c.firebaseapp.com",
  projectId: "findingspots-2874c",
  storageBucket: "findingspots-2874c.appspot.com",
  messagingSenderId: "960638380866",
  appId: "1:960638380866:web:9a37b5ae1c6bb48a94b6db"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();