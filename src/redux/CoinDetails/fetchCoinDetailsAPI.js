const fetchCoinDetails = async (id) => {
  const response = await fetch(`https://api.coinstats.app/public/v1/coins/${id}`);
  const responseJSON = await response.json();
  return responseJSON;
};

export default fetchCoinDetails;
