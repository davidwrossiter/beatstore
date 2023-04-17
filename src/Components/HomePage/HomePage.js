import React from 'react';
// import Header from '../Header/Header';
import Player from '../Player/Player';
import { tracks } from '../Player/tracks';
import Hero from '../Hero/Hero';

const HomePage = () => {
    return (
        <>
        <Hero />
        <Player src={tracks[0].url} />
    </>
    )
}

export default HomePage;