
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    navigate(`/results?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        isHomepage={true}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      
      <main className="flex-1">
        <HeroSection 
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        
        <CategorySection 
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        
        <section className="py-12 container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How Price Guru Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-guru-blue text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Search Products</h3>
              <p className="text-gray-600">
                Enter the name or category of the electronics product you're looking for
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-guru-blue text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Compare Prices</h3>
              <p className="text-gray-600">
                See real-time prices from Amazon, Flipkart, Croma, and Reliance Digital
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-guru-blue text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Buy at Best Price</h3>
              <p className="text-gray-600">
                Click through to the retailer with the best deal and make your purchase
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg font-medium text-guru-blue mb-2">
              Save time and money by comparing prices in one place
            </p>
            <p className="text-sm text-gray-600">
              Price Guru helps you find the best electronics deals across major Indian retailers
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
