
import { Product } from '../components/ProductCard';

const amazonLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png';
const flipkartLogo = 'https://logos-download.com/wp-content/uploads/2016/09/Flipkart_logo.png';
const cromaLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Croma_Logo.png/1200px-Croma_Logo.png';
const relianceLogo = 'https://play-lh.googleusercontent.com/Hkl5iVI5q3r2_SNHREw_A62zYMd3R-Gmr1TzSyukBFgV-gpzKR3IV-5YT1jkNrGzKn8=w600-h300-pc0xffffff-pd';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB - Natural Titanium',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009279096',
    description: 'The most advanced iPhone ever with A17 Pro chip, 48MP camera system, and titanium design.',
    brand: 'Apple',
    category: 'Smartphones',
    platforms: [
      {
        name: 'Amazon.in',
        price: 156900,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 158900,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 159900,
        currency: 'INR',
        inStock: false,
        url: 'https://www.croma.com',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 157900,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in',
        logo: relianceLogo
      }
    ]
  },
  {
    id: '2',
    name: 'Samsung Galaxy S24 Ultra 512GB - Titanium Gray',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s928bzggins/gallery/in-galaxy-s24-ultra-sm-s928-sm-s928bzggins-536532593?$650_519_PNG$',
    description: 'The ultimate Galaxy experience with S Pen, 200MP camera and advanced AI features.',
    brand: 'Samsung',
    category: 'Smartphones',
    platforms: [
      {
        name: 'Amazon.in',
        price: 139999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 134999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 138999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 136999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in',
        logo: relianceLogo
      }
    ]
  },
  {
    id: '3',
    name: 'MacBook Air M3 (15-inch, 16GB RAM, 512GB SSD)',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-15-midnight-config-20230605?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1683842409554',
    description: 'Supercharged by M3 chip with incredible battery life and stunning Retina display.',
    brand: 'Apple',
    category: 'Laptops',
    platforms: [
      {
        name: 'Amazon.in',
        price: 158990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 159990,
        currency: 'INR',
        inStock: false,
        url: 'https://www.flipkart.com',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 156900,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 162900,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in',
        logo: relianceLogo
      }
    ]
  },
  {
    id: '4',
    name: 'Sony PlayStation 5 Slim Console (Disc Version)',
    image: 'https://m.media-amazon.com/images/I/51eOztNdCkL._SL1496_.jpg',
    description: 'Next-gen gaming with ultra-high speed SSD, ray tracing, 4K gaming and up to 120fps.',
    brand: 'Sony',
    category: 'Gaming',
    platforms: [
      {
        name: 'Amazon.in',
        price: 53990,
        currency: 'INR',
        inStock: false,
        url: 'https://www.amazon.in',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 52990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 54990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 53499,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in',
        logo: relianceLogo
      }
    ]
  },
  {
    id: '5',
    name: 'Samsung Neo QLED 4K 65" QN90C Smart TV (2023)',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/qa65qn90caklxl/gallery/in-qled-qn90c-qa65qn90caklxl-534728276?$650_519_PNG$',
    description: 'Quantum Mini LED technology for incredible contrast and brightness with neural processor.',
    brand: 'Samsung',
    category: 'TVs',
    platforms: [
      {
        name: 'Amazon.in',
        price: 179990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 181990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 176990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 182990,
        currency: 'INR',
        inStock: false,
        url: 'https://www.reliancedigital.in',
        logo: relianceLogo
      }
    ]
  },
  {
    id: '6',
    name: 'OnePlus 12 16GB RAM 512GB (Flowy Emerald)',
    image: 'https://m.media-amazon.com/images/I/71fhCZxistL._SX679_.jpg',
    description: 'Flagship smartphone with Snapdragon 8 Gen 3, 50MP Hasselblad camera and 100W charging.',
    brand: 'OnePlus',
    category: 'Smartphones',
    platforms: [
      {
        name: 'Amazon.in',
        price: 59999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 57999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 59999,
        currency: 'INR',
        inStock: false,
        url: 'https://www.croma.com',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 58999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in',
        logo: relianceLogo
      }
    ]
  }
];

export const searchProducts = (query: string): Product[] => {
  if (!query) return [];
  
  const lowerCaseQuery = query.toLowerCase();
  
  return mockProducts.filter(product => {
    return (
      product.name.toLowerCase().includes(lowerCaseQuery) ||
      product.brand.toLowerCase().includes(lowerCaseQuery) ||
      product.category.toLowerCase().includes(lowerCaseQuery) ||
      product.description.toLowerCase().includes(lowerCaseQuery)
    );
  });
};
