import React, { useState, useEffect } from "react";
import MovieFilters from "./MovieFilters";

//Style
import style from "./movie.module.css";

//static
import spinner from "../../static/GIF/spinner.gif";

//Redux stuff
import { connect } from "react-redux";
import { getMovies } from "../../redux/actions/dataActions";
import MovieItem from "./MovieItem";

const MovieList = ({
  getMovies,
  movies: { results, total_pages },
  loading
}) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMovies(page);
  }, [getMovies, page]);

  const getPage = e => {
    setPage(e.target.id);
  };

  console.log(page);

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
      <div className="pagination">
        <ul>
          <li className={page === 1 ? "active" : ""} onClick={getPage} id="1">
            1
          </li>
          <li className={page === 2 ? "active" : ""} onClick={getPage} id="2">
            2
          </li>
          <li className={page === 3 ? "active" : ""} onClick={getPage} id="3">
            3
          </li>
          <li className={page === 4 ? "active" : ""} onClick={getPage} id="4">
            4
          </li>
          <li className={page === 5 ? "active" : ""} onClick={getPage} id="5">
            5
          </li>
          <span className="gap">...</span>
          <li
            className={page === total_pages - 1 ? "active" : ""}
            onClick={getPage}
            id={total_pages - 1}
          >
            {total_pages - 1}
          </li>
          <li
            className={page === total_pages ? "active" : ""}
            onClick={getPage}
            id={total_pages}
          >
            {total_pages}
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.data.movies,
    loading: state.data.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getMovies: page => dispatch(getMovies(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
