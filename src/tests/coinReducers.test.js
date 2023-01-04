import coinReducer from '../redux/coinSlice';

const mockCoinList = [
  {
    id: 'bitcoin',
    icon: 'https://static.coinstats.app/coins/1650455588819.png',
    name: 'Bitcoin',
    price: 16656.692236332765,
  },
  {
    id: 'ethereum',
    icon: 'https://static.coinstats.app/coins/1650455629727.png',
    name: 'Ethereum',
    price: 1209.3731676950756,
  },
];

describe('Coin Reducer', () => {
  const initialState = { loading: false, coinsData: [], error: '' };

  test('should return the initial state', () => {
    expect(coinReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  test('test for pending state to fetch coins data', () => {
    const action = { type: 'coins/fetchCoins/pending' };
    expect(coinReducer(initialState, action)).toEqual({ loading: true, coinsData: [], error: '' });
  });

  test('test for fulfilled state to fetch coins data', () => {
    const action = { type: 'coins/fetchCoins/fulfilled', payload: mockCoinList };
    expect(coinReducer(initialState, action)).toEqual({ loading: false, coinsData: mockCoinList, error: '' });
  });

  test('test for rejected state to fetch coins data', () => {
    const action = { type: 'coins/fetchCoins/rejected', error: { message: 'error' } };
    expect(coinReducer(initialState, action)).toEqual({ loading: false, coinsData: [], error: 'error' });
  });
});
