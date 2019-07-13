import { GET_MOVIES, LOADING_UI, GET_MOVIE_BY_ID } from "../types";

const initialState = {
  movies: [],
  movie: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_UI: {
      return {
        ...state,
        loading: true
      };
    }
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case GET_MOVIE_BY_ID:
      return {
        ...state,
        movie: action.payload
      };
    default:
      return state;
  }
}
