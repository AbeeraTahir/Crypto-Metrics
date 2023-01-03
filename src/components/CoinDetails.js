import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoinDetails } from '../redux/CoinDetails/coinDetialsSlice';

const CoinDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const coinDetails = useSelector((state) => state.details.coinDetails);

  useEffect(() => {
    dispatch(getCoinDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <div>

      <ul>
        <li>{coinDetails.name}</li>
        <li>{coinDetails.symbol}</li>
        <li>{coinDetails.rank}</li>
        <li>{coinDetails.price}</li>
        <li>{coinDetails.priceChange1d}</li>
        <li>{coinDetails.marketCap}</li>
      </ul>
    </div>
  );
};

export default CoinDetailsPage;
