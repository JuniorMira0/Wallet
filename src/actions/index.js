import getCurrencie from '../services/currenciAPI';

// Coloque aqui suas actions
export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE';
export const REQUEST_CURRENCIE_SUCESS = 'REQUEST_CURRENCIE_SUCESS';
export const SET_GLOBAL_EXPANSES = 'SET_GLOBAL_EXPANSES';

export const setGlobalExpanses = (data) => ({
  type: SET_GLOBAL_EXPANSES,
  payload: data,
});

export const requestCurrencieSucess = (currencies) => ({
  type: REQUEST_CURRENCIE_SUCESS,
  currencies,
});

export function fetchCurrencie() {
  return async (dispatch) => {
    const data = await getCurrencie();
    dispatch(requestCurrencieSucess(data));
  };
}

export const setEmailValue = (payload) => ({
  type: SET_EMAIL_VALUE,
  payload,
});
