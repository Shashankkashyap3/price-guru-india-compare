
import { Product } from '../components/ProductCard';

const amazonLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png';
const flipkartLogo = 'https://logos-download.com/wp-content/uploads/2016/09/Flipkart_logo.png';
const cromaLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Croma_Logo.png/1200px-Croma_Logo.png';
const relianceLogo = 'https://play-lh.googleusercontent.com/Hkl5iVI5q3r2_SNHREw_A62zYMd3R-Gmr1TzSyukBFgV-gpzKR3IV-5YT1jkNrGzKn8=w600-h300-pc0xffffff-pd';

export const mockProducts: Product[] = [
  // SMARTPHONES
  // Apple
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
  // Samsung
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
  // Google Pixel
  {
    id: '3',
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
  
  // LAPTOPS
  // Apple
  {
    id: '4',
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
  // HP
  {
    id: '5',
    name: 'HP Spectre x360 14 (2024) - Intel Core Ultra 7',
    image: 'https://m.media-amazon.com/images/I/71bgVzV3OdL._SL1500_.jpg',
    description: 'Premium convertible laptop with 2.8K OLED display, AI features and up to 13 hours of battery life.',
    brand: 'HP',
    category: 'Laptops',
    platforms: [
      {
        name: 'Amazon.in',
        price: 169990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/HP-Touchscreen-Graphics-Fingerprint-14-ef0053TU/dp/B0CJHZX4K1/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 165990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/hp-spectre-x360-intel-evo-core-ultra-7-155u-16-gb-1-tb-ssd-windows-11-home-16-gb-graphics-14-ef0053tu-2-1-laptop/p/itm3bd60d3cddab0',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 171990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/hp-spectre-x360-intel-core-ultra-7-processor-14-inch-wuxga-convertible-laptop-16gb-1tb-ssd-intel-arc-graphics-windows-11-home-ms-office-21-nightfall-black-14-ef0053tu-/p/279217',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 168990,
        currency: 'INR',
        inStock: false,
        url: 'https://www.reliancedigital.in/hp-spectre-x360-14-ef0053tu-2-in-1-laptop-intel-core-ultra-7-155u-16gb-1tb-ssd-intel-arc-graphics-14-inch-35-6-cm-wuxga-touchscreen-windows-11-mso-21-nightfall-black-1-39-kg/p/493841825',
        logo: relianceLogo
      }
    ]
  },
  // Dell
  {
    id: '6',
    name: 'Dell XPS 13 Plus 9320 (2023) - Intel Core i7-1360P',
    image: 'https://m.media-amazon.com/images/I/61IF2nJKPAL._SL1080_.jpg',
    description: 'Ultrabook with stunning InfinityEdge 3.5K OLED touch display, capacitive function row and zero-lattice keyboard.',
    brand: 'Dell',
    category: 'Laptops',
    platforms: [
      {
        name: 'Amazon.in',
        price: 179990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/Dell-Touchscreen-i7-1360P-Graphics-D560812WIN9S/dp/B0C8JRPPH3/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 174990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/dell-xps-plus-core-i7-13th-gen-16-gb-1-tb-ssd-windows-11-home-13-9320-thin-light-laptop/p/itm7ef5e7540f47a',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 176990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/dell-xps-13-plus-9320-intel-core-i7-13th-gen-13-4-inch-wuxga-laptop-16gb-1tb-ssd-intel-iris-xe-graphics-windows-11-home-ms-office-21-platinum-silver-d560812win9s-/p/268743',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 183990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/dell-xps-13-plus-9320-laptop-13th-gen-intel-core-i7-1360p-16gb-1tb-ssd-intel-iris-xe-graphics-13-4-inch-34-cm-wuxga-ips-display-windows-11-mso-21-platinum-silver-1-24-kg/p/493177822',
        logo: relianceLogo
      }
    ]
  },
  
  // TVs
  // Samsung
  {
    id: '7',
    name: 'Samsung Neo QLED QN90C 65" 4K Smart TV (2023)',
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
  // Sony
  {
    id: '8',
    name: 'Sony Bravia XR A80L 65" 4K OLED Google TV (2023)',
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
  },
  // LG
  {
    id: '9',
    name: 'LG C3 65" 4K OLED evo Smart TV (2023)',
    image: 'https://m.media-amazon.com/images/I/71EymlizFTL._SL1500_.jpg',
    description: 'Self-lit OLED pixels with α9 AI Processor 4K Gen6 and virtual 9.1.2 surround sound.',
    brand: 'LG',
    category: 'TVs',
    platforms: [
      {
        name: 'Amazon.in',
        price: 174999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/LG-inches-Smart-OLED65C3PSC-Processor/dp/B0BXL9QBLT/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 171990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/lg-oled-evo-164-cm-65-inch-oled-ultra-hd-4k-smart-tv-2023-edition/p/itm8f844a62c5e83',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 176990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/lg-oled65c3psc-65-inch-oled-evo-4k-ultra-hd-smart-webos-tv-2023-/p/268338',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 179990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/lg-oled65c3psc-65-inch-oled-evo-4k-smart-tv-2023-model/p/493177829',
        logo: relianceLogo
      }
    ]
  },
  
  // HEADPHONES
  // boAt
  {
    id: '10',
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
  // Sony
  {
    id: '11',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    image: 'https://m.media-amazon.com/images/I/61+btxzpfDL._SL1500_.jpg',
    description: 'Industry-leading noise cancellation with 8 microphones, 30-hour battery and crystal clear calls.',
    brand: 'Sony',
    category: 'Headphones',
    platforms: [
      {
        name: 'Amazon.in',
        price: 29990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/Sony-WH-1000XM5-Cancelling-Headphones-Multi-Point/dp/B0B1G5GKPQ/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 27990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/sony-wh-1000xm5-bluetooth-headset/p/itmebeeb9fc1edd7',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 28990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/sony-wh-1000xm5-bluetooth-headphone-with-mic-black-/p/250764',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 29490,
        currency: 'INR',
        inStock: false,
        url: 'https://www.reliancedigital.in/sony-wh-1000xm5-over-the-ear-bluetooth-headphones-with-noise-cancellation-black/p/492799197',
        logo: relianceLogo
      }
    ]
  },
  // JBL
  {
    id: '12',
    name: 'JBL Tour One M2 Noise Cancelling Headphones',
    image: 'https://m.media-amazon.com/images/I/61SaqrGiXdL._SL1500_.jpg',
    description: 'Hi-res certified sound with adaptive noise cancellation and spatial audio.',
    brand: 'JBL',
    category: 'Headphones',
    platforms: [
      {
        name: 'Amazon.in',
        price: 24999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/JBL-Tour-Cancelling-Headphones-Charging/dp/B0BS6XW5DC/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 22990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/jbl-tour-one-m2-50-hrs-playtime-true-adaptive-nc-bluetooth-headset/p/itm9ca2725ad7881',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 23990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/jbl-tour-one-m2-bluetooth-headphone-with-mic-black-/p/267722',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 24490,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/jbl-tour-one-m2-over-ear-anc-headphone-black/p/493177831',
        logo: relianceLogo
      }
    ]
  },
  
  // SMARTWATCHES
  // Samsung
  {
    id: '13',
    name: 'Samsung Galaxy Watch 6 Classic (47mm, Bluetooth)',
    image: 'https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-watch6-classic-r945-469025-sm-r945fzsains-536818056?$650_519_PNG$',
    description: 'Premium smartwatch with rotating bezel, ECG, sleep tracking and BioActive sensor.',
    brand: 'Samsung',
    category: 'Smartwatches',
    platforms: [
      {
        name: 'Amazon.in',
        price: 36999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/Samsung-Bluetooth-Calling-Tracking-Monitoring/dp/B0C87SP2SL/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 34999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/samsung-galaxy-watch6-classic-bluetooth-calling-ecg-smart-watch/p/itm47b0e55fceae1',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 35990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/samsung-galaxy-watch6-classic-smart-watch-for-android-47mm-silver-sm-r945fzsains/p/272185',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 36490,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/samsung-galaxy-watch6-classic-47-mm-super-amoled-display-bluetooth-only-smart-watch-silver-sm-r945fzsains/p/493177833',
        logo: relianceLogo
      }
    ]
  },
  // Apple
  {
    id: '14',
    name: 'Apple Watch Ultra 2 GPS + Cellular (49mm)',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3_VW_34FR+watch-49-titanium-ultra2_VW_34FR_WF_CO+watch-face-49-ocean-ultra2_VW_34FR_WF_CO?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1694507905569',
    description: 'Most rugged Apple Watch with titanium case, action button, and up to 36 hours of battery life.',
    brand: 'Apple',
    category: 'Smartwatches',
    platforms: [
      {
        name: 'Amazon.in',
        price: 89900,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/Apple-Watch-Ultra-Cellular-Titanium/dp/B0CHX1FXVJ/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 87900,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/apple-watch-ultra-2-gps-cellular-49-mm-titanium-case-alpine-loop-smartwatch/p/itm5c6e9b2200f90',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 89900,
        currency: 'INR',
        inStock: false,
        url: 'https://www.croma.com/apple-watch-ultra-2-gps-cellular-49mm-titanium-case-with-white-ocean-band-mqg13hn-a-/p/275198',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 88990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/apple-watch-ultra-2-gps-cellular-49mm-titanium-case-with-blue-alpine-loop-small-mqfd3hn-a/p/493177838',
        logo: relianceLogo
      }
    ]
  },
  // boAt
  {
    id: '15',
    name: 'boAt Wave Connect Touch Smart Watch',
    image: 'https://m.media-amazon.com/images/I/61RiIj5TlXL._SL1500_.jpg',
    description: '1.69" HD display with health monitoring, 60+ sports modes and 7-day battery life.',
    brand: 'boAt',
    category: 'Smartwatches',
    platforms: [
      {
        name: 'Amazon.in',
        price: 2999,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/boAt-Wave-Connect-Bluetooth-Smartwatch/dp/B0BHKB4RPW/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 2499,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/boat-wave-connect-bluetooth-calling-smartwatch/p/itm1a0f1fb6bcbdf',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 2899,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/boat-wave-connect-touch-smartwatch-with-bluetooth-calling-black-/p/266687',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 2799,
        currency: 'INR',
        inStock: false,
        url: 'https://www.reliancedigital.in/boat-wave-connect-touch-bluetooth-calling-smartwatch-with-hd-display-metallic-black/p/493177840',
        logo: relianceLogo
      }
    ]
  },
  
  // CAMERAS
  // Nikon
  {
    id: '16',
    name: 'Nikon Z8 Mirrorless Camera with 24-120mm Lens',
    image: 'https://m.media-amazon.com/images/I/71Y7Q4vEpzL._SL1500_.jpg',
    description: '45.7MP full-frame sensor with 8K video recording capability and advanced AF system.',
    brand: 'Nikon',
    category: 'Cameras',
    platforms: [
      {
        name: 'Amazon.in',
        price: 349990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/Nikon-Z-Mirrorless-Camera-24-120mm/dp/B0C5HK6G3X/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 348990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/nikon-z8-mirrorless-camera-body-24-120-mm-lens/p/itm9bb33d3233019',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 349990,
        currency: 'INR',
        inStock: false,
        url: 'https://www.croma.com/nikon-z8-45-7-mp-mirrorless-camera-with-24-120-mm-lens-/p/270238',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 347990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/nikon-z8-mirrorless-camera-with-nikkor-z-24-120mm-f4-s-lens/p/493177845',
        logo: relianceLogo
      }
    ]
  },
  // Canon
  {
    id: '17',
    name: 'Canon EOS R5 Mirrorless Camera with RF 24-105mm Lens',
    image: 'https://m.media-amazon.com/images/I/71LF+9pY3LL._SL1500_.jpg',
    description: '45MP full-frame sensor with 8K RAW video recording and in-body stabilization.',
    brand: 'Canon',
    category: 'Cameras',
    platforms: [
      {
        name: 'Amazon.in',
        price: 325995,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/Canon-EOS-Mirrorless-Camera-RF24-105mm/dp/B08CDSQPZN/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 329990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/canon-eos-r5-mirrorless-camera-rf-24-105-mm-f4l-is-usm/p/itm6a7f0cbfea22e',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 320990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/canon-eos-r5-45-mp-mirrorless-camera-with-24-105-mm-lens-black/p/270250',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 327990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.reliancedigital.in/canon-eos-r5-mirrorless-camera-with-rf-24-105mm-f-4l-is-usm-lens/p/491946694',
        logo: relianceLogo
      }
    ]
  },
  // Sony
  {
    id: '18',
    name: 'Sony Alpha a7 IV Mirrorless Camera with 28-70mm Lens',
    image: 'https://m.media-amazon.com/images/I/71+P+IrOYCL._SL1500_.jpg',
    description: '33MP full-frame sensor with 4K 60p video and improved AF performance.',
    brand: 'Sony',
    category: 'Cameras',
    platforms: [
      {
        name: 'Amazon.in',
        price: 259990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.amazon.in/Sony-Alpha-ILCE-7M4K-Full-Frame-Interchangeable/dp/B09JZS34CG/',
        logo: amazonLogo
      },
      {
        name: 'Flipkart',
        price: 256990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.flipkart.com/sony-alpha-full-frame-ilce-7m4-24-6-mp-mirrorless-camera/p/itm59d9f87d902b7',
        logo: flipkartLogo
      },
      {
        name: 'Croma',
        price: 257990,
        currency: 'INR',
        inStock: true,
        url: 'https://www.croma.com/sony-alpha-ilce-7m4k-33-0-mp-mirrorless-camera-with-28-70-mm-lens-black/p/246928',
        logo: cromaLogo
      },
      {
        name: 'Reliance Digital',
        price: 259990,
        currency: 'INR',
        inStock: false,
        url: 'https://www.reliancedigital.in/sony-alpha-ilce-7m4-mirrorless-camera-with-sel2870-lens/p/491946705',
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
