import React, { useEffect, useState } from "react";
import { getMovieList, searchMovie } from "../../api";
import "../../App.css"


function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await getMovieList();
      setPopularMovies(result);
    };
    fetchMovies();
  }, []);

  const PopularMoviesList = () =>
    popularMovies.map((movie, i) => (
      <div key={i} className="Movie-wrapper">
        <div className="Movie-title">{movie.title}</div>
        <img
          className="Movie-image"
          src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
          alt="Movie Poster"
        />
        <div className="Movie-date">release: {movie.release_date}</div>
        <div className="Movie-rating">{movie.vote_average}</div>
      </div>
    ));

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <div>
      <header className="App-header">
        <input
          placeholder="Cari film kesayangan anda"
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMoviesList />
        </div>
      </header>
    </div>
  );
}

export default Home;
