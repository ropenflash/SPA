import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBpLtysrV-7l6tIJMnPuL7fC5cW-vRFcGI",
    authDomain: "react-spas-2d987.firebaseapp.com",
    databaseURL:"https://react-spas-2d987.firebaseio.com",
    projectId: "react-spas-2d987",
    storageBucket: 'react-spas-2d987.appspot.com',
    messagingSenderId: "922518041575",
    appId: "1:922518041575:web:5ae7952048ca232d",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider= new firebase.auth.GoogleAuthProvider()
  export const auth= firebase.auth()
  
  export default firebase