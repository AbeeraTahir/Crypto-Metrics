import React from 'react';
import { Link } from 'react-router-dom';
import back from '../assets/arrow_back.svg';
import '../styles/Header.css';
import menu from '../assets/menu.png';

const Header = () => (
  <header>
    <div className="left">
      <Link to="/">
        <img src={back} alt="back" />
      </Link>
      <h1>Cryptocurrency</h1>
    </div>
    <img src={menu} alt="menu" />
  </header>
);

export default Header;
