import { GET_POKE, GET_POKE_All } from "../constants/action-types";

const initialState = {
  pokeList: [],
  poke: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKE_All:
      return {
        ...state,
        pokeList: state.pokeList.concat(action.payload),
        // pokeList: action.payload
      };
    case GET_POKE:
      return {
        ...state,
        poke: action.payload,
      };
    
    default:
       return state;
  }
  return state
};

export default rootReducer;