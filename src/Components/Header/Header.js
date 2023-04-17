import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

// https://drive.google.com/file/d/1L3UCRvmzF8Rg8SNtdPU3JVz1Q9AvaHrM/view?usp=share_link
let myCase = "1L3UCRvmzF8Rg8SNtdPU3JVz1Q9AvaHrM"; 
// https://drive.google.com/file/d/1j4qXlgXgcVKTxYJ7dGIRX8c0dz162Wns/view?usp=sharing

const Header = () => {
  return (
    <header>
      <nav>
        <div className="header-title">
          <ul className='the-best'><li><Link to="/">DAVID GRAHAM</Link></li></ul>
      
        </div>
        <div className="header-links">
            <ul>
              <li><Link to="/license">License</Link></li>
              <li><Link to="/buy">Buy</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
        <div className="header-mobile-icon">
        <img src={`https://drive.google.com/uc?export=view&id=${myCase}`} alt="drive" className="header-nav-icon"/>
        </div>
      </nav>
    </header>
  );
}

export default Header;