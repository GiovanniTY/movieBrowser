import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [relatedMovies, setRelatedMovies] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
                );
                setMovie(movieResponse.data);

                const relatedResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US`
                );
                setRelatedMovies(relatedResponse.data.results); 
            } catch (error) {
                console.error('Error fetching movie details: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!movie) return <div>No movie found</div>;

    return (
        <div className="movie-details">
            <div className="movie-details-header">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-poster"
                />
                <div className="movie-info-important">
                    <h1 id="h1-info">{movie.title}</h1>
                    <div className="duration-rating">
                    <p id="duration"><strong>Duration:</strong> {movie.runtime} minutes</p>
                    <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
                    </div>
                    </div>
                    <div className="release-genre">
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
                    </div>
                    <div className="overwiew">
                    <p><strong>Overview:</strong> {movie.overview}</p>
                    </div>
            </div>
            <div className="related-movies">
            <div className="trending-scroll-container-2">
                <h2>Related Movies</h2>
                <div className="related-movies-list">
                    {relatedMovies.map((relatedMovie) => (
                        <div key={relatedMovie.id} className="related-movie-item">
                            <img
                                src={`https://image.tmdb.org/t/p/w200${relatedMovie.poster_path}`}
                                alt={relatedMovie.title}
                                className="related-movie-poster"
                            />
                            <h3 className="h3-related-movie">{relatedMovie.title}</h3>
                            <p>{new Date(relatedMovie.release_date).getFullYear()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
};

export default MovieDetails;
