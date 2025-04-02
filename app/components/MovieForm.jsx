'use client';

import { useState, useEffect } from 'react';

const MovieForm = ({ initialData = {}, onSubmit }) => {
    const [formData, setFormData] = useState({
        title: initialData.title || '',
        releaseDate: initialData.releaseYear
            ? `${initialData.releaseYear}-01-01` // Format as YYYY-MM-DD for date input
            : '',
        actors: initialData.actors ? initialData.actors.join(', ') : ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        try {
            // Extract year from date string (YYYY-MM-DD)
            const releaseYear = formData.releaseDate
                ? new Date(formData.releaseDate).getFullYear().toString()
                : '';

            const movieData = {
                title: formData.title,
                releaseYear,
                actors: formData.actors.split(',').map((actor) => actor.trim())
            };

            if (initialData.id) {
                await onSubmit(movieData, initialData.id, 'PATCH');
            } else {
                await onSubmit(movieData, null, 'POST');
            }
        } catch (err) {
            setError('Failed to save movie. Please try again.');
            console.error('Error submitting form:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">
                {initialData.id ? 'Edit Movie' : 'Add New Movie'}
            </h2>

            {error && (
                <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="releaseDate"
                    >
                        Release Year
                    </label>
                    <input
                        type="date"
                        id="releaseDate"
                        name="releaseDate"
                        value={formData.releaseDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                        disabled={isSubmitting}
                        min="1900-01-01"
                        max={`${new Date().getFullYear() + 5}-12-31`}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        Select any date in the correct year
                    </p>
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-700 mb-2"
                        htmlFor="actors"
                    >
                        Actors (comma separated)
                    </label>
                    <textarea
                        id="actors"
                        name="actors"
                        value={formData.actors}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded"
                        required
                        disabled={isSubmitting}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-400"
                    disabled={isSubmitting}
                >
                    {isSubmitting
                        ? 'Processing...'
                        : initialData.id
                        ? 'Update Movie'
                        : 'Add Movie'}
                </button>
            </form>
        </div>
    );
};

export default MovieForm;
