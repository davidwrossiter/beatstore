import React, { useState } from 'react';
import './Player.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className="music-player__info">
        <img src="/album-art.jpg" alt="Album Art" />
        <div className="naming">
          <h3>Song Title</h3>
          <p>Artist Name</p>
        </div>
      </div>
      <div className="music-player__controls">
        <button onClick={handlePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>

        <input type="range" min="0" max="100" value="50" />
        
      </div>
    </div>
  );
};

export default MusicPlayer;