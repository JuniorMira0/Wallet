import getCurrencie from '../services/currenciAPI';

// Coloque aqui suas actions
export const SET_EMAIL_VALUE = 'SET_EMAIL_VALUE';
export const REQUEST_CURRENCIE_SUCESS = 'REQUEST_CURRENCIE_SUCESS';

export const requestCurrencieSucess = (payload) => ({
  type: REQUEST_CURRENCIE_SUCESS,
  payload,
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
