
import React from 'react';
import { useNavigate } from 'react-router-dom';

const popularSearches = [
  "iPhone 15 Pro",
  "Samsung S24",
  "MacBook Air",
  "Sony PS5",
  "Samsung TV",
  "OnePlus 12",
  "Noise Smartwatch"
];

interface HeroSectionProps {
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setSearchQuery, handleSearch }) => {
  const navigate = useNavigate();

  const handlePopularSearch = (query: string) => {
    setSearchQuery(query);
    handleSearch();
  };

  return (
    <div className="bg-gradient-to-b from-guru-blue to-guru-blue-light text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Find the Best Electronics Deals in India
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          Compare prices instantly across Amazon, Flipkart, Croma, and Reliance Digital
        </p>
        
        <div className="mt-8 mb-6">
          <p className="text-sm mb-3">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => handlePopularSearch(search)}
                className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full text-sm transition-colors duration-200"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-guru-orange flex items-center justify-center mb-3">
              <span className="text-lg font-bold">A</span>
            </div>
            <span className="text-sm">Amazon.in</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-guru-orange flex items-center justify-center mb-3">
              <span className="text-lg font-bold">F</span>
            </div>
            <span className="text-sm">Flipkart</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-guru-orange flex items-center justify-center mb-3">
              <span className="text-lg font-bold">C</span>
            </div>
            <span className="text-sm">Croma</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-guru-orange flex items-center justify-center mb-3">
              <span className="text-lg font-bold">R</span>
            </div>
            <span className="text-sm">Reliance Digital</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
