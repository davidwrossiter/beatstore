import React from 'react';
import Track from '../Track/Track';
import './Trending.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Trending = ({ tracks }) => {
    let tracksToRender = [];

    // for(let i = tracks.length; i < tracks.length; i++) {
    //     return (

    //     <Track track={tracks[i]} />
    //     )
    // }

    const renderTracks = (trackData) => {
        
        for(let i = 0; i < trackData.length; i++) {


            tracksToRender.push(<Track track={trackData[i]} />);
            
        }

        return tracksToRender;
        
        
    }

    return (
        <div class="discography">
            <h1 id="discography">Discography</h1>
            <div className="trending-container">
                <div className="trending">
                    {/* {<Track track={tracks[0]}/>} */}
                    {renderTracks(tracks)}
                </div>
            </div>
        </div>
    )


}

export default Trending;