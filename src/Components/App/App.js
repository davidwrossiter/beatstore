import './App.css';
import Header from '../Header/Header';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import icons from '../../utils/resources';
import tracks from '../../utils/tracks';

const App = () => {

    
    return(
        <div>

            <Header></Header>
            <Routes>
                <Route path="/" element={<HomePage tracks={tracks} icons={icons} />}></Route>

                <Route path="/license" element={<HomePage tracks={tracks} icons={icons} />}></Route>
                <Route path="/buy" element={<HomePage tracks={tracks} icons={icons} />}></Route>
                <Route path="/faq" element={<HomePage tracks={tracks} icons={icons} />}></Route>
                <Route path="/contact" element={<HomePage tracks={tracks} icons={icons} />}></Route> 
            </Routes>
            
        </div>
        );
}

export default App;





