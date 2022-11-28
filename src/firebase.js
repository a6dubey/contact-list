import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDs19-CzJ4CavnmfZAK7lRaJatfQDrGXhw",
  authDomain: "contact-list-29c45.firebaseapp.com",
  databaseURL: "https://contact-list-29c45-default-rtdb.firebaseio.com",
  projectId: "contact-list-29c45",
  storageBucket: "contact-list-29c45.appspot.com",
  messagingSenderId: "632634147010",
  appId: "1:632634147010:web:468e8a548b34d8678efb5b"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();