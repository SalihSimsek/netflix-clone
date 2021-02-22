import React, { useState, useEffect } from "react";
import '../styles/Row.css'

import axios from "../axios";

const poster_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, url, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(url);
      setMovies(request.data.results);
      return request;
    };
    fetchMovies();
  }, [url]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movie_list">
        {movies.map((movie) => (
          <img
          className={`movie ${isLargeRow && "poster"}`}
            key={movie.id}
            src={`${poster_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
