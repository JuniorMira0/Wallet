import { SET_EMAIL_VALUE } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const initialState = {
  email: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
  case SET_EMAIL_VALUE:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default user;
