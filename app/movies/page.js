'use client'

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MovieList from '../components/MovieList';

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

  //  useEffect(() => {
    //    const fetchMovies = async () => {
      //      try {

                // const response = await fetch('/api');
                // const data = await response.json();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Movie Database</h1>
                {loading ? (
                    <p>Loading movies...</p>
                ) : (
                    <MovieList movies={movies} />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default MoviesPage;