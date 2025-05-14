
import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PriceAlert from './PriceAlert';
import { Search, Bell, IndianRupee } from 'lucide-react';

export interface Platform {
  name: string;
  price: number;
  currency: string;
  inStock: boolean;
  url: string;
  logo: string;
  discount?: number; // Optional discount percentage
  coupon?: string;   // Optional coupon code
}

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  brand: string;
  category: string;
  platforms: Platform[];
}

interface ProductCardProps {
  product: Product;
  onCompareClick?: (product: Product) => void;
  isCompareSelected?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onCompareClick,
  isCompareSelected = false 
}) => {
  const [showPriceAlert, setShowPriceAlert] = useState(false);

  // Find the cheapest price among all platforms
  const cheapestPrice = Math.min(
    ...product.platforms
      .filter(platform => platform.inStock)
      .map(platform => platform.price)
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Handle the platform link click with product-specific URL
  const handlePlatformClick = (url: string) => {
    // Open the product-specific URL
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Function to check if any platform has a discount
  const hasDiscount = product.platforms.some(platform => platform.discount && platform.discount > 0);

  return (
    <>
      <Card className={`w-full h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 ${hasDiscount ? 'border-green-500' : 'border-guru-orange'}`}>
        <CardHeader className="pb-2">
          <div className="flex items-start space-x-4">
            <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden shrink-0">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-contain" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.brand}</p>
              <p className="text-sm text-muted-foreground">{product.category}</p>

              {/* Action buttons */}
              <div className="flex gap-2 mt-2">
                {onCompareClick && (
                  <Button 
                    variant={isCompareSelected ? "default" : "outline"}
                    size="sm" 
                    className={isCompareSelected ? "bg-guru-orange hover:bg-guru-orange-dark" : ""}
                    onClick={() => onCompareClick(product)}
                  >
                    <Search className="h-4 w-4 mr-1" />
                    {isCompareSelected ? 'Selected' : 'Compare'}
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setShowPriceAlert(true)}
                >
                  <Bell className="h-4 w-4 mr-1" />
                  Price Alert
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="mb-2">
            <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          </div>
          
          <div className="mt-4 space-y-2">
            {product.platforms.map((platform) => (
              <div 
                key={platform.name} 
                className={`flex justify-between items-center py-2 px-3 rounded ${
                  platform.price === cheapestPrice && platform.inStock 
                    ? 'bg-green-50 border border-green-200' 
                    : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6">
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <span className="font-medium text-sm">{platform.name}</span>
                  {platform.discount && platform.discount > 0 && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">
                      {platform.discount}% OFF
                    </span>
                  )}
                </div>
                
                <div className="flex items-center space-x-3">
                  {platform.inStock ? (
                    <div className="flex flex-col items-end">
                      <span 
                        className={`font-bold ${
                          platform.price === cheapestPrice ? 'text-guru-orange text-lg' : ''
                        }`}
                      >
                        {formatPrice(platform.price)}
                      </span>
                      
                      {platform.coupon && (
                        <span className="text-xs text-blue-600">
                          Coupon: {platform.coupon}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-gray-400 text-sm">Out of stock</span>
                  )}
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className={`shrink-0 ${platform.price === cheapestPrice && platform.inStock ? 'border-guru-orange text-guru-orange hover:bg-guru-orange hover:text-white' : ''}`}
                    onClick={() => handlePlatformClick(platform.url)}
                    disabled={!platform.inStock}
                  >
                    Visit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price Alert Modal */}
      {showPriceAlert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <PriceAlert 
            product={product} 
            onClose={() => setShowPriceAlert(false)} 
          />
        </div>
      )}
    </>
  );
};

export default ProductCard;
