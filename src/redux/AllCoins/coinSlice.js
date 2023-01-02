import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchCoins from './fetchCoinsAPI';

const getCoins = createAsyncThunk('crypto/GetAll', async () => {
  const coinLists = await fetchCoins();
  const { coins } = coinLists;
  return coins;
});
const initialState = { loading: false, coinsData: [], error: '' };
const coinSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
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
      const newState = { ...state, missionData: [], error: action.error.message };
      return newState;
    });
  },
});
const { actions, reducer } = coinSlice;
export { actions, getCoins };
export default reducer;
