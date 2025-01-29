import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Copyright */}
                    <div className="flex flex-col items-start">
                        <div className="flex items-center space-x-2">
                            {/* Replace this with your logo */}
                            <div className="bg-white text-gray-900 w-10 h-10 flex items-center justify-center rounded-full">
                                {/* Placeholder icon */}
                                <span className="text-xl font-bold">🔲</span>
                            </div>
                            <span className="text-lg font-semibold text-gray-300">
                                ProgMarketing
                            </span>
                        </div>
                        <p className="mt-4 text-sm text-gray-500">
                            © 2025 ProgMarketing, Inc. All rights reserved.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="hover:text-gray-100">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-gray-100">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-gray-100">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-gray-100">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Our Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-4">
                            Our Services
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="/services/seo" className="hover:text-gray-100">
                                    SEO
                                </a>
                            </li>
                            <li>
                                <a href="/services/ppc" className="hover:text-gray-100">
                                    PPC
                                </a>
                            </li>
                            <li>
                                <a href="/services/social-media" className="hover:text-gray-100">
                                    Social Media
                                </a>
                            </li>
                            <li>
                                <a href="/services/content-marketing" className="hover:text-gray-100">
                                    Content Marketing
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect With Us */}
                    <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-4">
                            Connect With Us
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-100">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
