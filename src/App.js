// src/App.js
import React, { useState, useEffect } from 'react';
import FileUploader from './components/FileUploader';
import Playlist from './components/Playlist';
import AudioPlayer from './components/AudioPlayer';
import NavBar from './components/NavBar';

const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);

  const handleFileUpload = (file) => {
    setPlaylist([...playlist, file]);
  };

  const handlePlay = (index) => {
    setCurrentAudioIndex(index);
  };

  const handleAudioEnded = () => {
    setCurrentAudioIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  useEffect(() => {
    const lastPlayedIndex = parseInt(localStorage.getItem('lastPlayedIndex'), 10) || 0;
    setCurrentAudioIndex(lastPlayedIndex);
  }, []);

  useEffect(() => {
    localStorage.setItem('lastPlayedIndex', currentAudioIndex);
  }, [currentAudioIndex]);

  return (
    <div className='main-container'>
      <NavBar />
      <div className='mid-container'>
        <div className="grid-container">
          <div className="fileupload">
            <h3 className='heading'>Upload Your music</h3>
            <FileUploader onFileChange={handleFileUpload} />
            <div className="audio-play">
              <AudioPlayer
                audio={playlist[currentAudioIndex]}
                onEnded={handleAudioEnded}
              />
            </div>
          </div>
          <div className="playlist">
            <Playlist playlist={playlist} onPlay={handlePlay} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
