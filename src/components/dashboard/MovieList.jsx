import React, { Component } from "react";
import MovieFilters from "./MovieFilters";

//Style
import style from "./movie.module.css";

//static
import spinner from "../../static/GIF/spinner.gif";

//Redux stuff
import { connect } from "react-redux";
import { getMovies } from "../../redux/actions/dataActions";
import MovieItem from "./MovieItem";

class MovieList extends Component {
  componentWillMount() {
    this.props.getMovies();
  }

  render() {
    //Destructuring from props
    const {
      movies: { results },
      loading
    } = this.props;

    return (
      <div className="container">
        <h3 className="mtb-3">Discover New Movies & TV Shows</h3>
        <div>
          {loading && (
            <div className="spinner-container">
              <img src={spinner} alt="spinner" />
            </div>
          )}
          <div className={style.cardContainer}>
            {results &&
              results.map(result => {
                return <MovieItem key={result.id} movie={result} />;
              })}
          </div>
          <MovieFilters />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.data.movies,
    loading: state.data.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMovies: () => dispatch(getMovies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
