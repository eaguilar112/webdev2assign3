'use client'

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MovieList from '../components/MovieList';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('/pages/api/');
                const data = await response.json();
                setMovies(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []); 

    const updateMovie = async (movieId, updatedData) => {
        try {
            const response = await fetch('/pages/api/', { 
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: movieId, ...updatedData }),
            });

            if (!response.ok) {
                throw new Error('Failed to update movie');
            }

            const updatedMovie = await response.json();

            setMovies((prevMovies) =>
                prevMovies.map((movie) =>
                    movie.id === updatedMovie.id ? updatedMovie : movie
                )
            );

            console.log('Movie updated:', updatedMovie);
        } catch (error) {
            console.error('Error updating movie:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Movie Database</h1>
                {loading ? (
                    <p>Loading movies...</p>
                ) : (
                    <MovieList
                        movies={movies}
                        onUpdateMovie={updateMovie}
                    />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default MoviesPage;
