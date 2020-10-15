import { GET_POKE } from '../constants/action-types';

const getPoke = payload => {
  return {
    payload,
    type: GET_POKE,
  };
};

export {
  getPoke
}