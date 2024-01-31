
// src/components/FileUploader.js
import React from 'react';

const FileUploader = ({ onFileChange }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileChange(file);
  };

  return (
    // <input type="file" accept="audio/*" onChange={handleFileChange} />

    <label for="images" class="drop-container" id="dropcontainer">
      <input type="file" accept="audio/*" onChange={handleFileChange} />
    </label>

  );
};

export default FileUploader;
