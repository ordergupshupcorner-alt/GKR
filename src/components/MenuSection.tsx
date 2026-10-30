import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles, Plus, Check, Filter } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { FoodCategory, MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface MenuSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ searchQuery, setSearchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory>('all');
  const [onlyBestsellers, setOnlyBestsellers] = useState(false);
  
  // Track selected portion or size per item id: { [itemId]: 'half' | 'full' | 'medium' | 'large' }
  const [itemSelections, setItemSelections] = useState<Record<string, string>>({});
  
  const { addToCart, cart, setSelectedModalItem } = useCart();

  const categories: { id: FoodCategory; label: string; icon: string }[] = [
    { id: 'all', label: 'All Items', icon: '✨' },
    { id: 'burgers', label: 'Burgers', icon: '🍔' },
    { id: 'momos', label: 'Momos', icon: '🥟' },
    { id: 'noodles', label: 'Noodles', icon: '🥢' },
    { id: 'french-fries', label: 'French Fries', icon: '🍟' },
    { id: 'sandwiches', label: 'Sandwiches', icon: '🥪' },
    { id: 'indo-chinese', label: 'Indo-Chinese', icon: '🌶️' },
    { id: 'pasta', label: 'Pasta', icon: '🍝' },
    { id: 'spring-rolls', label: 'Spring Rolls', icon: '🌯' },
    { id: 'extras', label: 'Add-Ons', icon: '🧀' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Bestseller filter
      if (onlyBestsellers && !item.isBestseller && !item.isPopular) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTag = item.tag?.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        return matchesName || matchesDesc || matchesTag || matchesCat;
      }
      return true;
    });
  }, [selectedCategory, onlyBestsellers, searchQuery]);

  const handlePortionChange = (itemId: string, portion: string) => {
    setItemSelections((prev) => ({ ...prev, [itemId]: portion }));
  };

  const getItemPrice = (item: MenuItem) => {
    const selected = itemSelections[item.id];
    if (item.hasPortions) {
      if (selected === 'full') return item.fullPrice ?? item.price;
      return item.halfPrice ?? item.price;
    }
    if (item.hasSizes) {
      if (selected === 'large') return item.largePrice ?? item.price;
      return item.mediumPrice ?? item.price;
    }
    return item.price;
  };

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    const selection = itemSelections[item.id];
    let portionOrSize: 'single' | 'half' | 'full' | 'medium' | 'large' = 'single';
    
    if (item.hasPortions) {
      portionOrSize = (selection === 'full' ? 'full' : 'half');
    } else if (item.hasSizes) {
      portionOrSize = (selection === 'large' ? 'large' : 'medium');
    }

    addToCart(item, portionOrSize);
  };

  const isItemInCart = (itemId: string) => {
    return cart.some((c) => c.menuId === itemId);
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Complete Live Menu
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Crafted Fresh. <span className="text-amber-600">Served Sizzling Hot.</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Every dish is 100% Pure Vegetarian, prepared to order with fresh garden veggies and our signature house sauces.
            </p>
          </div>

          {/* Search bar & quick filters */}
          <div className="w-full md:w-80 space-y-2">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search burgers, momos, noodles..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-sm bg-stone-50/50 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-400 hover:text-stone-700 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              onClick={() => setOnlyBestsellers(!onlyBestsellers)}
              className={`w-full py-1.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                onlyBestsellers
                  ? 'bg-amber-500 text-stone-950 shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
              <span>{onlyBestsellers ? 'Showing Bestsellers Only' : 'Filter by Bestsellers & Top Picks'}</span>
            </button>
          </div>
        </div>

        {/* Category Pills Navigation (Horizontal Scrollable) */}
        <div className="relative border-b border-stone-200 pb-2">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl font-heading text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-stone-950 text-amber-400 shadow-md shadow-stone-950/20 scale-102'
                      : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                  }`}
                >
                  <span className="text-sm">{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 space-y-3 bg-stone-50 rounded-2xl p-8 border border-dashed border-stone-200">
            <Filter className="w-10 h-10 text-stone-400 mx-auto" />
            <h3 className="text-lg font-bold text-stone-800">No dishes matched your search</h3>
            <p className="text-stone-500 text-sm">
              Try searching for "Kurkure", "Burger", "Noodles", or clear the filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setOnlyBestsellers(false);
              }}
              className="mt-2 px-4 py-2 rounded-xl bg-amber-500 text-stone-950 font-bold text-xs cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => {
              const currentPortion = itemSelections[item.id] || (item.hasPortions ? 'half' : item.hasSizes ? 'medium' : 'single');
              const displayPrice = getItemPrice(item);
              const inCart = isItemInCart(item.id);

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedModalItem(item)}
                  className="group relative rounded-2xl bg-white border border-stone-200 hover:border-amber-300 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Image container */}
                  <div className="relative h-44 w-full overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />

                    {/* Pure Veg Green Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs rounded-md px-1.5 py-0.5 border border-emerald-300 flex items-center gap-1 shadow-xs">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 border border-emerald-700" />
                      <span className="text-[10px] font-bold text-emerald-800">Pure Veg</span>
                    </div>

                    {/* Tag / Bestseller Badge */}
                    {(item.isBestseller || item.tag) && (
                      <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-xs">
                        {item.tag || 'Bestseller'}
                      </div>
                    )}

                    {/* Piece count if available */}
                    {item.pieces && (
                      <div className="absolute bottom-2.5 left-3 bg-stone-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                        {item.pieces}
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-1">
                        <h3 className="font-heading font-extrabold text-stone-900 text-base group-hover:text-amber-600 transition-colors leading-snug">
                          {item.name}
                        </h3>
                      </div>
                      <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Portion or Size Switcher */}
                    {item.hasPortions && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 bg-stone-100 rounded-lg flex items-center text-xs font-bold text-stone-700"
                      >
                        <button
                          onClick={() => handlePortionChange(item.id, 'half')}
                          className={`flex-1 py-1 rounded-md text-center transition-all cursor-pointer ${
                            currentPortion === 'half'
                              ? 'bg-white text-stone-950 shadow-xs'
                              : 'text-stone-500 hover:text-stone-900'
                          }`}
                        >
                          Half ₹{item.halfPrice}
                        </button>
                        <button
                          onClick={() => handlePortionChange(item.id, 'full')}
                          className={`flex-1 py-1 rounded-md text-center transition-all cursor-pointer ${
                            currentPortion === 'full'
                              ? 'bg-white text-stone-950 shadow-xs'
                              : 'text-stone-500 hover:text-stone-900'
                          }`}
                        >
                          Full ₹{item.fullPrice}
                        </button>
                      </div>
                    )}

                    {item.hasSizes && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 bg-stone-100 rounded-lg flex items-center text-xs font-bold text-stone-700"
                      >
                        <button
                          onClick={() => handlePortionChange(item.id, 'medium')}
                          className={`flex-1 py-1 rounded-md text-center transition-all cursor-pointer ${
                            currentPortion === 'medium'
                              ? 'bg-white text-stone-950 shadow-xs'
                              : 'text-stone-500 hover:text-stone-900'
                          }`}
                        >
                          Med ₹{item.mediumPrice}
                        </button>
                        <button
                          onClick={() => handlePortionChange(item.id, 'large')}
                          className={`flex-1 py-1 rounded-md text-center transition-all cursor-pointer ${
                            currentPortion === 'large'
                              ? 'bg-white text-stone-950 shadow-xs'
                              : 'text-stone-500 hover:text-stone-900'
                          }`}
                        >
                          Large ₹{item.largePrice}
                        </button>
                      </div>
                    )}

                    {/* Footer: Price & Quick Add Button */}
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-stone-400 uppercase font-semibold block">Price</span>
                        <span className="font-heading font-black text-xl text-stone-950">
                          ₹{displayPrice}
                        </span>
                      </div>

                      <button
                        onClick={(e) => handleQuickAdd(e, item)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-heading font-bold shadow-xs active:scale-95 transition-all cursor-pointer ${
                          inCart
                            ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                            : 'bg-amber-500 text-stone-950 hover:bg-amber-600'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
