
import React from 'react';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    icon: '📱',
    description: 'Latest phones from Apple, Samsung, Google Pixel'
  },
  {
    id: 'laptops',
    name: 'Laptops',
    icon: '💻',
    description: 'Premium laptops from Lenovo, HP, Dell'
  },
  {
    id: 'tvs',
    name: 'TVs',
    icon: '📺',
    description: 'Smart TVs from Samsung, Sony, LG'
  },
  {
    id: 'headphones',
    name: 'Headphones',
    icon: '🎧',
    description: 'Audio from boAt, Sony, JBL'
  },
  {
    id: 'smartwatches',
    name: 'Smartwatches',
    icon: '⌚',
    description: 'Wearables from Samsung, Apple, boAt'
  },
  {
    id: 'cameras',
    name: 'Cameras',
    icon: '📷',
    description: 'Cameras from Nikon, Canon, Sony'
  }
];

interface CategorySectionProps {
  setSearchQuery: (query: string) => void;
  handleSearch: () => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ setSearchQuery, handleSearch }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    setSearchQuery(category);
    handleSearch();
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Popular Categories</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="cursor-pointer hover:shadow-lg transition-shadow duration-300 overflow-hidden border-t-2 border-guru-orange/40 hover:border-guru-orange"
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="p-6 flex items-center">
                <div className="text-4xl mr-4">{category.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
