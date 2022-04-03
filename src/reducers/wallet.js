// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REQUEST_CURRENCIE_SUCESS } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIE_SUCESS:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
