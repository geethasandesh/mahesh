import React from 'react';
import Testimonial from '../Components/Testimonial';
import ServiceCard from '../Components/ServiceCard';
import ContactForm from '../Components/ContactForm';
import Clients from '../Components/Clients';
import Vision from '../Components/Vision';
import Faq from '../Components/Faq';
import HS from '../Images/hs.jpg'; // Import the image

function Home() {
  return (
    <div>
      <div className="min-h-screen bg-cover bg-center " style={{ backgroundImage: `url(${HS})` }}>
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between  p-8 md:p-16">
          {/* Left Section: Text Content */}
          <div className="text-center md:text-left max-w-xl mt-24">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Digital Marketing Agency
            </h1>
            <p className="mt-4 text-lg font-mono text-gray-600">
              Unlock Your Business Potential
            </p>
            <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-black text-white py-3 px-6 rounded-md shadow-md hover:bg-gray-800">
                Get Started
              </button>
              <button className="bg-white border border-gray-300 text-black py-3 px-6 rounded-md shadow-md hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>
        </div>
        </div>
        {/* ServiceCard Section */}
        <div>
          <ServiceCard />
        </div>
        {/* Testimonial Section */}
        <div>
          <Testimonial />
        </div>
        <div>
          <Vision/>
        </div>
        <div>
          <Faq/>
        </div>
        {/* ContactForm Section */}
        <div>
          <ContactForm />
        </div>
        {/* Clients Section */}
        <div>
          <Clients />
        </div>
    </div>
  );
}

export default Home;
