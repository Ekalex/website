// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  // Your Firebase project configuration
  // ...
  storageBucket: 'gs://website-211bf.appspot.com/', // Replace with your bucket reference
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
