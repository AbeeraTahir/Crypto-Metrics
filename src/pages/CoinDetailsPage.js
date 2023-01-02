import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCoinDetails } from '../redux/CoinDetails/coinDetialsSlice';

const CoinDetailsPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const coins = useSelector((state) => state.details.coinDetails);

  useEffect(() => {
    dispatch(getCoinDetails(params.id));
  }, [dispatch, params.id]);

  console.log(coins);
  return (
    <div>CoinDetailsPage</div>
  );
};

export default CoinDetailsPage;
