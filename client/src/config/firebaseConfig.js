import firebase from 'firebase/app';
import 'firebase/storage'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyAxHcadlStgsZNMcoB9cR0WTWYsgtIzKqU",
  authDomain: "app-thoughts.firebaseapp.com",
  databaseURL: "https://app-thoughts.firebaseio.com",
  projectId: "app-thoughts",
  storageBucket: "app-thoughts.appspot.com",
  messagingSenderId: "402023576952",
  appId: "1:402023576952:web:4e5495e86e52b134a6848d",
  measurementId: "G-H63GRH0XD6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storage = firebase.storage();

export {storage};