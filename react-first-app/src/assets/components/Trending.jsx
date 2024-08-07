import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Trending = () => {
    const [movies, setMovies] = useState([]); // Cambiato a `[]` invece di `null`
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=dda1c3d76f77966fcc3b2c0a470ed548`);
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
        <div>
            <h1>Trending</h1>
            <div className="movie-trending">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-item">
                        <Link to={`/movie/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                            <h3>{movie.title}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trending;
