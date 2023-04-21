import React, { useState } from 'react';
import Track from '../Track/Track';
import './Carousel.css';


const Carousel = ({ tracks, headerTitle }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= tracks.length-4){
            newIndex = tracks.length - tracks.length;
        }
        
        setActiveIndex(newIndex);
    }
    const updateIndexMobile = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= tracks.length-4){
            newIndex = tracks.length - tracks.length;
        }
        
        setActiveIndex(newIndex);
    }

    return (
        <div id="carousel-container">
            <div className="carousel">
                <div className="carouselNav">
                    <h1 id="carousel-trending">{headerTitle}</h1>
                    <div className="carousel-buttons">
                        <button key="1" id="desktop-display" onClick={() =>{updateIndex(activeIndex - 1 )}}>Back</button>
                        <button key="2" id="desktop-display" onClick={() =>{updateIndex(activeIndex + 1 )}}>Forward</button>
                        <button key="3" id="mobile-display" onClick={() =>{updateIndexMobile(activeIndex - 1 )}}><img src={`https://drive.google.com/uc?export=view&id=${'1P82kfDJJ4vgFeJcgcpq40CLOg0DcmHXM'}`} alt="button-car"></img></button>
                        <button key="4" id="mobile-display" onClick={() =>{updateIndexMobile(activeIndex + 1 )}}><img src={`https://drive.google.com/uc?export=view&id=${'1EsoWtYz6wg53EsA_znRHsLR9Oo82LmZ7'}`} alt="button-car"></img></button>
                    </div>
                </div>
                <div className="inner-carousel"
                    style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                    {tracks.map((track) => {
                        return <div id="tracks" className={track.track_src}><Track track={track} tracks={tracks} key={track.track_src} /></div>
                    })}
                </div>

            </div>
        </div>
    )
}


export default Carousel;