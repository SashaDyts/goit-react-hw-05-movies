import axios from 'axios';

const API_KEY = '8491f0c88fa7dc1f853ccc0c4b339dca';

export const getFilms = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );

  return response.data;
};

export const searchFilm = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};

export const getFilmDetails = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );

  return response;
};

export const getMovieReview = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );

  return response;
};
