import React from "react";

const WhyChooseUs = () => {
    const reasons = [
        { title: "Proven Track Record", icon: "✅" },
        { title: "Customized Strategies", icon: "🎯" },
        { title: "Experienced Team", icon: "👨‍💼" },
        { title: "Transparent Reporting", icon: "📊" },
        { title: "24/7 Support", icon: "⏰" },
    ];

    const testimonials = [
        {
            quote: "Working with this team transformed our business. Highly recommend!",
            name: "Sarah Johnson",
            company: "TechCorp",
            logo: "https://via.placeholder.com/50", // Replace with actual logo
        },
        {
            quote: "Their expertise and dedication are unmatched. Outstanding service!",
            name: "James Carter",
            company: "MarketingPro",
            logo: "https://via.placeholder.com/50", // Replace with actual logo
        },
        {
            quote: "Transparent, reliable, and effective. The best decision we made!",
            name: "Emily Davis",
            company: "StartupX",
            logo: "https://via.placeholder.com/50", // Replace with actual logo
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Why Partner with Us?
                </h2>

                {/* Reasons with Icons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-4xl mb-4">{reason.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-700">
                                {reason.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Testimonial Slider */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">
                        What Our Clients Say
                    </h3>
                    <div className="flex space-x-4 overflow-x-auto scrollbar-hidden">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 p-6 rounded-xl shadow-md flex-shrink-0 w-80"
                            >
                                <p className="text-gray-600 italic mb-4">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={testimonial.logo}
                                        alt={`${testimonial.company} logo`}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-gray-500 text-sm">
                                            {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
