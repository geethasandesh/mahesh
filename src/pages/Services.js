import React from "react";

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
        {
            title: "Web Design",
            description: "Drive traffic and conversions with targeted ads.",
            icon: "💰",
        },
        {
            title: "Video Editing",
            description: "Drive traffic and conversions with targeted ads.",
            icon: "💰",
        },
        {
            title: "Google Ads",
            description: "Drive traffic and conversions with targeted ads.",
            icon: "💰",
        },
        {
            title: "Email Marketing",
            description: "Drive traffic and conversions with targeted ads.",
            icon: "💰",
        },
    ];

    return (
        <section className="bg-gray-100 py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
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
            </div>
        </section>
    );
};

export default ServicesOverview;
