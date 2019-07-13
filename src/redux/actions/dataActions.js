import { GET_MOVIES, API_KEY, LOADING_UI, GET_MOVIE_BY_ID } from "../types";
import axios from "axios";

export const getMovies = () => dispatch => {
  dispatch({
    type: LOADING_UI
  });
  const popularMoviesApi = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  axios
    .get(popularMoviesApi)
    .then(res => {
      dispatch({
        type: GET_MOVIES,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getMovieById = movieId => dispatch => {
  const movieByIdApi = `https://api.themoviedb.org/3/movie/${movieId}?api_key=cc27acf410fa0e14fe1b3ee774e87c18`;

  axios.get(movieByIdApi).then(res => {
    dispatch({
      type: GET_MOVIE_BY_ID,
      payload: res.data
    });
  });
};
