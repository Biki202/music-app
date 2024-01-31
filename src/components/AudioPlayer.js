// src/components/AudioPlayer.js
import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ audio, onEnded }) => {
  const audioRef = useRef();

  useEffect(() => {
    if (audio) {
      audioRef.current.currentTime = audio.currentTime || 0;
      audioRef.current.play();
    }
  }, [audio]);

  return (
    <div className='audio-container'>
      <audio
        ref={audioRef}
        controls
        onEnded={onEnded}
        src={audio ? URL.createObjectURL(audio) : null}
      />
    </div>
  );
};

export default AudioPlayer;
