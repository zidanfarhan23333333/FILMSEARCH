import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?&page=1&api_key=${apiKey}`
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}` // Added '&' to separate query and api_key
  );
  return search.data;
};

// GANTI API GWE SEK GENRE NGISOR IKI MAU RUNG ONO FUNCTION E
export const getMovieGenres = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?&page=1&api_key=${apiKey}`
  );
  return movie.data.results;
};
