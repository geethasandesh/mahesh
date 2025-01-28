import React from "react";
import stripe from '../Images/stripebg.jpg'

const ServicesOverview = () => {
    const services = [
        {
            title: "SEO",
            description: "Optimize your website to rank higher on search engines.",
            icon: "🔍",
        },
        {
            title: "Social Media Marketing",
            description: "Grow your brand presence on social media platforms.",
            icon: "📱",
        },
        {
            title: "Content Marketing",
            description: "Engage your audience with high-quality content.",
            icon: "✍️",
        },
        {
            title: "PPC Advertising",
            description: "Drive traffic and conversions with targeted ads.",
            icon: "💰",
        },
    ];

    return (
        <section
            className="bg-cover bg-center py-16"
            style={{
                backgroundImage: `url(${stripe})`,
            }}
        >
            <div className="bg-black bg-opacity-10 py-16">
                <div className="max-w-7xl mx-auto px-6 text-center text-white">
                    {/* Section Title */}
                    <h2 className="text-3xl font-bold mb-8">Our Services</h2>
                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                    {/* CTA Button */}
                    <div className="mt-10">
                        <a
                            href="/services"
                            className="bg-blue-900 hover:bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
                        >
                            View All Services
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
