
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard, { Product } from '@/components/ProductCard';
import { searchProducts } from '@/data/mockData';

const ResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryParam = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    navigate(`/results?q=${encodeURIComponent(searchQuery)}`);
  };

  useEffect(() => {
    setSearchQuery(queryParam);
    
    if (queryParam) {
      setIsLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const searchResults = searchProducts(queryParam);
        setResults(searchResults);
        setIsLoading(false);
      }, 800);
    } else {
      setResults([]);
    }
  }, [queryParam]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      
      <main className="flex-1 bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          {queryParam && (
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-semibold">
                {isLoading ? 'Searching...' : (
                  results.length > 0 
                    ? `Found ${results.length} results for "${queryParam}"` 
                    : `No results found for "${queryParam}"`
                )}
              </h2>
            </div>
          )}
          
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="h-64 bg-white rounded-lg shadow-md p-4 animate-pulse-light">
                  <div className="flex space-x-4">
                    <div className="w-24 h-24 bg-gray-200 rounded"></div>
                    <div className="flex-1">
                      <div className="h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2 w-1/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            results.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {results.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              queryParam && (
                <div className="text-center py-16">
                  <p className="text-2xl font-medium text-gray-600 mb-4">No products found</p>
                  <p className="text-gray-500">Try a different search term or browse categories</p>
                </div>
              )
            )
          )}
          
          {!queryParam && (
            <div className="text-center py-16">
              <p className="text-2xl font-medium text-gray-600 mb-4">Enter a search term to find products</p>
              <p className="text-gray-500">Search for electronics like smartphones, laptops, and more</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResultsPage;
