
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Product } from '@/components/ProductCard';

interface ProductComparisonProps {
  products: Product[];
  onClose: () => void;
}

const ProductComparison: React.FC<ProductComparisonProps> = ({ products, onClose }) => {
  if (products.length === 0) {
    return null;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  // Find the cheapest price for each product
  const getLowestPrice = (product: Product) => {
    return Math.min(
      ...product.platforms
        .filter(platform => platform.inStock)
        .map(platform => platform.price)
    );
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between">
        <h2 className="text-xl font-bold">Product Comparison</h2>
        <Button variant="ghost" onClick={onClose}>Close</Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Feature</TableHead>
                {products.map(product => (
                  <TableHead key={product.id}>
                    <div className="w-32 md:w-44 text-center">{product.name}</div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Image</TableCell>
                {products.map(product => (
                  <TableCell key={`${product.id}-image`} className="text-center">
                    <div className="w-24 h-24 mx-auto">
                      <AspectRatio ratio={1/1}>
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain rounded-md" 
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/placeholder.svg";
                          }}
                        />
                      </AspectRatio>
                    </div>
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Brand</TableCell>
                {products.map(product => (
                  <TableCell key={`${product.id}-brand`} className="text-center">{product.brand}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Category</TableCell>
                {products.map(product => (
                  <TableCell key={`${product.id}-category`} className="text-center">{product.category}</TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Best Price</TableCell>
                {products.map(product => (
                  <TableCell key={`${product.id}-price`} className="text-center font-bold text-guru-orange">
                    {formatPrice(getLowestPrice(product))}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Platforms</TableCell>
                {products.map(product => (
                  <TableCell key={`${product.id}-platforms`} className="text-center">
                    {product.platforms.length}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Description</TableCell>
                {products.map(product => (
                  <TableCell key={`${product.id}-desc`} className="text-sm">
                    {product.description}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Actions</TableCell>
                {products.map(product => (
                  <TableCell key={`${product.id}-actions`} className="text-center">
                    <Button 
                      variant="default" 
                      className="bg-guru-orange hover:bg-guru-orange-dark w-full"
                      onClick={() => {
                        // Find the platform with the lowest price
                        const cheapestPlatform = product.platforms
                          .filter(p => p.inStock)
                          .reduce((prev, curr) => 
                            prev.price < curr.price ? prev : curr
                          );
                        
                        if (cheapestPlatform) {
                          window.open(cheapestPlatform.url, '_blank', 'noopener,noreferrer');
                        }
                      }}
                    >
                      Buy Now
                    </Button>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductComparison;
