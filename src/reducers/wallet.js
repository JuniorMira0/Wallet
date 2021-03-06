// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { REMOVE_LINE, REQUEST_CURRENCIE_SUCESS, SET_GLOBAL_EXPANSES } from '../actions';

const initialState = {
  currencies: [],
  expenses: [],
};

const wallet = (state = initialState, action) => {
  switch (action.type) {
  case REQUEST_CURRENCIE_SUCESS:
    return { ...state, currencies: action.currencies };
  case SET_GLOBAL_EXPANSES:
    return { ...state, expenses: [...state.expenses, action.payload] };
  case REMOVE_LINE:
    return { ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload) };
  default:
    return state;
  }
};

export default wallet;
