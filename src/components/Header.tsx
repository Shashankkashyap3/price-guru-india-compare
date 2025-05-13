
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  isHomepage?: boolean;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  handleSearch?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  isHomepage = false, 
  searchQuery = '', 
  setSearchQuery = () => {}, 
  handleSearch = () => {}
}) => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <header className="w-full bg-guru-blue py-4 shadow-md">
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center justify-between">
        <div 
          className="flex items-center cursor-pointer mb-4 md:mb-0" 
          onClick={goHome}
        >
          <div className="w-10 h-10 rounded-full bg-guru-orange flex items-center justify-center mr-2">
            <span className="text-white font-bold text-lg">PG</span>
          </div>
          <h1 className="text-white text-xl md:text-2xl font-bold">Price Guru</h1>
        </div>
        
        <form 
          onSubmit={onSearchSubmit} 
          className={`flex w-full ${isHomepage ? 'md:w-1/2 mx-auto' : 'md:w-2/3 lg:w-1/2'}`}
        >
          <Input
            type="text"
            placeholder="Search for electronics (e.g., iPhone 15, Samsung TV)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-r-none w-full"
          />
          <Button 
            type="submit" 
            className="bg-guru-orange hover:bg-guru-orange-dark rounded-l-none"
          >
            Search
          </Button>
        </form>
      </div>
    </header>
  );
};

export default Header;
