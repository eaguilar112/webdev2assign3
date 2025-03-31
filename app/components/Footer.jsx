const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6 mt-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Internet Movies Rental</h3>
                        <p>Your favorite movie rental service since 2023</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                        <p>Email: contact@imr.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-2">Address</h4>
                        <p>123 Movie Lane</p>
                        <p>Hollywood, CA 90210</p>
                    </div>
                </div>
                <div className="mt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} IMR. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;