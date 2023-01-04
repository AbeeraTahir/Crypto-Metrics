import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../redux/AllCoins/coinSlice';
import banner from '../images/banner.jpg';
import searchIcon from '../images/find.svg';
import '../styles/coinsList.css';

const CoinsList = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coinsData);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoins());
    }
  }, [dispatch, coins.length]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const searchedCoin = coins.filter((coin) => coin.name.toLowerCase()
    .match(search.toLowerCase()) || coin.symbol.toLowerCase()
    .match(search.toLowerCase()));

  return (
    <div className="coins-container">
      <img src={banner} alt="banner" />
      <div className="search-field">
        <input
          type="search"
          placeholder="Search cryptocurrency"
          onChange={handleChange}
          value={search}
        />
        <img src={searchIcon} alt="search icon" />
      </div>
      <div className="coins-list">
        {searchedCoin.map((coin) => (
          <Link to={`/details/${coin.id}`} key={coin.id}>
            <div className="coin-card">
              <div className="heading">
                <h2>
                  {coin.rank}
                  .
                  {' '}
                  {coin.name}
                </h2>
              </div>
              <div className="coin-logo">
                <img src={coin.icon} alt="coin icon" />
              </div>
              <div className="coin-desc">
                <p>
                  Price:
                  {' '}
                  {coin.price < 1000 ? coin.price.toFixed(2) : (coin.price / 1000).toFixed(1)}
                  {coin.price > 1000 ? 'K' : ''}
                </p>
                <p>
                  Market Cap:
                  {' '}
                  {(coin.marketCap / 1000000000).toFixed(1)}
                  B
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoinsList;
