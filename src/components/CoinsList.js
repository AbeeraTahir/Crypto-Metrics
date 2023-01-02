import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoins } from '../redux/AllCoins/coinSlice';
import Coin from './Coin';

const CoinsList = () => {
  const dispatch = useDispatch();
  const coins = useSelector((state) => state.coins.coinsData);

  useEffect(() => {
    if (coins.length === 0) {
      dispatch(getCoins());
    }
  }, [dispatch, coins.length]);

  return (
    <ul>
      {coins.map((coin) => (
        <li key={coin.id}>
          <Coin
            icon={coin.icon}
            name={coin.name}
            price={coin.price}
          />
        </li>
      ))}
    </ul>
  );
};

export default CoinsList;
