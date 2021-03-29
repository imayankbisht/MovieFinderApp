import Axios from 'axios';

export const searchApi = async (searchTerm) => {
  return await Axios.get(
    `http://www.omdbapi.com/?s=${searchTerm}&apikey=9d494647`
  );
};

export const searchByID = async (searchID) => {
  return await Axios.get(
    `http://www.omdbapi.com/?i=${searchID}&apikey=9d494647`
  );
};
