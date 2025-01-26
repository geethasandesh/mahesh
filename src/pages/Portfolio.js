import React from "react";

const BlogSection = () => {
    const blogPosts = [
        {
            title: "5 Tips for Effective SEO in 2025",
            excerpt: "Learn the latest strategies to boost your search rankings and drive organic traffic.",
            link: "/blog/seo-tips-2025",
        },
        {
            title: "How to Master Social Media Marketing",
            excerpt: "Discover proven techniques to grow your brand's presence on social media platforms.",
            link: "/blog/social-media-marketing",
        },
        {
            title: "Content Marketing Trends for This Year",
            excerpt: "Stay ahead with these content marketing trends that can elevate your brand.",
            link: "/blog/content-marketing-trends",
        },
        {
            title: "Maximizing ROI with PPC Advertising",
            excerpt: "Get tips on creating high-performing campaigns and managing ad spend effectively.",
            link: "/blog/ppc-advertising-roi",
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Title */}
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                    Latest Insights
                </h2>

                {/* Blog Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-700 mb-4">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{post.excerpt}</p>
                            <a
                                href={post.link}
                                className="text-blue-900 hover:text-black font-semibold"
                            >
                                Read More →
                            </a>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-10">
                    <a
                        href="/blog"
                        className="bg-blue-900 hover:bg-black text-white font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
                    >
                        Visit Our Blog
                    </a>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
