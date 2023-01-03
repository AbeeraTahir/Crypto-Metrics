import React from 'react';
import mic from '../images/mic.svg';
import gear from '../images/settings.svg';
import back from '../images/arrow-back-ios.svg';
import '../styles/Header.css';

const Header = () => (
  <header>
    <div className="left">
      <img src={back} alt="back" />
      <h1>Cryptocurrency</h1>
    </div>
    <div className="right">
      <img src={mic} alt="mic" />
      <img src={gear} alt="settings" />
    </div>
  </header>
);

export default Header;
