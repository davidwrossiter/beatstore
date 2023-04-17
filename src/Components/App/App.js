import './App.css';
import Header from '../Header/Header';
import Player from '../Player/Player';
import { Routes, Route } from 'react-router-dom';
// import { tracks } from '../Player/tracks';
import HomePage from '../HomePage/HomePage';
import Hero from '../Hero/Hero'
// https://drive.google.com/file/d/1AL_yKm9IMfonYDF1ZJ8C6-gdT3tCQGXk/view?usp=share_link
const App = () => {
    // let myCase = "17xgEYkjdnxOraGrZkz2R7q7DBzi1fqcP"; 
    return(
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                {/* <Route path="/license" element={<Player src="https://docs.google.com/uc?export=download&id=11dpRdwSz4vcgfnjeVXGdH5YH9EK_n_Y5"/>}></Route>*/}
                <Route path="/buy" element={<Hero></Hero>}></Route>
                <Route path="/faq" element={<Player src="https://docs.google.com/uc?export=download&id=11dpRdwSz4vcgfnjeVXGdH5YH9EK_n_Y5"/>}></Route>
                <Route path="/contact" element={<Player src="https://docs.google.com/uc?export=download&id=11dpRdwSz4vcgfnjeVXGdH5YH9EK_n_Y5"/>}></Route> 
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





