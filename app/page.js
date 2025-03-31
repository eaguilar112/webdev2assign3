'use client'

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieList from './components/MovieList';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [userRole, setUserRole] = useState('user'); // 'admin' or 'user'

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const response = await fetch('/api/movies');
                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();

    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar userRole={userRole} />

            <main className="flex-grow">
                <MovieList movies={movies} userRole={userRole} />
            </main>

            <Footer />
        </div>
    );
}