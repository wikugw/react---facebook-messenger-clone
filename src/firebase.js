import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA1hARfsXQZzq0IcQ9KVkO_jFQrnZtBlB4",
  authDomain: "facebook-clone-27b44.firebaseapp.com",
  databaseURL: "https://facebook-clone-27b44.firebaseio.com",
  projectId: "facebook-clone-27b44",
  storageBucket: "facebook-clone-27b44.appspot.com",
  messagingSenderId: "251923900577",
  appId: "1:251923900577:web:b02a90d2a84ee44f8928e0",
  measurementId: "G-W9M81BQT29"
});

const db = firebaseApp.firestore();

export default db;