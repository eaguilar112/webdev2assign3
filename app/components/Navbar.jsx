import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">IMR Movies</Link>
                <div className="space-x-4">
                    <Link href="/">Home</Link>

                    <Link href="/movies">Movies</Link>

                    <Link href="/add">Add Movie</Link>


                </div>
            </div>

        </nav>
    );
};
export default Navbar;







