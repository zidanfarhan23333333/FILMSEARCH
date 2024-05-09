import React, { useState, useEffect } from "react";
import { getTopRatedMovies } from "../../api";
import "../../App.css";

const Genres = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const result = await getTopRatedMovies();
        setTopRatedMovies(result);
      } catch (error) {
        console.error("Error fetching top-rated movies:", error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  return (
    <div className="Genres-container">
      <h1 className="Genres-title">TOP RATED MOVIES</h1>
      <div className="Movie-container">
        {topRatedMovies.map((movie, index) => (
          <div key={index} className="Movie-wrapper">
            <div className="Movie-title">{movie.title}</div>
            <img
              className="Movie-image"
              src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
              alt="Movie Poster"
            />
            <div className="Movie-date">Release Date: {movie.release_date}</div>
            <div className="Movie-rating">Rating: {movie.vote_average}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
