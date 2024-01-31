// src/components/Playlist.js
import React from 'react';

const Playlist = ({ playlist, onPlay, }) => {
  return (
    <ul>
      {playlist.map((audio, index) => (
        <div className='playlist-container'>
           <li key={index} onClick={() => onPlay(index)}>
           {index+1} . &nbsp; &nbsp; &nbsp;{audio.name}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Playlist;
