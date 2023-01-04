import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getCoinDetails = createAsyncThunk('details/fetchCoinDetails', async (id) => {
  const response = await fetch(`https://api.coinstats.app/public/v1/coins/${id}`);
  const { coin } = await response.json();
  return coin;
});

const initialState = { loading: false, coinDetails: [], error: '' };

const coinDetailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCoinDetails.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(getCoinDetails.fulfilled, (state, action) => {
      const newState = { ...state, coinDetails: action.payload, loading: false };
      return newState;
    });
    builder.addCase(getCoinDetails.rejected, (state, action) => {
      const newState = { ...state, coinDetails: [], error: action.error.message };
      return newState;
    });
  },
});

export default coinDetailsSlice.reducer;
