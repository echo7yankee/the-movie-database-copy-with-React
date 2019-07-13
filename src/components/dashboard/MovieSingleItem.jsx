import React, { Component } from "react";

//static
import spinner from "../../static/GIF/spinner.gif";

//style
import style from "./movie.module.css";

//Redux
import { connect } from "react-redux";
import { getMovieById } from "../../redux/actions/dataActions";
import CircularProgressBar from "./CircularProgressBar";

class MovieSingleItem extends Component {
  componentWillMount = () => {
    //Destructuring;
    const {
      getMovieById,
      match: {
        params: { id }
      }
    } = this.props;
    getMovieById(id);
  };

  render() {
    const { movie, loading } = this.props;

    let movieYear = movie.release_date && movie.release_date.split("-", 1);

    return (
      <div className={style.singleMovieContainer}>
        {loading && (
          <div className="spinner-container">
            <img src={spinner} alt="spinner" />
          </div>
        )}
        <div className={style.moviePosterContainer}>
          {/* <img
            className={style.moviePoster}
            src={`https://image.tmdb.org/t/p/w185/${movie.backdrop_path}`}
            alt="poster"
          /> */}

          <div className="container">
            <div className="display-flex">
              <div>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt=""
                />
              </div>

              <div className="ml-4">
                <div className="align-center">
                  <h1 className={style.singleMovieTitle}>{movie.title}</h1>
                  <span className={style.singleMovieYear}>({movieYear})</span>
                </div>
                <div className="mt-3 align-center">
                  <div className={style.progressBarMedium}>
                    {movie.vote_average && (
                      <CircularProgressBar movie={movie} />
                    )}
                  </div>
                  <div className="ml-1 bold">
                    <p>User</p>
                    <p>Score</p>
                  </div>
                </div>
                <div className="mt-3">
                  <h2>Overview</h2>
                  <p className="mt-2">{movie.overview}</p>
                </div>
                <div className="mt-2">Featured</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.data.movie,
    loading: state.data.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovieById: movieId => dispatch(getMovieById(movieId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieSingleItem);
