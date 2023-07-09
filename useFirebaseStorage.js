// useFirebaseStorage.js
import { useEffect, useState } from 'react';
import storage from './firebaseConfig';

const useFirebaseStorage = (filePath) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fileRef = storage.ref().child(filePath);

    fileRef
      .getDownloadURL()
      .then((url) => {
        setImageUrl(url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filePath]);

  return imageUrl;
};

export default useFirebaseStorage;
