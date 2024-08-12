import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Trending = () => {
    const [movies, setMovies] = useState([]); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
                setMovies(response.data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="trending-container">
          <h2>Trending</h2>
          <div className="trending-scroll-container">
            <div className="trending-items">
              {movies.map((movie) => (
                <div key={movie.id} className="movie-item">
                  <Link to={`/movie/${movie.id}`} className="text-decoration-none text-light">
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      alt={movie.title}
                      className="movie-imag-trending"
                    />
                    <h3 className ="movie-title">{movie.title}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
export default Trending;
