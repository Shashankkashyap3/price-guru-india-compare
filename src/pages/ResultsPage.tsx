import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard, { Product } from '@/components/ProductCard';
import ProductComparison from '@/components/ProductComparison';
import { searchProducts } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { IndianRupee } from 'lucide-react';

const ResultsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryParam = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [results, setResults] = useState<Product[]>([]);
  const [filteredResults, setFilteredResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [sortOption, setSortOption] = useState('relevance');
  const [showDiscountedOnly, setShowDiscountedOnly] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    navigate(`/results?q=${encodeURIComponent(searchQuery)}`);
  };

  // Handle product selection for comparison
  const handleProductCompare = (product: Product) => {
    if (selectedProducts.find(p => p.id === product.id)) {
      // Remove if already selected
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else {
      // Add if not selected (limit to 3)
      if (selectedProducts.length < 3) {
        setSelectedProducts([...selectedProducts, product]);
      }
    }
  };

  // Clear all selected products
  const clearSelectedProducts = () => {
    setSelectedProducts([]);
    setShowComparison(false);
  };

  // Apply filters and sorting to results
  useEffect(() => {
    if (!results.length) {
      setFilteredResults([]);
      return;
    }

    let filtered = [...results];
    
    // Filter by discounts if option is selected
    if (showDiscountedOnly) {
      filtered = filtered.filter(product => 
        product.platforms.some(platform => platform.discount && platform.discount > 0)
      );
    }
    
    // Sort results based on selected option
    switch (sortOption) {
      case 'price_low_high':
        filtered.sort((a, b) => {
          const lowestPriceA = Math.min(...a.platforms.filter(p => p.inStock).map(p => p.price));
          const lowestPriceB = Math.min(...b.platforms.filter(p => p.inStock).map(p => p.price));
          return lowestPriceA - lowestPriceB;
        });
        break;
      case 'price_high_low':
        filtered.sort((a, b) => {
          const lowestPriceA = Math.min(...a.platforms.filter(p => p.inStock).map(p => p.price));
          const lowestPriceB = Math.min(...b.platforms.filter(p => p.inStock).map(p => p.price));
          return lowestPriceB - lowestPriceA;
        });
        break;
      case 'discount':
        filtered.sort((a, b) => {
          const maxDiscountA = Math.max(...a.platforms.map(p => p.discount || 0));
          const maxDiscountB = Math.max(...b.platforms.map(p => p.discount || 0));
          return maxDiscountB - maxDiscountA;
        });
        break;
      default: // relevance or any other option
        // No sorting needed, keep original order
        break;
    }
    
    setFilteredResults(filtered);
  }, [results, sortOption, showDiscountedOnly]);

  useEffect(() => {
    setSearchQuery(queryParam);
    
    if (queryParam) {
      setIsLoading(true);
      // Simulate API call delay
      setTimeout(() => {
        const searchResults = searchProducts(queryParam);
        setResults(searchResults);
        setFilteredResults(searchResults);
        setIsLoading(false);
      }, 800);
    } else {
      setResults([]);
      setFilteredResults([]);
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
                  filteredResults.length > 0 
                    ? `Found ${filteredResults.length} results for "${queryParam}"` 
                    : `No results found for "${queryParam}"`
                )}
              </h2>
            </div>
          )}
          
          {/* Comparison section */}
          {selectedProducts.length > 0 && (
            <div className="mb-6 bg-white p-4 rounded-lg shadow">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-medium">Compare Products ({selectedProducts.length}/3)</h3>
                  <p className="text-sm text-muted-foreground">
                    {selectedProducts.map(p => p.name).join(' • ')}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button 
                    onClick={() => setShowComparison(true)} 
                    className="bg-guru-orange hover:bg-guru-orange-dark"
                  >
                    Compare Now
                  </Button>
                  <Button variant="outline" onClick={clearSelectedProducts}>
                    Clear
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Filters and Sort */}
          {!isLoading && results.length > 0 && (
            <div className="mb-6 bg-white p-4 rounded-lg shadow">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex-1 min-w-[200px]">
                  <label className="text-sm font-medium mb-1 block">Sort By</label>
                  <Select 
                    value={sortOption} 
                    onValueChange={setSortOption}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="relevance">Relevance</SelectItem>
                      <SelectItem value="price_low_high">Price: Low to High</SelectItem>
                      <SelectItem value="price_high_low">Price: High to Low</SelectItem>
                      <SelectItem value="discount">Highest Discount</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="discounted"
                    checked={showDiscountedOnly}
                    onCheckedChange={setShowDiscountedOnly}
                  />
                  <label htmlFor="discounted" className="text-sm font-medium">
                    Show Discounted Only
                  </label>
                </div>
              </div>
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
            filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 gap-6">
                {filteredResults.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onCompareClick={handleProductCompare}
                    isCompareSelected={!!selectedProducts.find(p => p.id === product.id)}
                  />
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
      
      {showComparison && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="w-full max-w-5xl">
            <ProductComparison 
              products={selectedProducts}
              onClose={() => setShowComparison(false)}
            />
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default ResultsPage;
