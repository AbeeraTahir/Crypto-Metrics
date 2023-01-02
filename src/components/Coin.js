import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Coin = ({
  id,
  icon,
  name,
  price,
}) => (
  <Link to={`/details/${id}`}>
    <div>
      <img src={icon} alt="coin icon" />
      <h2>{name}</h2>
      <p>
        {(price / 1000).toFixed(1)}
        K
      </p>
    </div>
  </Link>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Coin;
