
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-guru-blue-dark text-white py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-guru-orange flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">PG</span>
              </div>
              <h2 className="text-lg font-bold">Price Guru</h2>
            </div>
            <p className="text-sm text-gray-300 mt-1">Find the best deals across India</p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Platforms</h3>
              <ul className="space-y-1">
                <li>Amazon.in</li>
                <li>Flipkart</li>
                <li>Croma</li>
                <li>Reliance Digital</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              <ul className="space-y-1">
                <li>Smartphones</li>
                <li>Laptops</li>
                <li>TV & Appliances</li>
                <li>Audio & Headphones</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700">
          <p className="text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Price Guru. All prices and information are for comparison purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
