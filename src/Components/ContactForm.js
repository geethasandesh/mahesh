import React from "react";

const ContactSection = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Get in Touch
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-700 mb-4">
                            Send Us a Message
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    placeholder="Your Phone Number"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-900 hover:bg-black text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Contact Information</h3>
                            <p className="text-gray-600 mt-2">
                                Reach out to us through the following details:
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <span className="text-blue-600 text-2xl">📞</span>
                                <p className="text-gray-700">+1 (91) 6303070510</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-blue-600 text-2xl">📧</span>
                                <p className="text-gray-700">maheshinapa7526@gmail.com</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-blue-600 text-2xl">📍</span>
                                <p className="text-gray-700">Teladharpalli, Khammam, Telangana</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-700">Follow Us</h3>
                            <div className="flex space-x-4 mt-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 text-2xl hover:text-blue-700"
                                >
                                    🌐
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 text-2xl hover:text-blue-500"
                                >
                                    🐦
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-500 text-2xl hover:text-pink-600"
                                >
                                    📷
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-900 text-2xl hover:text-black"
                                >
                                    💼
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
