import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true); // Tracks if the navbar is visible
    const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Tracks if the menu is open on mobile

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false); // Hide navbar when scrolling down
            } else {
                setIsVisible(true); // Show navbar when scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle mobile menu

    return (
        <nav
            className={`bg-black p-4 text-white flex justify-between fixed top-0 left-0 w-full transition-all duration-500 z-50 ${
                isVisible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
            }`}
        >
            <div className="font-bold text-2xl font-mono">ProgMarketing</div>
            {/* Mobile menu toggle button */}
            <div className="block md:hidden">
                <button onClick={toggleMenu} className="text-white">
                    {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                </button>
            </div>

            {/* Navigation links */}
            <ul
                className={`flex space-x-8 md:flex md:space-x-8 md:flex-row absolute md:relative left-0 top-0 w-full md:w-auto md:static md:bg-transparent bg-black md:flex-row transition-all duration-300 ${
                    isMenuOpen ? "top-12" : "-top-full"
                } md:top-0`}
            >
                <li className="group relative">
                    <a href="/" className="text-white font-semibold hover:text-gray-300">
                        Home
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
                <li className="group relative">
                    <a href="/about" className="text-white font-semibold hover:text-gray-300">
                        About
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
                <li className="group relative">
                    <a href="/services" className="text-white font-semibold hover:text-gray-300">
                        Services
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
                <li className="group relative">
                    <a href="/portfolio" className="text-white font-semibold hover:text-gray-300">
                        Blog
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
                <li className="group relative">
                    <a href="/contact" className="text-white font-semibold hover:text-gray-300">
                        Contact
                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </li>
                <li>
                    <a
                        href="tel:6303070510"
                        className="bg-yellow-400 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 flex items-center gap-2"
                    >
                        <FaPhoneAlt />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
