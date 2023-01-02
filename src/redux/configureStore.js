import { configureStore } from '@reduxjs/toolkit';
import coinReducer from './AllCoins/coinSlice';

const store = configureStore({
  reducer: {
    coins: coinReducer,
  },
});

export default store;
