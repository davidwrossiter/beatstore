import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import Hero from '../Hero/Hero'
// import Track from '../Track/Track';
import tracks from '../../utils/tracks';
import Trending from '../Trending/Trending';
import Carousel from "../Carousel/Carousel";
// https://drive.google.com/file/d/1AL_yKm9IMfonYDF1ZJ8C6-gdT3tCQGXk/view?usp=share_link
const App = () => {
    // let myCase = "17xgEYkjdnxOraGrZkz2R7q7DBzi1fqcP"; 
    return(
        <div>

            <Header></Header>
            <Routes>
                <Route path="/" element={<HomePage tracks={tracks}/>}></Route>

                {/* <Route path="/license" element={<Player src="https://docs.google.com/uc?export=download&id=11dpRdwSz4vcgfnjeVXGdH5YH9EK_n_Y5"/>}></Route>*/}
                <Route path="/buy" element={<Trending tracks={tracks}/>}></Route>
                <Route path="/faq" element={<Hero></Hero>}></Route>
                {/* <Route path="/contact" element={<Track src="https://docs.google.com/uc?export=download&id=11dpRdwSz4vcgfnjeVXGdH5YH9EK_n_Y5"/>}></Route>  */}
            </Routes>
        </div>




        // <div className="main">
        //     <Header></Header>
        //     <Player></Player>
        //     {/* <img src={`https://drive.google.com/uc?export=view&id=${myCase}`} alt="drive image"/> */}
        // </div>
        );
}

export default App;





