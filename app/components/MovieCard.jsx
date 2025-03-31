import Link from 'next/link';

const MovieCard = ({ movie }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
            <p className="text-gray-600 mb-2">Released: {movie.releaseYear}</p>
            <div className="mb-3">
                <h4 className="font-semibold">Actors:</h4>
                <ul className="list-disc list-inside">
                    {movie.actors.map((actor, index) => (
                        <li key={index}>{actor}</li>
                    ))}
                </ul>
            </div>
            <Link href={`/movies/${movie.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Edit
                </button>
            </Link>
        </div>
    );
};

export default MovieCard;