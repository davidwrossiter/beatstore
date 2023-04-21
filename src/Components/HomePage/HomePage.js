import React from 'react';
import Hero from '../Hero/Hero';
import Carousel from '../Carousel/Carousel';
import './HomePage.css';

const HomePage = ({ tracks }) => {
    return (
        <div>  
            <Hero />
            <div className="homePageCarousel"><Carousel tracks={tracks} headerTitle={'Trending'} /></div>
            <div><Carousel tracks={tracks} headerTitle={'Popular'} /></div>
            <div className="footer"></div>
        </div>
    )
}

export default HomePage;