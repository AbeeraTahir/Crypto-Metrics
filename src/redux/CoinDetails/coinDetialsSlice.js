import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchCoinDetails from './fetchCoinDetailsAPI';

export const getCoinDetails = createAsyncThunk('details/fetchCoinDetails', async (id) => {
  const coinDetails = await fetchCoinDetails(id);
  const { coin } = coinDetails;
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
