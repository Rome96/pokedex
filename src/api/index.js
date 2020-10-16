import { URL, HTTP_STATUSES } from './constants'

export const api = {

   async getPokeAll() {
    try {
      const res = await fetch(`${URL}/?limit=50`);
      const response = await res.json();
      if (res.status === HTTP_STATUSES.OK) {
        return response;
      } else {
        return response;
      }
    } catch (error) {
      console.log('Error en la fn getPokeAll')
    }
  },

  async getPoke(url) {
    try {
      const res = await fetch(url);
      const response = await res.json();
      if (res.status === HTTP_STATUSES.OK) {
        return response;
      } else {
        return response;
      }
    } catch (error) {
      console.log("Error en la fn getPoke");
    }
  },

  async getPokeName(namePoke) {
    try {
      const res = await fetch(`${URL}/${namePoke}`);
      const response = await res.json();
      if (res.status === HTTP_STATUSES.OK) {
        return response;
      } else {
        return response;
      }
    } catch (error) {
      console.log("Error en la fn getPokeImg");
    }
  },
};