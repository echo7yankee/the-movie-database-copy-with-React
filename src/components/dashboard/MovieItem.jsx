import React from "react";

//Components

//Style
import style from "./movie.module.css";

//React router
import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";

const MovieItem = ({ movie }) => {
  //console.log(movie);

  return (
    <div className={style.card}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt="movie"
        />
      </div>
      <div className={style.cardInfo}>
        <div>
          <div className={`${style.progressBarSmall} mr-2`}>
            <CircularProgressBar movie={movie} />
          </div>
          <div>
            <h6>{movie.title}</h6>
            <p className="mtsm-1">{movie.release_date}</p>
          </div>
        </div>
        <p className="mtb-1">{movie.overview}</p>
        <div>
          <Link className={style.cardInfoLink} to={`${movie.id}`}>
            More info
            <span className={style.cardInfoBorder} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
