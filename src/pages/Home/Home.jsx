import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import { fetchTrendingMovies } from 'components/API/API';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const getTrendingMovies = async () => {
    try {
      let movies = await fetchTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);

  return (
    <div className={css.Container}>
      <h1 className={css.Title}>Trending Today</h1>
      <ul className={css.MovieList}>
        {trendingMovies.map(movie => (
          <li key={movie.id} className={css.Item}>
            <Link to={`movies/${movie.id}`} state={{from:'/'}} className={css.Link}>{movie.name || movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;