import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FirstMovie = () => {
  const [firstMovie, setFirstMovie] = useState(null); // Cambiato a `null` invece di `[]`
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFirstMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=dda1c3d76f77966fcc3b2c0a470ed548`);
        const firstPopularMovie = response.data.results[0];
        setFirstMovie(firstPopularMovie);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFirstMovie();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!firstMovie) return <div>No Movie Found</div>; // Aggiunto controllo su `firstMovie`

  return (
    <div className="movie-item">
      <img src={`https://image.tmdb.org/t/p/w500/${firstMovie.poster_path}`} alt={firstMovie.title} />
      <h3>{firstMovie.title}</h3>
      <p>Release Date: {firstMovie.release_date}</p>
      <p>Overview: {firstMovie.overview}</p>
    </div>
  );
};

export default FirstMovie;
