import React from 'react';
// import Header from '../Header/Header';
import Player from '../Player/Player';
import { tracks } from '../Player/tracks';
import Hero from '../Hero/Hero';
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import Carousel from '../Carousel/Carousel';
import './HomePage.css';

const HomePage = ({ tracks, icons }) => {
    return (
        <>
        
        {/* <DropDownMenu></DropDownMenu> */}
        <Hero />
        <div className="homePageCarousel"><Carousel tracks={tracks} headerTitle={'Trending'} icons={icons}/></div>
        <br></br>
        <div><Carousel tracks={tracks} headerTitle={'Popular'}/></div>
        <div className="footer"></div>
        {/* <Player src={tracks[0].url} /> */}
    </>
    )
}

export default HomePage;