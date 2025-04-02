'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MovieForm from '../components/MovieForm';

const AddMoviePage = () => {
    const router = useRouter();

    const handleSubmit = async (movieData) => {
        try {

            const response = await fetch('/pages/api/add.ts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(movieData),
            });
            router.push('/movies');
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6">Add New Movie</h1>
                <MovieForm onSubmit={handleSubmit} />
            </main>
        </div>
    );
};

export default AddMoviePage;