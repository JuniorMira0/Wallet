const getCurrencie = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const currencieResponse = await response.json();
  delete currencieResponse.USDT;
  const data = Object.keys(currencieResponse);

  return data;
};

export const fetchAll = async () => {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default getCurrencie;
