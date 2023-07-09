// firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  // Your Firebase project configuration
  // ...
  storageBucket: 'your-project-id.appspot.com', // Replace with your bucket reference
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
