import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoinDetails } from '../redux/CoinDetails/coinDetialsSlice';
import '../styles/coinDetails.css';

const CoinDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const coinDetails = useSelector((state) => state.details.coinDetails);

  useEffect(() => {
    dispatch(getCoinDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <div className="coin-details">
      <div className="hero">
        <img src={coinDetails.icon} alt="coin-icon" />
        <div className="hero-head">
          <h2>
            {coinDetails.name}
          </h2>
        </div>
      </div>
      <div className="details">
        <h2>
          {coinDetails.name}
          {' '}
          Details
        </h2>
        <ul>
          <li>
            <span>Name:</span>
            <span>{coinDetails.name}</span>
          </li>
          <li>
            <span>Symbol:</span>
            <span>{coinDetails.symbol}</span>
          </li>
          <li>
            <span>Rank:</span>
            <span>{coinDetails.rank}</span>
          </li>
          <li>
            <span>Price to USD:</span>
            <span>
              {' ~$'}
              {coinDetails.price < 1000
                ? coinDetails.price.toFixed(2) : (coinDetails.price / 1000).toFixed(1)}
              {coinDetails.price > 1000 ? 'K' : ''}
            </span>
          </li>
          <li>
            <span>Daily Change:</span>
            <span>
              {coinDetails.priceChange1d}
              %
            </span>
          </li>
          <li>
            <span>Market Cap:</span>
            <span>
              {(coinDetails.marketCap / 1000000000).toFixed(1)}
              B
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CoinDetailsPage;
