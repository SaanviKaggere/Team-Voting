import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBGtb0nfqLZ6ZqllbjH6fi2D7e38pX5ixw",
  authDomain: "car-race-be91b.firebaseapp.com",
  databaseURL: "https://car-race-be91b-default-rtdb.firebaseio.com",
  projectId: "car-race-be91b",
  storageBucket: "car-race-be91b.appspot.com",
  messagingSenderId: "148313699275",
  appId: "1:148313699275:web:eca175701346c8c121fc4e"
};
  // Initialize Firebase
  if(!firebase.apps.length){
    let app = firebase.initializeApp(firebaseConfig);
  }
  //firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();