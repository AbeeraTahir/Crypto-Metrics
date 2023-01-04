import React from 'react';
import { Link } from 'react-router-dom';
import back from '../images/arrow_back.svg';
import '../styles/Header.css';

const Header = () => (
  <header>
    <div className="left">
      <Link to="/">
        <img src={back} alt="back" />
      </Link>
      <h1>Cryptocurrency</h1>
    </div>
  </header>
);

export default Header;
