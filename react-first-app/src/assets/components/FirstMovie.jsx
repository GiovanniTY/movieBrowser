import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FirstMovie = () => {
  const [firstMovie, setFirstMovie] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFirstMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        const firstPopularMovie = response.data.results[1];
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
  if (!firstMovie) return <div>No Movie Found</div>; 

  const imageUrl = `https://image.tmdb.org/t/p/w500/${firstMovie.poster_path}`;

  return (
    <div className='container-first'>
    <div className='first-movie-item'> 
      <img src={imageUrl} alt={firstMovie.title} className="movie-image" />
      <h3 className="movie-title-first"> {firstMovie.title} </h3>
     </div>
     </div>
  );
};
export default FirstMovie;