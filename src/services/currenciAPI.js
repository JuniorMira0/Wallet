const url = 'https://economia.awesomeapi.com.br/json/all';

const getCurrencie = async () => {
  const response = await fetch(url);
  const currencieResponse = await response.json();
  delete currencieResponse.USDT;
  const data = Object.keys(currencieResponse);

  return data;
};

export const fetchAll = async () => {
  try {
    const response = await fetch(url);
    const data2 = await response.json();
    return data2;
  } catch (error) {
    console.error(error);
  }
};

export default getCurrencie;
