import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="header-title">
            <h1>THE BEST</h1>
        </div>
        <div className="header-links">
            <ul>
            <li><a href="">License</a></li>
            <li><a href="">Buy</a></li>
            <li><a href="">FAQ</a></li>
            <li><a href="">Contact</a></li>
            </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;