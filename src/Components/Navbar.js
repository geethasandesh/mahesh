import React from "react";

const Navbar = () => {
    return (
        <nav className="bg-blue-900 p-4 text-white flex justify-between">
            <div className="font-bold text-xl">ProgMarketing</div>
            <ul className="flex space-x-8">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/portfolio">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
                <li>
                    <a
                        href="/faq"
                        className="bg-yellow-400 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300"
                    >
                        FAQ
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
