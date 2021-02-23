import React, { useState, useEffect } from "react";
import '../styles/Row.css'

import axios from "../axios";

import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const poster_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, url, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('')

  useEffect(() => {
    const fetchMovies = async () => {
      const request = await axios.get(url);
      setMovies(request.data.results);
      return request;
    };
    fetchMovies();
  }, [url]);

  const opts = {
    height: '390px',
    width: '100%',
    playerVars: {
      autoplay: 1
    }
  }

  const handleClick = (movie) => {
    if (trailerUrl) setTrailerUrl('')
    else {
      movieTrailer(movie?.name || '').then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailerUrl(urlParams.get('v'))
      })
        .catch((err) => console.log('Error: ', err))
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="movie_list">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className={`movie ${isLargeRow && "poster"}`}
            key={movie.id}
            src={`${poster_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
