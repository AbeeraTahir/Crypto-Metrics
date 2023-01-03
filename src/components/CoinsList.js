import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../redux/AllCoins/coinSlice';

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
    setSearch(e.target.value);
  };

  const searchedCoin = coins.filter((coin) => coin.name.toLowerCase()
    .match(search.toLowerCase()));

  return (
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={search}
      />
      <div>
        {searchedCoin.map((coin) => (
          <Link to={`/details/${coin.id}`} key={coin.id}>
            <div>
              <img src={coin.icon} alt="coin icon" />
              <h2>{coin.name}</h2>
              <p>
                {(coin.price / 1000).toFixed(1)}
                K
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoinsList;
