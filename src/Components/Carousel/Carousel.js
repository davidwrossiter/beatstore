import React, { useState } from 'react';
// import CarouselItem from '../Carousel/CarouselItem';
import Track from '../Track/Track';
import './Carousel.css';
import * as ReactDOM from 'react-dom'

const Carousel = ({ tracks }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    
    // for(let i = 0; i < trackData.length; i++) {
    //     tracksToRender.push(<Track track={trackData[i]} />);
    // }

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
        } else if (newIndex >= tracks.length){
            newIndex = tracks.length - tracks.length;
        }
        
        setActiveIndex(newIndex);
    }

    // const 
    const pauseTwoAudios = (trackList) => {
        trackList.map(track => {
            let trackID = document.getElementsByClassName(track.track_src)
            // trackID.addEventListener('play', () => {
            //     trackList.map(trackPause => {
                    
            //         trackPause = document.getElementsByClassName(track.track_src)
            //         if(trackPause === trackID) {
            //             trackID.play();
            //         } else {
            //             trackPause.pause();
            //         }
                    
            //     })
            // })
        })
    }
    

    

    return (
        <div id="carousel-container">
            <div className="carousel">
                <div className="carouselNav">
                    <h1 id="carousel-trending">Trending</h1>
                    <div className="carousel-buttons">
                        <button id="desktop-display" onClick={() =>{updateIndex(activeIndex - 1 )}}>Back</button>
                        <button id="desktop-display" onClick={() =>{updateIndex(activeIndex + 1 )}}>Forward</button>
                        <button id="mobile-display" onClick={() =>{updateIndexMobile(activeIndex - 1 )}}>Backward</button>
                        <button id="mobile-display" onClick={() =>{updateIndexMobile(activeIndex + 1 )}}>Forward</button>
                    </div>
                </div>
                <div className="inner-carousel"
                    style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                    {tracks.map((track) => {
                        return <div id="tracks" class={track.track_src}><Track track={track} funcPause={pauseTwoAudios} tracks={tracks}/></div>
                    })}
                </div>

            </div>
        </div>
    )
}


export default Carousel;