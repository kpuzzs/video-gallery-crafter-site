
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm">
    <div className="container mx-auto px-4">
      <ul className="flex justify-end space-x-6 py-4 text-white font-limelight">
        <li><Link to="/" className="hover:text-gray-300">Sākums</Link></li>
        <li><Link to="/galerija" className="hover:text-gray-300">Galerija</Link></li>
      </ul>
    </div>
  </nav>
);

const Gallery = () => {
  return (
    <div className="min-h-screen bg-black text-white font-limelight">
      <Navigation />
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-6xl font-bold mb-12 text-center font-limelight">GALERIJA</h1>
        
        {/* Featured Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <img
            src="/lovable-uploads/695467e3-22f6-49ea-8758-b0b906c72936.png"
            alt="Basketball Players Collage"
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>

        {/* YouTube Video Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/1FUr4tFyKW0"
              title="Basketball Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[500px] rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
