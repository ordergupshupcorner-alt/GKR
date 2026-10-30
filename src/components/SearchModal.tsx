import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Plus, Sparkles, Flame } from 'lucide-react';
import { MENU_ITEMS } from '../data/menuData';
import { MenuItem } from '../types';
import { useCart } from '../context/CartContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { addToCart, setSelectedModalItem } = useCart();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = query.trim()
    ? MENU_ITEMS.filter(
        (i) =>
          i.name.toLowerCase().includes(query.toLowerCase()) ||
          i.description.toLowerCase().includes(query.toLowerCase()) ||
          i.category.toLowerCase().includes(query.toLowerCase())
      )
    : MENU_ITEMS.slice(0, 6); // default suggestions

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    addToCart(item, item.hasPortions ? 'half' : item.hasSizes ? 'medium' : 'single');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 bg-stone-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-stone-200 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3 bg-stone-50">
          <Search className="w-5 h-5 text-amber-600 shrink-0" />
          <h2 id="search-modal-title" className="sr-only">Search Gupshup Corner Dishes</h2>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type 'Momos', 'Burger', 'Paneer Chilli', 'Pasta'..."
            className="flex-1 bg-transparent text-sm sm:text-base font-medium text-stone-900 placeholder:text-stone-400 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-stone-400 hover:text-stone-700 text-xs font-bold p-1 cursor-pointer"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Close search dialog"
            className="w-8 h-8 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-600 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 sm:p-5 max-h-[60vh] overflow-y-auto space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-stone-400 uppercase tracking-wider px-1">
            <span>{query ? `Search Results (${results.length})` : 'Popular Recommendations'}</span>
            {!query && (
              <span className="flex items-center gap-1 text-amber-600">
                <Sparkles className="w-3 h-3" /> Quick Picks
              </span>
            )}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-10 space-y-2">
              <p className="text-sm font-bold text-stone-700">No dishes found matching "{query}"</p>
              <p className="text-xs text-stone-400">Try searching for Hakka Noodles, Kurkure Momo, or Cheese Burger</p>
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onClose();
                  setSelectedModalItem(item);
                }}
                className="p-3 rounded-2xl border border-stone-200 hover:border-amber-300 hover:bg-amber-50/30 flex items-center justify-between gap-3 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-heading font-bold text-stone-900 text-sm group-hover:text-amber-600 truncate">
                        {item.name}
                      </h3>
                      {item.isBestseller && (
                        <span className="bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.2 rounded shrink-0 flex items-center gap-0.5">
                          <Flame className="w-2.5 h-2.5 fill-red-600" /> Hot
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-500 truncate max-w-sm">
                      {item.description}
                    </p>
                    <p className="font-heading font-extrabold text-stone-950 text-xs mt-0.5">
                      Starting ₹{item.hasPortions ? item.halfPrice : item.hasSizes ? item.mediumPrice : item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={(e) => handleQuickAdd(e, item)}
                  className="shrink-0 p-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 transition-colors shadow-xs cursor-pointer"
                  title="Quick add"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-stone-100 bg-stone-50 text-[11px] text-stone-500 text-center">
          Tap any item to customize portions or add extra cheese slice (+₹20)
        </div>
      </div>
    </div>
  );
};
