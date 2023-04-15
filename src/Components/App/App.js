import './App.css';
import Header from '../Header/Header';
import Player from '../Player/Player';
import { Routes, Route } from 'react-router-dom';

function App() {
    // let myCase = "17xgEYkjdnxOraGrZkz2R7q7DBzi1fqcP"; 
    return(
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Header></Header>}></Route>
                <Route path="/license" element={<Player />}></Route>
                <Route path="/buy" element={<Player />}></Route>
                <Route path="/faq" element={<Player />}></Route>
                <Route path="/contact" element={<Player />}></Route>
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





