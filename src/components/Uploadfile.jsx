import React, { Fragment, useState } from 'react';
import { storage } from './firebase';

const Uploadfile = () => {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.error(error.message);
        },
        () => {
          storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log('Image URL:', url);
            });
        }
      );
    }
  };

  return (
    <Fragment>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <progress value={progress} max="100" />
    </Fragment>
  );
};

export default Uploadfile;
