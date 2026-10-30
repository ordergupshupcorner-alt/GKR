export type FoodCategory =
  | 'all'
  | 'combos'
  | 'burgers'
  | 'noodles'
  | 'sandwiches'
  | 'french-fries'
  | 'spring-rolls'
  | 'momos'
  | 'indo-chinese'
  | 'pasta'
  | 'extras';

export interface MenuItem {
  id: string;
  name: string;
  category: FoodCategory;
  description: string;
  image: string;
  price: number; // Base or single price
  hasPortions?: boolean;
  halfPrice?: number;
  fullPrice?: number;
  hasSizes?: boolean; // For fries (medium / large)
  mediumPrice?: number;
  largePrice?: number;
  isPopular?: boolean;
  isBestseller?: boolean;
  isSpicy?: boolean;
  spiceLevel?: 1 | 2 | 3;
  tag?: string;
  pieces?: string; // e.g. "8 Pcs"
}

export interface ComboItem {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  items: string[];
  originalPrice: number;
  offerPrice: number;
  savings: number;
  image: string;
  serves: string;
  popularFor: string;
}

export interface CartItem {
  cartItemId: string; // unique cart entry id
  menuId: string;
  name: string;
  portionOrSize?: 'single' | 'half' | 'full' | 'medium' | 'large';
  unitPrice: number;
  quantity: number;
  extras: {
    cheeseSlice?: boolean; // ₹20
    alooTikki?: boolean;   // ₹20
  };
  notes?: string;
  image: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  ageGroup: string;
  rating: number;
  comment: string;
  favoriteDish: string;
  avatar: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
