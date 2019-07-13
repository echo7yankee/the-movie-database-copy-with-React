import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//Components

//Style
import style from "./movie.module.css";

//React router
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  //console.log(movie);

  let voteAverage = JSON.stringify(movie.vote_average)
    .split(".")
    .join("");

  if (voteAverage < 10) {
    voteAverage += 0;
  }
  let backgroundColor = `rgba(33, 208, 122, ${voteAverage / 100})`;
  if (voteAverage < 60) {
    backgroundColor = `rgba(210, 213, 49, ${voteAverage / 100})`;
  } else if (voteAverage < 25) {
    backgroundColor = `rgba(216, 0, 12, ${voteAverage / 100})`;
  }

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
          <div className={`${style.progressBarContainer} mr-2`}>
            <span>
              <CircularProgressbar
                value={voteAverage}
                text={`${voteAverage}%`}
                background={true}
                strokeWidth={10}
                backgroundPadding={6}
                styles={{
                  path: {
                    stroke: backgroundColor,
                    strokeLinecap: "butt",
                    transition: "stroke-dashoffset 0.5 ease 0s"
                  },
                  text: {
                    fill: "white",
                    fontSize: "32px",
                    fontWeight: 700
                  },
                  trail: {
                    stroke: "rgba(33, 208, 122, 0.2)",
                    strokeLinecap: "butt"
                  },
                  background: {
                    fill: "#000"
                  }
                }}
              />
            </span>
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
