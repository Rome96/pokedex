import { GET_POKE } from '../constants/action-types';

const initialState = {
  pokeList: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKE:
      return {
        ...state,
        pokeList: state.pokeList.concat(action.payload),
      };

    default:
      break;
  }
  return state
};

export default rootReducer;