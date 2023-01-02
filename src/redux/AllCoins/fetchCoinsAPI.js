const fetchCoins = async () => {
  const response = await fetch('https://api.coinstats.app/public/v1/coins');
  const responseJSON = await response.json();
  return responseJSON;
};

export default fetchCoins;
