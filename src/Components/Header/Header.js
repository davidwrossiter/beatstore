import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

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
          <DropDownMenu></DropDownMenu>
        </div>
      </nav>
    </header>
  );
}

export default Header;