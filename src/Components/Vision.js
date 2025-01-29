import React from 'react';
import Mountain from '../Images/mountain.gif'; // Import the image

const VisionPage = () => {
  return (
    <div className=" bg-black py-0 text-white">
      <div className="flex flex-col lg:flex-row">
        {/* Text content section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16">
          <div className="max-w-2xl">
            {/* Vision heading with icon */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <h1 className="text-3xl lg:text-4xl font-bold text-blue-400">Our Vision</h1>
            </div>
            
            {/* Subheading */}
            <h2 className="text-xl lg:text-3xl font-semibold mb-8">
              ProgMarketing
            </h2>
            
            {/* Vision paragraphs */}
            <div className="space-y-6">
              <p className="text-gray-300">
              Prog Marketing is driven by a clear vision to provide businesses with the highest quality digital marketing solutions that are both organic and impactful.
              </p>
              
              <p className="text-gray-300">
              We are committed to building genuine connections between brands and their audiences by focusing on authenticity, creativity, and measurable outcomes. Our approach is rooted in sustainability, ensuring that every strategy we implement supports long-term growth. By blending innovation with a data-driven mindset, we aim to empower businesses to thrive in an ever-evolving digital landscape. At Prog Marketing, we don’t just market; we grow together, organically
              </p>
            </div>
          </div>
        </div>

        {/* Image section */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-auto">
          <img 
            src={Mountain}
            alt="Night scene with moon over ocean" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionPage;