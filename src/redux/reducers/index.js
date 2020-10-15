import { GET_POKE } from '../constants/action-types';

const initialState = {
  poke: {
    name: '',
    img: '',
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKE:
      return {
        ...state,
        poke: action.payload
      }

    default:
      break;
  }
  return state
};

export default rootReducer;