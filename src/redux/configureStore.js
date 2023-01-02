import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './AllCoins/coinSlice';
import detailReducer from './CoinDetails/coinDetialsSlice';

const store = configureStore({
  reducer: {
    coins: coinReducer,
    details: detailReducer,
  },
});

export default store;
