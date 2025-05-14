
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { Product } from '@/components/ProductCard';

interface PriceAlertProps {
  product: Product;
  onClose: () => void;
}

const PriceAlert: React.FC<PriceAlertProps> = ({ product, onClose }) => {
  const [email, setEmail] = useState('');
  const [targetPrice, setTargetPrice] = useState('');
  
  const lowestPrice = Math.min(
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.includes('@') || !email.includes('.')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    // Validate target price
    const targetPriceNum = Number(targetPrice);
    if (isNaN(targetPriceNum) || targetPriceNum <= 0) {
      toast.error('Please enter a valid price');
      return;
    }
    
    // Success - in a real app, this would save to a database
    toast.success('Price alert set successfully! We will notify you when the price drops to your target.');
    onClose();
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl">Set Price Alert</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden shrink-0">
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
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-muted-foreground">Current lowest: {formatPrice(lowestPrice)}</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email Address</label>
            <Input 
              id="email"
              type="email" 
              placeholder="your@email.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="targetPrice" className="text-sm font-medium">Alert me when price falls to</label>
            <Input
              id="targetPrice"
              type="number" 
              placeholder="Target price" 
              value={targetPrice} 
              onChange={(e) => setTargetPrice(e.target.value)} 
              required
            />
            <p className="text-xs text-muted-foreground">
              Recommended: Set price at least 5-10% below current price
            </p>
          </div>
          
          <div className="flex gap-2 pt-2">
            <Button type="submit" className="bg-guru-orange hover:bg-guru-orange-dark flex-1">
              Set Alert
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default PriceAlert;
