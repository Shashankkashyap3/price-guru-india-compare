
import { Product } from '../components/ProductCard';

const amazonLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png';
const flipkartLogo = 'https://logos-download.com/wp-content/uploads/2016/09/Flipkart_logo.png';
const cromaLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Croma_Logo.png/1200px-Croma_Logo.png';
const relianceLogo = 'https://play-lh.googleusercontent.com/Hkl5iVI5q3r2_SNHREw_A62zYMd3R-Gmr1TzSyukBFgV-gpzKR3IV-5YT1jkNrGzKn8=w600-h300-pc0xffffff-pd';

export const mockProducts: Product[] = [
  // Apple Phones
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
        url: 'https://www.amazon.in/Apple-iPhone-Pro-Max-256GB/dp/B0CHX1W1XY/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 158900,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/apple-iphone-15-pro-max-natural-titanium-256-gb/p/itm4a428daceacb4',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 159900,
        currency: 'INR',
        inStock: false,
        url: 'https://www.croma.com/apple-iphone-15-pro-max-256gb-natural-titanium-/p/268762',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 157900,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/apple-iphone-15-pro-max-256-gb-natural-titanium/p/493177709',
        logo: relianceLogo
      }
    ]
  },
  {
    id: '2',
    name: 'iPhone 14 128GB - Midnight',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-1inch-midnight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661026579503',
    description: 'A total powerhouse with A15 Bionic chip, amazing battery life, and advanced camera system.',
    brand: 'Apple',
    category: 'Smartphones',
    platforms: [
      {
        name: 'Amazon.in',
        price: 58999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/Apple-iPhone-14-128GB-Midnight/dp/B0BDJ7P6NG/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 57999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/apple-iphone-14-midnight-128-gb/p/itm9e6293c322a84',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 59900,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/apple-iphone-14-128gb-midnight-/p/261941',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 58490,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/apple-iphone-14-128-gb-midnight/p/493177333',
        logo: relianceLogo
      }
    ]
  },
  
  // Samsung Phones
  {
    id: '3',
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
        url: 'https://www.amazon.in/Samsung-Galaxy-Ultra-Titanium-Storage/dp/B0CQPGFDPD/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 134999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/samsung-galaxy-s24-ultra-titanium-gray-512-gb/p/itme0576eb7d94fc',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 138999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/samsung-galaxy-s24-ultra-5g-512gb-rom-12gb-ram-sm-s928-titanium-gray-/p/272340',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 136999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/samsung-galaxy-s24-ultra-5g-512-gb-12-gb-ram-titanium-gray-mobile-phone/p/493841707',
        logo: relianceLogo
      }
    ]
  },
  {
    id: '4',
    name: 'Samsung Galaxy S23 FE 5G 128GB - Graphite',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-s711blgains/gallery/in-galaxy-s23-fe-sm-s711-sm-s711blgains-537358087?$650_519_PNG$',
    description: 'Pro-grade camera and epic performance with Galaxy AI features in a Fan Edition device.',
    brand: 'Samsung',
    category: 'Smartphones',
    platforms: [
      {
        name: 'Amazon.in',
        price: 39999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/Samsung-Galaxy-Graphite-Storage-Without/dp/B0CGTXRH1M/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 38999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/samsung-galaxy-s23-fe-graphite-128-gb/p/itm0dfad0e6ddc3e',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 39999,
        currency: 'INR',
        inStock: false,
        url: 'https://www.croma.com/samsung-galaxy-s23-fe-5g-128gb-rom-8gb-ram-sm-s711-graphite-/p/268764',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 38490,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/samsung-galaxy-s23-fe-5g-128-gb-8-gb-ram-graphite-mobile-phone/p/493177790',
        logo: relianceLogo
      }
    ]
  },
  
  // Google Pixel Phones
  {
    id: '5',
    name: 'Google Pixel 8 Pro 256GB - Obsidian',
    image: 'https://lh3.googleusercontent.com/-8CPs3i-9iMNyQUIB8GrbkQnw33ks0l0hLg6xHCZEcYnRMI_7EOLl0OmNml-xAJGbQ4lNYrXt3ZtLUpA-RQVeF-FBWz5KeTC3-_D6rQ=rw-e365-w1050',
    description: 'Experience the most powerful Pixel yet with Google Tensor G3 and advanced AI features.',
    brand: 'Google',
    category: 'Smartphones',
    platforms: [
      {
        name: 'Amazon.in',
        price: 92999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/Google-Pixel-Pro-Obsidian-256GB/dp/B0CGTH9JS4/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 89999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/google-pixel-8-pro-obsidian-256-gb/p/itm16a10c24f7dd3',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 90999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/google-pixel-8-pro-5g-256gb-obsidian/p/276883',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 93999,
        currency: 'INR',
        inStock: false,
        url: 'https://www.reliancedigital.in/google-pixel-8-pro-256-gb-12-gb-ram-obsidian-black-mobile-phone/p/493177703',
        logo: relianceLogo
      }
    ]
  },
  
  // Apple Laptops
  {
    id: '6',
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
        url: 'https://www.amazon.in/Apple-MacBook-Laptop-15%E2%80%B3-chip/dp/B0C9HY6DBZ/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 159990,
        currency: 'INR',
        inStock: false,
        url: 'https://www.flipkart.com/apple-macbook-air-m3-16-gb-512-gb-ssd-mac-os-sonoma-mxuz3hn-a/p/itm6c5b00cb91ea7',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 156900,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/apple-2024-macbook-air-m3-chip-16gb-unified-memory-512gb-ssd-15-3-inch-ips-liquid-retina-display-mac-os-sonoma-mxun3hn-a-midnight-/p/281933',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 162900,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/apple-macbook-air-mxuz3hn-a-thin-and-light-laptop-15-3-inch-liquid-retina-display-apple-m3-chip-16gb-ram-512gb-ssd-mac-os-midnight/p/493842303',
        logo: relianceLogo
      }
    ]
  },
  
  // Lenovo Laptops
  {
    id: '7',
    name: 'Lenovo ThinkPad X1 Carbon Gen 11 (Intel Core i7, 32GB RAM)',
    image: 'https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MTc1NDg3fGltYWdlL3BuZ3xoZGUvaDNjLzE1MzQzNjA5MTAyMzY2LnBuZ3w5NGQxZWYxOGJjNDlkMWY3NzI0NDA2NWU1Y2UyMmYzODkwYWMzMWVlYWJhOGRhZWEzYzE1YjRiMzFhYzgzMTcz/lenovo-laptop-thinkpad-x1-carbon-gen-11-subseries-gallery-1.png',
    description: 'Ultimate business laptop with 11th-gen Intel Core i7, enterprise-grade security features and all-day battery life.',
    brand: 'Lenovo',
    category: 'Laptops',
    platforms: [
      {
        name: 'Amazon.in',
        price: 179990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/Lenovo-ThinkPad-Carbon-11th-I7-1355U/dp/B0CS63GC5J/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 181999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/lenovo-core-i7-13th-gen-32-gb-1-tb-ssd-windows-11-home-thinkpad-x1-carbon-gen-11-thin-light-laptop/p/itm8fb4ee7e87104',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 177990,
        currency: 'INR',
        inStock: false,
        url: 'https://www.croma.com/lenovo-thinkpad-x1-carbon-intel-core-i7-13th-gen-14-inch-wuxga-ips-laptop-32gb-1tb-ssd-iris-xe-graphics-windows-11-home-ms-office-21-black-21hqcto1ww-/p/270140',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 178999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/lenovo-thinkpad-x1-carbon-gen-11-intel-core-i7-1355u-13th-gen-14-inch-wuxga-32gb-ram-1tb-ssd-windows-11-iris-xe-graphics-black-3-years-warranty-21hqcto1ww/p/493177806',
        logo: relianceLogo
      }
    ]
  },
  
  // Boat Headphones
  {
    id: '8',
    name: 'boAt Rockerz 550 Bluetooth Headphone',
    image: 'https://m.media-amazon.com/images/I/61-KQZ-9q3L._SL1500_.jpg',
    description: 'Wireless over-ear headphones with 50mm drivers, 20-hour battery life and ergonomic design.',
    brand: 'boAt',
    category: 'Headphones',
    platforms: [
      {
        name: 'Amazon.in',
        price: 1999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/boAt-Rockerz-550-Headphone-Aesthetics/dp/B0856HNMR7/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 1799,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/boat-rockerz-550-bluetooth-headset/p/itmd3a7f63fca2ec',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 1990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/boat-rockerz-550-bluetooth-headphones-with-mic-black-/p/233515',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 1899,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/boat-rockerz-550-over-ear-wireless-headphone-with-mic-black/p/492166442',
        logo: relianceLogo
      }
    ]
  },
  
  // Samsung TVs
  {
    id: '9',
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
        url: 'https://www.amazon.in/Samsung-inches-QN90C-Ultra-QA65QN90CAKLXL/dp/B0BVRDMLC4/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 181990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/samsung-neo-qled-163-cm-65-inch-ultra-hd-4k-smart-tv-gaming-2023-edition/p/itm4def54ac4e5ec',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 176990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/samsung-qn90c-65-inch-4k-ultra-hd-neo-qled-smart-tv-qa65qn90caklxl-2023-/p/270240',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 182990,
        currency: 'INR',
        inStock: false,
        url: 'https://www.reliancedigital.in/samsung-163-cm-65-inch-qled-4k-ultra-hd-smart-tv-2023-edition-qa65qn90caklxl/p/493177811',
        logo: relianceLogo
      }
    ]
  },
  
  // Sony TVs
  {
    id: '10',
    name: 'Sony Bravia XR A80L 65" 4K OLED Google TV',
    image: 'https://m.media-amazon.com/images/I/81CjbjUMTDL._SL1500_.jpg',
    description: 'Breathtaking OLED contrast with Cognitive Processor XR and premium acoustic surface audio.',
    brand: 'Sony',
    category: 'TVs',
    platforms: [
      {
        name: 'Amazon.in',
        price: 249990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/Sony-Bravia-inches-Google-XR-65A80L/dp/B0C73YV4NL/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 245990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/sony-bravia-65-inches-oled-ultra-hd-hdr-smart-tv-xr-65a80l/p/itm73f64cee65df0',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 248990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/sony-xr-65a80l-65-inch-oled-4k-ultra-hd-smart-google-tv-2023-model-/p/267713',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 247990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/sony-bravia-xr-65a80l-164-cm-65-inch-oled-4k-ultra-hd-smart-google-tv-2023-launch/p/493177812',
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
