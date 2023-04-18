import React from 'react';
// import Header from '../Header/Header';
import Player from '../Player/Player';
import { tracks } from '../Player/tracks';
import Hero from '../Hero/Hero';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const HomePage = () => {
    return (
        <>
        {/* <DropDownMenu></DropDownMenu> */}
        <Hero />
        {/* <Player src={tracks[0].url} /> */}
    </>
    )
}

export default HomePage;