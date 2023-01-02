import React from 'react';
import PropTypes from 'prop-types';

const Coin = ({ icon, name, price }) => (
  <div>
    <img src={icon} alt="coin icon" />
    <h2>{name}</h2>
    <p>
      {(price / 1000).toFixed(1)}
      K
    </p>
  </div>
);

Coin.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Coin;
