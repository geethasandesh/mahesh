import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false); // Close menu on resize if screen is bigger than mobile
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-black p-4 text-white fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Brand Name - Clickable for Home */}
                <Link to="/" className="font-bold text-xl sm:text-2xl font-mono">
                    ProgMarketing
                </Link>

                {/* Desktop Menu - Always Visible on Larger Screens */}
                <div className="hidden md:flex space-x-8 items-center">
                    <Link to="/" className="hover:text-gray-100">Home</Link>
                    <Link to="/about" className="hover:text-gray-100">About</Link>
                    <Link to="/services" className="hover:text-gray-100">Services</Link>
                    <Link to="/blog" className="hover:text-gray-100">Blogs</Link>
                    <Link to="/contact" className="hover:text-gray-100">Contact</Link>
                    <a href="tel:6303070510" className="bg-yellow-400 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 flex items-center gap-2">
                        <FaPhoneAlt />
                        <span>Call Us</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button 
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div 
                className={`absolute left-0 right-0 bg-black transition-all duration-300 ease-in-out flex flex-col items-center md:hidden ${
                    isMenuOpen ? "top-16 opacity-100 visible" : "-top-full opacity-0 invisible"
                }`}
            >
                <ul className="flex flex-col space-y-4 w-full text-center p-4">
                    <li><Link to="/" className="hover:text-gray-100" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className="hover:text-gray-100" onClick={() => setIsMenuOpen(false)}>About</Link></li>
                    <li><Link to="/services" className="hover:text-gray-100" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                    <li><Link to="/blog" className="hover:text-gray-100" onClick={() => setIsMenuOpen(false)}>Blogs</Link></li>
                    <li><Link to="/contact" className="hover:text-gray-100" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    <li>
                        <a href="tel:6303070510" className="bg-yellow-400 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 flex items-center gap-2 justify-center">
                            <FaPhoneAlt />
                            <span>Call Us</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
