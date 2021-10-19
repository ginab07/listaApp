var listaApp = angular.module('listaApp',[]);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcSLuXnEYFds0t9sWXukzMjLSxoaPnPFg",
  authDomain: "clase-3-backend.firebaseapp.com",
  projectId: "clase-3-backend",
  storageBucket: "clase-3-backend.appspot.com",
  messagingSenderId: "732919272968",
  appId: "1:732919272968:web:cc3f5f3b0a5eee20fe63bd"
};

// Inicializa la base de datos firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();