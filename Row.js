import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLarge }) {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, SettrailerUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const requests = await axios.get(fetchUrl);
      console.log(requests.data.results);
      setMovies(requests.data.results);
      return requests;
    };
    fetchData();
  }, [fetchUrl]);

  const opts = {
    width: "100%",
    height: "500",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      SettrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          SettrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            src={`${baseURL}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt=""
            key={movie.id}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
export default Row;
