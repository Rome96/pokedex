import { URL, HTTP_STATUSES } from './constants'

export const api = {

  async getPoke(namePoke) {
    console.log('namepoke', namePoke)
    try {
      const res = await fetch(`${URL}/${namePoke}`);
      const response = await res.json();
      if (res.status === HTTP_STATUSES.OK) {
        return response;
      } else {
        return response;
      }
    } catch (error) {
    }
  },
};