import React, { useState } from 'react';
import './Track.css'


const Track = ({ track }) => {
    // let travisArt = '10bV8bjb9CupMRMn602ScI4Q66TnNFMiQ'
    let iconVerified = '1mBnRA0aWy5kjRwPJ_qhN2BUIMdu064sE';
    // https://drive.google.com/file/d/10bV8bjb9CupMRMn602ScI4Q66TnNFMiQ/view?usp=sharing
    // let drakeArt = '1sJHsWnN1bRykiz4tu7FzmoLy5Ym7Nxnx'
    const audioRef = React.createRef();
    let [isPlaying, setIsPlaying] = useState(false);
    

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
    }


    return (
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
                        src={`https://docs.google.com/uc?export=download&id=${track.track_src}`}
                    />
                    <button
                        className="audio-player__button"
                        onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}
                    </button>
            </div>
        </div>
    )
}

export default Track