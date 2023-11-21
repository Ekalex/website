'use client';
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  // your firebase config
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const Video = () => {  
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log("Component mounted")
    const fetchImages = async () => {
      const storageRef = ref(storage, 'gs://website-211bf.appspot.com/gallery');

      try {
        const imageRefs = await listAll(storageRef);
        const imageUrls = await Promise.all(
          imageRefs.items.map((item) => getDownloadURL(item))
        );
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((url, index) => (
          <div key={index} className="grid gap-4">
            <img className="h-auto max-w-full rounded-lg" src={url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
