import React, { useState } from "react";
import './DropDownMenu.css';
import { Link } from 'react-router-dom';

let myCase = "1L3UCRvmzF8Rg8SNtdPU3JVz1Q9AvaHrM"; 

function DropDownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleMenu}>
      <img src={`https://drive.google.com/uc?export=view&id=${myCase}`} alt="drive" className="header-nav-icon"/>

      </button>
      {isOpen && (
        <ul className="dropdown-menu">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/license">License</Link></li>
              <li><Link to="/buy">Buy</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </div>
  );
}

export default DropDownMenu;

