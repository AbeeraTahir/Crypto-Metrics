import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCoins = createAsyncThunk('coins/fetchCoins', async () => {
  const response = await fetch('https://api.coinstats.app/public/v1/coins');
  const { coins } = await response.json();
  return coins;
});

const initialState = { loading: false, coinsData: [], error: '' };

const coinSlice = createSlice({
  name: 'coins',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCoins.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(getCoins.fulfilled, (state, action) => {
      const newState = { ...state, coinsData: action.payload, loading: false };
      return newState;
    });
    builder.addCase(getCoins.rejected, (state, action) => {
      const newState = { ...state, coinsData: [], error: action.error.message };
      return newState;
    });
  },
});

export default coinSlice.reducer;
