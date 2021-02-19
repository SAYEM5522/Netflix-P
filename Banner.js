import React, { useEffect, useState } from "react";

import request from "./request";
import axios from "./axios";
import "./Banner.css";
function Banner() {
  const [movie, Setmovie] = useState([]);

  const baseURL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const requests = await axios.get(request.fetchNetflixOrginals);
      //   console.log(
      //     requests.data.results[Math.floor(Math.random() * movie.length - 1)]
      //   );
      Setmovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
    };
    fetchData();
  }, []);
  console.log(movie);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
        backgroundPosition: "center center ",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contens">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottum"></div>
    </header>
  );
}

export default Banner;
