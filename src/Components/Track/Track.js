import React, { useState } from 'react';
import './Track.css'

const Track = ({ track, trackerPlayer }) => {

    let iconVerified = '1mBnRA0aWy5kjRwPJ_qhN2BUIMdu064sE';

    const audioRef = React.createRef();
    let [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
    }


    return (
        <div>
            <div className="track">
                <div className="track-container">
                    <img src={`https://drive.google.com/uc?export=view&id=${track.track_img_src}`} alt="drive" id="cover-image"/>
                    <div className="track-description">
                        <p id="track-info-title">{track.track_name}</p>

                        <p id="track-info">{track.track_bpm}</p>
                        <div className="artistName" id="track-info">
                            <p>{track.track_artist}</p>
                            <img src={`https://drive.google.com/uc?export=view&id=${iconVerified}`} alt="drive"/>
                        </div>
                    </div>
                    <audio

                            ref={audioRef}
                            onPlay={trackerPlayer}
                            src={`https://docs.google.com/uc?export=download&id=${track.track_src}`}
                            className="audioPlayer"
                        />
                        <button
                            className="audio-player__button"
                            onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}
                        </button>
                        
                </div>
            </div>
        </div>
    )
}

export default Track