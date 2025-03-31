// components/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, userRole }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar userRole={userRole} />
            <main className="flex-grow">{children}</main>
            <Footer />
        </div>
    );
}