import { MenuItem, ComboItem, Review, FaqItem } from '../types';

export const STORE_PHONE = '7508662008';
export const STORE_PHONE_FORMATTED = '+91 75086 62008';
export const STORE_WHATSAPP = '917508662008';
export const STORE_LOCATION = 'Main Market, Food Street, Near Youth Hub';
export const STORE_TIMINGS = '11:00 AM – 11:00 PM (Daily)';

export const MENU_ITEMS: MenuItem[] = [
  // --- BURGERS ---
  {
    id: 'b-aloo-tikki',
    name: 'Aloo Tikki Burger',
    category: 'burgers',
    description: 'Crispy seasoned spiced potato patty, mint mayo, crunchy onions, and fresh tomato slice in toasted sesame bun.',
    price: 30,
    image: 'https://images.pexels.com/photos/38896819/pexels-photo-38896819.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 1,
    tag: 'All-Time Favorite'
  },
  {
    id: 'b-popular',
    name: 'Popular Burger',
    category: 'burgers',
    description: 'Our signature secret sauce patty with double crunch slaw and house spices. An unbeatable street classic.',
    price: 40,
    image: 'https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 1,
    tag: 'Bestseller'
  },
  {
    id: 'b-herbi',
    name: 'Herbi Burger',
    category: 'burgers',
    description: 'Herb-infused garden patty loaded with green crispies, secret herb sauce, and mild cheddar undertones.',
    price: 50,
    image: 'https://images.pexels.com/photos/13163534/pexels-photo-13163534.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 1
  },
  {
    id: 'b-tandoori',
    name: 'Tandoori Burger',
    category: 'burgers',
    description: 'Smoky tandoori marinated crisp patty smothered in rich tandoori mayo, chargrilled capsicum, and onions.',
    price: 50,
    image: 'https://images.pexels.com/photos/10701942/pexels-photo-10701942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    isSpicy: true,
    spiceLevel: 2,
    tag: 'Smoky & Tangy'
  },
  {
    id: 'b-corn-salad',
    name: 'Corn Salad Burger',
    category: 'burgers',
    description: 'Juicy golden sweet corn, freshly tossed herb salad, creamy dressing, and a crunchy golden patty.',
    price: 60,
    image: 'https://images.pexels.com/photos/38896825/pexels-photo-38896825.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 1
  },
  {
    id: 'b-do-tikki',
    name: 'Do Tikki Burger',
    category: 'burgers',
    description: 'Double the crunch! Two thick spiced aloo patties stacked high with double layer sauce and crunchy greens.',
    price: 70,
    image: 'https://images.pexels.com/photos/20051316/pexels-photo-20051316.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 2,
    tag: 'Double Decker'
  },
  {
    id: 'b-manchurian',
    name: 'Manchurian Burger',
    category: 'burgers',
    description: 'Indo-Chinese street fusion! Savory veg manchurian ball patty tossed in fiery ginger-garlic sauce inside a soft bun.',
    price: 80,
    image: 'https://images.pexels.com/photos/13163534/pexels-photo-13163534.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isSpicy: true,
    spiceLevel: 2,
    tag: 'Fusion Special'
  },
  {
    id: 'b-grill-cheese',
    name: 'Grill Cheese Burger',
    category: 'burgers',
    description: 'Melted cheese slice grilled to perfection over a crispy vegetable patty with melted cheese drizzle.',
    price: 90,
    image: 'https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 1,
    tag: 'Super Cheesy'
  },
  {
    id: 'b-paneer-patty',
    name: 'Paneer Patty Burger',
    category: 'burgers',
    description: 'Thick marinated fresh cottage cheese slab coated in golden crunch, layered with premium garlic aioli and lettuce.',
    price: 100,
    image: 'https://images.pexels.com/photos/10701942/pexels-photo-10701942.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 1,
    tag: 'Chef Signature'
  },

  // --- NOODLES (Half / Full) ---
  {
    id: 'n-veg',
    name: 'Veg Noodle',
    category: 'noodles',
    description: 'Traditional wok-tossed chowmein with shredded cabbage, carrots, bell peppers, and savoury soy glaze.',
    price: 40,
    hasPortions: true,
    halfPrice: 40,
    fullPrice: 70,
    image: 'https://images.pexels.com/photos/24738507/pexels-photo-24738507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 1
  },
  {
    id: 'n-garlic',
    name: 'Garlic Noodle',
    category: 'noodles',
    description: 'Aromatic roasted crushed garlic infused noodles tossed with scallions, chilli oil, and fresh veggies.',
    price: 50,
    hasPortions: true,
    halfPrice: 50,
    fullPrice: 90,
    image: 'https://images.pexels.com/photos/3054690/pexels-photo-3054690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 2,
    tag: 'Garlic Lovers'
  },
  {
    id: 'n-singapore',
    name: 'Singapore Masala Noodle',
    category: 'noodles',
    description: 'Curry-spiced street noodles with bell peppers, shredded vegetables, and punchy Singapore masala.',
    price: 60,
    hasPortions: true,
    halfPrice: 60,
    fullPrice: 110,
    image: 'https://images.pexels.com/photos/21482824/pexels-photo-21482824.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isSpicy: true,
    spiceLevel: 2
  },
  {
    id: 'n-hakka',
    name: 'Veg Hakka Noodle',
    category: 'noodles',
    description: 'Classic Kolkata-style Hakka noodles loaded with wok-smoked veggies, white pepper, and balanced Indo-Chinese sauces.',
    price: 70,
    hasPortions: true,
    halfPrice: 70,
    fullPrice: 130,
    image: 'https://images.pexels.com/photos/5602458/pexels-photo-5602458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 2,
    tag: 'Crowd Favorite'
  },
  {
    id: 'n-paneer',
    name: 'Paneer Noodle',
    category: 'noodles',
    description: 'Succulent cubes of golden soft paneer wok-tossed with spring onions, crunchy capsicum, and hakka noodles.',
    price: 80,
    hasPortions: true,
    halfPrice: 80,
    fullPrice: 140,
    image: 'https://images.pexels.com/photos/24738507/pexels-photo-24738507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 1,
    tag: 'Protein Rich'
  },
  {
    id: 'n-spl-mix',
    name: 'Spl. Mix Noodle',
    category: 'noodles',
    description: 'The ultimate wok masterpiece! Paneer, mushrooms, baby corn, seasonal veggies, and special GSC secret chili blend.',
    price: 90,
    hasPortions: true,
    halfPrice: 90,
    fullPrice: 160,
    image: 'https://images.pexels.com/photos/3054690/pexels-photo-3054690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    isSpicy: true,
    spiceLevel: 3,
    tag: 'Chef Special'
  },

  // --- SANDWICHES ---
  {
    id: 's-fresh-veg',
    name: 'Fresh Veg Sandwich',
    category: 'sandwiches',
    description: 'Cool cucumber slices, ripe tomatoes, bell pepper, and tangy mint spread between fresh soft bread slices.',
    price: 50,
    image: 'https://images.pexels.com/photos/1885578/pexels-photo-1885578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 1
  },
  {
    id: 's-classic-veg',
    name: 'Classic Veg Sandwich',
    category: 'sandwiches',
    description: 'Toasted golden brown with buttery spiced potato stuffing, onions, fresh coriander, and chatpata masala.',
    price: 70,
    image: 'https://images.pexels.com/photos/29954941/pexels-photo-29954941.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 's-paneer',
    name: 'Paneer Sandwich',
    category: 'sandwiches',
    description: 'Generously stuffed with spiced paneer bhurji, grilled capsicum, green chutney, and slow-melted cheese.',
    price: 90,
    image: 'https://images.pexels.com/photos/32715053/pexels-photo-32715053.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 1,
    tag: 'High Protein'
  },
  {
    id: 's-corn-cheese',
    name: 'Corn Cheese Sandwich',
    category: 'sandwiches',
    description: 'Creamy sweet corn mixed with gooey mozzarella and processed cheese, seasoned with oregano and red chili flakes.',
    price: 120,
    image: 'https://images.pexels.com/photos/1885578/pexels-photo-1885578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 1,
    tag: 'Cheesy Delight'
  },
  {
    id: 's-pizza',
    name: 'Pizza Sandwich',
    category: 'sandwiches',
    description: 'Everything you love about pizza! Marinara sauce, mozzarella cheese pull, black olives, sweet corn, and capsicum.',
    price: 150,
    image: 'https://images.pexels.com/photos/29954941/pexels-photo-29954941.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 1,
    tag: 'Kids & Youth Pick'
  },
  {
    id: 's-spl-gsc',
    name: 'Spl. GSC Sandwich',
    category: 'sandwiches',
    description: 'Grand triple-layer grilled sandwich stacked with paneer, loaded cheese, spiced veggies, secret herb dressing, and chips.',
    price: 180,
    image: 'https://images.pexels.com/photos/32715053/pexels-photo-32715053.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 2,
    tag: 'Signature Triple Layer'
  },

  // --- FRENCH FRIES (Medium / Large) ---
  {
    id: 'f-classic',
    name: 'Classic Fries',
    category: 'french-fries',
    description: 'Golden, crispy, salted french fries fried to perfection. Served with classic ketchup.',
    price: 49,
    hasSizes: true,
    mediumPrice: 49,
    largePrice: 89,
    image: 'https://images.pexels.com/photos/12548553/pexels-photo-12548553.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 1
  },
  {
    id: 'f-peri-peri',
    name: 'Peri-Peri Fries',
    category: 'french-fries',
    description: 'Shaken with authentic zesty African peri-peri spice dust. Hot, tangy, and dangerously addictive.',
    price: 59,
    hasSizes: true,
    mediumPrice: 59,
    largePrice: 99,
    image: 'https://images.pexels.com/photos/8081266/pexels-photo-8081266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    isSpicy: true,
    spiceLevel: 2,
    tag: 'Top Pick'
  },
  {
    id: 'f-masala',
    name: 'Masala Fries',
    category: 'french-fries',
    description: 'Tossed in signature Gupshup chaat masala with a squeeze of fresh lemon aroma.',
    price: 69,
    hasSizes: true,
    mediumPrice: 69,
    largePrice: 119,
    image: 'https://images.pexels.com/photos/8848610/pexels-photo-8848610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 2
  },
  {
    id: 'f-cheese',
    name: 'Cheese Fries',
    category: 'french-fries',
    description: 'Hot crispy fries smothered in velvety cheddar cheese sauce with herb seasoning.',
    price: 89,
    hasSizes: true,
    mediumPrice: 89,
    largePrice: 129,
    image: 'https://images.pexels.com/photos/18530635/pexels-photo-18530635.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 1,
    tag: 'Cheese Drizzle'
  },
  {
    id: 'f-loaded',
    name: 'Loaded Fries',
    category: 'french-fries',
    description: 'Overloaded with melted cheese, chopped jalapeños, olives, diced onions, and garlic-mayo swirl.',
    price: 99,
    hasSizes: true,
    mediumPrice: 99,
    largePrice: 149,
    image: 'https://images.pexels.com/photos/7961929/pexels-photo-7961929.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 2,
    tag: 'Ultimate Overload'
  },

  // --- SPRING ROLLS (Half / Full) ---
  {
    id: 'sr-veg',
    name: 'Veg Spring Roll',
    category: 'spring-rolls',
    description: 'Crispy delicate golden wrappers packed with finely shredded cabbage, carrots, and sweet chili dip.',
    price: 30,
    hasPortions: true,
    halfPrice: 30,
    fullPrice: 60,
    image: 'https://images.pexels.com/photos/8585763/pexels-photo-8585763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 1
  },
  {
    id: 'sr-crunchy',
    name: 'Crunchy Roll',
    category: 'spring-rolls',
    description: 'Extra crunchy coating on the outside with savoury vegetable stir fry on the inside.',
    price: 40,
    hasPortions: true,
    halfPrice: 40,
    fullPrice: 70,
    image: 'https://images.pexels.com/photos/8585763/pexels-photo-8585763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'sr-cheese-corn',
    name: 'Cheese Corn Roll',
    category: 'spring-rolls',
    description: 'Molten cheese and sweet corn stuffed crunchy rolls that melt in your mouth on first crunch.',
    price: 50,
    hasPortions: true,
    halfPrice: 50,
    fullPrice: 90,
    image: 'https://images.pexels.com/photos/8585763/pexels-photo-8585763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 1,
    tag: 'Best with Chai'
  },

  // --- MOMOS ---
  {
    id: 'm-veg-steam',
    name: 'Veg Steam Momo',
    category: 'momos',
    description: 'Authentic thin-skin Himalayan steamed dumplings stuffed with fresh cabbage, onions, and secret spices.',
    price: 30,
    hasPortions: true,
    halfPrice: 30,
    fullPrice: 60,
    image: 'https://images.pexels.com/photos/13072972/pexels-photo-13072972.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 1,
    tag: 'Healthy & Light'
  },
  {
    id: 'm-veg-fried',
    name: 'Veg Fried Momo',
    category: 'momos',
    description: 'Crisp deep-fried dumplings with a golden crunchy crust and piping hot savory filling.',
    price: 40,
    hasPortions: true,
    halfPrice: 40,
    fullPrice: 70,
    image: 'https://images.pexels.com/photos/32083372/pexels-photo-32083372.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 1
  },
  {
    id: 'm-soya',
    name: 'Soya Momo',
    category: 'momos',
    description: 'High-protein seasoned soya granules filling packed with ginger and spring onions.',
    price: 40,
    hasPortions: true,
    halfPrice: 40,
    fullPrice: 70,
    image: 'https://images.pexels.com/photos/13072972/pexels-photo-13072972.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 1
  },
  {
    id: 'm-paneer',
    name: 'Paneer Momo',
    category: 'momos',
    description: 'Grated malai paneer with coriander, cracked black pepper, and herbs. Super juicy and rich.',
    price: 50,
    hasPortions: true,
    halfPrice: 50,
    fullPrice: 90,
    image: 'https://images.pexels.com/photos/13072972/pexels-photo-13072972.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 1,
    tag: 'Paneer Lovers'
  },
  {
    id: 'm-kurkure',
    name: 'Kurkure Momo',
    category: 'momos',
    description: 'Legendary crunchy coated momos with cornflake crumb crunch exterior. Crispy outside, juicy inside.',
    price: 50,
    hasPortions: true,
    halfPrice: 50,
    fullPrice: 100,
    image: 'https://images.pexels.com/photos/32083372/pexels-photo-32083372.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 2,
    tag: '#1 Bestseller'
  },
  {
    id: 'm-gravy',
    name: 'Gravy Momo (8 Pc)',
    category: 'momos',
    description: '8 juicy momos tossed in creamy, spicy makhani & schezwan fusion gravy garnished with coriander.',
    price: 90,
    pieces: '8 Pcs',
    image: 'https://images.pexels.com/photos/13072972/pexels-photo-13072972.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    isSpicy: true,
    spiceLevel: 2,
    tag: 'Rich & Saucy'
  },
  {
    id: 'm-cheese',
    name: 'Cheese Momo (8 Pc)',
    category: 'momos',
    description: '8 steamed dumplings topped with hot molten mozzarella & herb seasoning for the cheese pull lover.',
    price: 120,
    pieces: '8 Pcs',
    image: 'https://images.pexels.com/photos/13072972/pexels-photo-13072972.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 1,
    tag: 'Cheese Lovers'
  },
  {
    id: 'm-chilli',
    name: 'Chilli Momo (8 Pc)',
    category: 'momos',
    description: '8 pan-fried momos wok-tossed with green chilies, capsicum, onions, and spicy dark soya sauce.',
    price: 140,
    pieces: '8 Pcs',
    image: 'https://images.pexels.com/photos/32083372/pexels-photo-13072972.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isSpicy: true,
    spiceLevel: 3,
    tag: 'Fiery Wok Style'
  },

  // --- INDO-CHINESE & APPETIZERS ---
  {
    id: 'ic-honey-chilli-potato',
    name: 'Honey Chilli Potato',
    category: 'indo-chinese',
    description: 'Crispy potato fingers wok-glazed in sweet honey, roasted sesame seeds, and spicy red chili reduction.',
    price: 139,
    image: 'https://images.pexels.com/photos/8081266/pexels-photo-8081266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 2,
    tag: 'Hot & Sweet'
  },
  {
    id: 'ic-honey-chilli-momo',
    name: 'Honey Chilli Momo',
    category: 'indo-chinese',
    description: 'Crispy fried momos tossed in tangy spicy honey chili reduction with toasted sesame and scallions.',
    price: 149,
    image: 'https://images.pexels.com/photos/13072972/pexels-photo-13072972.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 2,
    tag: 'Tangy Delight'
  },
  {
    id: 'ic-veg-manchurian-dry',
    name: 'Veg Manchurian (Dry)',
    category: 'indo-chinese',
    description: 'Crisp vegetable dumplings wok-tossed with chopped garlic, green chilies, coriander, and soya glaze.',
    price: 50,
    hasPortions: true,
    halfPrice: 50,
    fullPrice: 100,
    image: 'https://images.pexels.com/photos/28674541/pexels-photo-28674541.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 2
  },
  {
    id: 'ic-veg-manchurian-gravy',
    name: 'Veg Manchurian (Gravy)',
    category: 'indo-chinese',
    description: 'Savory veg balls simmered in a luscious dark, ginger-garlic and soy gravy. Perfect with hakka noodles.',
    price: 70,
    hasPortions: true,
    halfPrice: 70,
    fullPrice: 110,
    image: 'https://images.pexels.com/photos/28674541/pexels-photo-28674541.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 2,
    tag: 'Great with Noodles'
  },
  {
    id: 'ic-paneer-chilli-dry',
    name: 'Paneer Chilli (Dry)',
    category: 'indo-chinese',
    description: 'Tender cottage cheese cubes batter-crisped and wok-fried with bell peppers, green chilies, and garlic.',
    price: 130,
    hasPortions: true,
    halfPrice: 130,
    fullPrice: 220,
    image: 'https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 2,
    tag: 'Party Favorite'
  },
  {
    id: 'ic-paneer-chilli-gravy',
    name: 'Paneer Chilli (Gravy)',
    category: 'indo-chinese',
    description: 'Cubes of soft paneer drenched in a rich spicy Indo-Chinese sauce bursting with spring onions and capsicum.',
    price: 140,
    hasPortions: true,
    halfPrice: 140,
    fullPrice: 240,
    image: 'https://images.pexels.com/photos/30858402/pexels-photo-30858402.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isSpicy: true,
    spiceLevel: 2
  },

  // --- PASTA ---
  {
    id: 'p-white-sauce',
    name: 'White Sauce Pasta',
    category: 'pasta',
    description: 'Al dente penne pasta in a silky, buttery béchamel cream sauce with sweet corn, capsicum, and Italian herbs.',
    price: 139,
    image: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 1,
    tag: 'Ultra Creamy'
  },
  {
    id: 'p-red-sauce',
    name: 'Red Sauce Pasta',
    category: 'pasta',
    description: 'Penne tossed in robust basil-infused arrabbiata tomato sauce with bell peppers, garlic, and chili flakes.',
    price: 149,
    image: 'https://images.pexels.com/photos/16525900/pexels-photo-16525900.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isPopular: true,
    spiceLevel: 2,
    tag: 'Tangy Arrabbiata'
  },
  {
    id: 'p-mix-sauce',
    name: 'Mix Sauce Pasta',
    category: 'pasta',
    description: 'The best of both worlds! Creamy pink pasta sauce combining velvety white cheese sauce and rich tomato marinara.',
    price: 169,
    image: 'https://images.pexels.com/photos/29173118/pexels-photo-29173118.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    isBestseller: true,
    spiceLevel: 1,
    tag: 'Chef Signature Pink'
  },

  // --- EXTRAS ---
  {
    id: 'ex-cheese-slice',
    name: 'Extra Cheese Slice',
    category: 'extras',
    description: 'Add a rich melted dairy cheese slice to any burger, sandwich, or fries.',
    price: 20,
    image: 'https://images.pexels.com/photos/18530635/pexels-photo-18530635.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 1
  },
  {
    id: 'ex-aloo-tikki',
    name: 'Extra Aloo Tikki',
    category: 'extras',
    description: 'Golden spiced potato patty for extra crunch and satisfaction.',
    price: 20,
    image: 'https://images.pexels.com/photos/8585763/pexels-photo-8585763.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    spiceLevel: 1
  }
];

export const COMBO_DEALS: ComboItem[] = [
  {
    id: 'combo-hunger-buster',
    title: 'Hunger Buster Combo',
    badge: 'MOST POPULAR',
    subtitle: 'The quintessential college & office craving fix',
    items: [
      '1x Popular Burger (₹40)',
      '1x Peri-Peri Fries (Medium) (₹59)',
      '1x Veg Steam Momo (Half) (₹30)',
      '1x House Garlic Dip'
    ],
    originalPrice: 159,
    offerPrice: 129,
    savings: 30,
    image: 'public/images/combos-banner.jpg',
    serves: '1-2 Persons',
    popularFor: 'Students & Quick Lunch'
  },
  {
    id: 'combo-momo-overload',
    title: 'Momo Mania Platter',
    badge: 'SNACK LOVER CHOICE',
    subtitle: 'Crispy, crunchy & gravy momo heaven in one platter',
    items: [
      '4x Kurkure Momos (Crisp Crumb)',
      '4x Steamed Paneer Momos',
      '4x Veg Fried Momos',
      'Spicy Schezwan & Garlic Mayo Dips'
    ],
    originalPrice: 199,
    offerPrice: 159,
    savings: 40,
    image: 'https://images.pexels.com/photos/13072972/pexels-photo-13072972.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    serves: '2 Persons',
    popularFor: 'Evening Gupshup & Date Night'
  },
  {
    id: 'combo-chinese-duo',
    title: 'Indo-Chinese Feast Duo',
    badge: 'BEST VALUE',
    subtitle: 'Wok tossed goodness with sizzling gravy',
    items: [
      '1x Veg Hakka Noodle (Full) (₹130)',
      '1x Veg Manchurian Gravy (Full) (₹110)',
      '2x Crunchy Spring Rolls'
    ],
    originalPrice: 280,
    offerPrice: 229,
    savings: 51,
    image: 'https://images.pexels.com/photos/3054690/pexels-photo-3054690.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    serves: '2-3 Persons',
    popularFor: 'Family Dinner & Foodie Friends'
  },
  {
    id: 'combo-cheese-lovers',
    title: 'Ultimate Cheesy Trio',
    badge: 'CHEESE PULL',
    subtitle: 'Loaded with gooey dairy goodness for all cheese enthusiasts',
    items: [
      '1x Corn Cheese Sandwich (₹120)',
      '1x Cheese Fries (Medium) (₹89)',
      '1x White Sauce Pasta (₹139)'
    ],
    originalPrice: 348,
    offerPrice: 289,
    savings: 59,
    image: 'https://images.pexels.com/photos/1885578/pexels-photo-1885578.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    serves: '2-3 Persons',
    popularFor: 'Kids, Teens & Cheese Addicts'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Aarav Sharma',
    role: 'College Student (Final Year)',
    ageGroup: 'Gen Z / Student',
    rating: 5,
    comment: 'Gupshup Corner is literally our daily hangout after classes! The Aloo Tikki Burger at ₹30 and Peri-Peri Fries are legendary. Pocket friendly and unbeatable crunch!',
    favoriteDish: 'Do Tikki Burger & Peri Peri Fries',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=160&q=80',
    date: 'Yesterday'
  },
  {
    id: 'rev-2',
    name: 'Pooja Verma',
    role: 'Software Engineer & Mom',
    ageGroup: 'Young Professional & Family',
    rating: 5,
    comment: 'We ordered the Hakka Noodles and Paneer Chilli for a weekend family gathering. The packaging was spill-proof, hot, and the taste felt so hygienic and authentic. Kids loved the White Sauce Pasta!',
    favoriteDish: 'Veg Hakka Noodle & White Sauce Pasta',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80',
    date: '3 days ago'
  },
  {
    id: 'rev-3',
    name: 'Rameshwar Uncle & Suman Ji',
    role: 'Retired Senior Citizens',
    ageGroup: 'Seniors / 55+',
    rating: 5,
    comment: 'We come here for our evening walk gupshup. The Fresh Veg Sandwich and warm ginger tea combo is so gentle, light, and flavorful. Clean seating and very courteous staff.',
    favoriteDish: 'Fresh Veg Sandwich & Classic Fries',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80',
    date: '1 week ago'
  },
  {
    id: 'rev-4',
    name: 'Karan Mehra',
    role: 'Startup Founder',
    ageGroup: 'Working Millennial',
    rating: 5,
    comment: 'Whenever our team works late, ordering from 7508662008 on WhatsApp is super seamless. The Kurkure Momos and Honey Chilli Potato are top tier! Delivered in 25 mins flat.',
    favoriteDish: 'Kurkure Momo & Honey Chilli Potato',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
    date: '2 days ago'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do I place an order online for home delivery or takeaway?',
    answer: 'You can easily order right on this landing page! Click "Add to Order" on your favorite items or combo deals, review your cart, and tap "Order via WhatsApp" or "Call 7508662008". Your order details with items, total, and address will be directly sent to our kitchen team for instant dispatch.',
    category: 'Ordering'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Orders are freshly prepared from scratch in 10-15 minutes and delivered by our lightning delivery partners within 20-30 minutes across our coverage radius. You can also pick up directly in 10 minutes.',
    category: 'Delivery'
  },
  {
    question: 'Are all dishes 100% vegetarian and prepared hygienically?',
    answer: 'Yes! All items on our menu are 100% Pure Vegetarian. We maintain strict hygiene protocols, using fresh daily vegetables, branded dairy (paneer & cheese), clean RO water, and zero recycled oil.',
    category: 'Hygiene'
  },
  {
    question: 'Do you offer party and bulk orders for birthdays or college fests?',
    answer: 'Yes, we specialize in bulk snack boxes for birthdays, college events, cricket screenings, and office parties! Call us directly at 7508662008 for special customized packages and extra discounts.',
    category: 'Events'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment modes including UPI (Google Pay, PhonePe, Paytm), Cash on Delivery (COD), Credit/Debit Cards, and Net Banking.',
    category: 'Payments'
  },
  {
    question: 'Can I customize the spice level or add extra cheese/tikki?',
    answer: 'Absolutely! You can choose mild, medium, or spicy, and add an Extra Cheese Slice (+₹20) or Extra Aloo Tikki (+₹20) directly to your cart or mention your preference in the cooking notes.',
    category: 'Customization'
  }
];
