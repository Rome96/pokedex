import { GET_POKE, GET_POKE_All } from "../constants/action-types";

const getPokeAll = payload => {
  return {
    payload,
    type: GET_POKE_All,
  };
};

const getPoke = payload => {
  return {
    payload,
    type: GET_POKE,
  };
}
export {
  getPoke,
  getPokeAll
}