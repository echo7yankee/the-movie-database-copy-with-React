import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = ({ movie }) => {
  console.log(movie);

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
    <>
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
    </>
  );
};

export default CircularProgressBar;
