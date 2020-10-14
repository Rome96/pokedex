import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCfhHdGKzfOJsdjVM4b9befHMcrQn0G2ac",
  authDomain: "auth-pokedex.firebaseapp.com",
  databaseURL: "https://auth-pokedex.firebaseio.com",
  projectId: "auth-pokedex",
  storageBucket: "auth-pokedex.appspot.com",
  messagingSenderId: "406740578425",
  appId: "1:406740578425:web:b3eb4d6dafaba6e1b0e4a8",
};
// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
