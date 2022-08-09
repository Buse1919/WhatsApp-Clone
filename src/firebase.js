import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyC5e0KszNEVr64NPsM2ES-Sgv0liJg_5A0",
    authDomain: "whatsapp-clone-875d6.firebaseapp.com",
    projectId: "whatsapp-clone-875d6",
    storageBucket: "whatsapp-clone-875d6.appspot.com",
    messagingSenderId: "19325948785",
    appId: "1:19325948785:web:38741a3ba4c086d0ab9cd0",
    measurementId: "G-7EQKH7DGZ6"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
    const auth = firebaseApp.auth();
       const provider = new firebase.auth.GoogleAuthProvider();

      export {auth,provider};
        export default db;