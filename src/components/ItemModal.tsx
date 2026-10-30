import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ItemModal: React.FC = () => {
  const { selectedModalItem, setSelectedModalItem, addToCart, setIsCartOpen } = useCart();
  
  const [portion, setPortion] = useState<'single' | 'half' | 'full' | 'medium' | 'large'>('single');
  const [extraCheese, setExtraCheese] = useState(false);
  const [extraTikki, setExtraTikki] = useState(false);
  const [customNotes, setCustomNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (selectedModalItem) {
      if (selectedModalItem.hasPortions) {
        setPortion('half');
      } else if (selectedModalItem.hasSizes) {
        setPortion('medium');
      } else {
        setPortion('single');
      }
      setExtraCheese(false);
      setExtraTikki(false);
      setCustomNotes('');
      setQuantity(1);
    }
  }, [selectedModalItem]);

  if (!selectedModalItem) return null;

  const item = selectedModalItem;

  // Base price
  let basePrice = item.price;
  if (item.hasPortions) {
    basePrice = portion === 'half' ? (item.halfPrice ?? item.price) : (item.fullPrice ?? item.price);
  } else if (item.hasSizes) {
    basePrice = portion === 'medium' ? (item.mediumPrice ?? item.price) : (item.largePrice ?? item.price);
  }

  // Extras
  let extrasCost = 0;
  if (extraCheese) extrasCost += 20;
  if (extraTikki) extrasCost += 20;

  const unitTotal = basePrice + extrasCost;
  const grandTotal = unitTotal * quantity;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(
        item,
        portion,
        { cheeseSlice: extraCheese, alooTikki: extraTikki },
        customNotes
      );
    }
    setSelectedModalItem(null);
    setIsCartOpen(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="item-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in"
      onClick={() => setSelectedModalItem(null)}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden border border-stone-200 animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedModalItem(null)}
          aria-label="Close dish customization modal"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center backdrop-blur-xs transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative h-56 sm:h-64 w-full bg-stone-100 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
          
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-emerald-500 text-stone-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                100% Pure Veg
              </span>
              {item.isBestseller && (
                <span className="bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase flex items-center gap-1">
                  <Flame className="w-3 h-3 fill-white" /> Bestseller
                </span>
              )}
            </div>
            <h3 id="item-modal-title" className="font-heading font-black text-2xl text-white">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[60vh] overflow-y-auto">
          {/* Description */}
          <p className="text-stone-600 text-sm leading-relaxed">
            {item.description}
          </p>

          {/* Portion/Size selector if applicable */}
          {item.hasPortions && (
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                Select Portion Size
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPortion('half')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-all ${
                    portion === 'half'
                      ? 'border-amber-500 bg-amber-50/70 text-stone-950 ring-2 ring-amber-500/20'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700'
                  }`}
                >
                  <span className="font-bold text-sm">Half Portion</span>
                  <span className="font-extrabold text-stone-950">₹{item.halfPrice}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPortion('full')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-all ${
                    portion === 'full'
                      ? 'border-amber-500 bg-amber-50/70 text-stone-950 ring-2 ring-amber-500/20'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700'
                  }`}
                >
                  <span className="font-bold text-sm">Full Portion</span>
                  <span className="font-extrabold text-stone-950">₹{item.fullPrice}</span>
                </button>
              </div>
            </div>
          )}

          {item.hasSizes && (
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                Select Fries Size
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPortion('medium')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-all ${
                    portion === 'medium'
                      ? 'border-amber-500 bg-amber-50/70 text-stone-950 ring-2 ring-amber-500/20'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700'
                  }`}
                >
                  <span className="font-bold text-sm">Medium</span>
                  <span className="font-extrabold text-stone-950">₹{item.mediumPrice}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPortion('large')}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between cursor-pointer transition-all ${
                    portion === 'large'
                      ? 'border-amber-500 bg-amber-50/70 text-stone-950 ring-2 ring-amber-500/20'
                      : 'border-stone-200 hover:border-stone-300 text-stone-700'
                  }`}
                >
                  <span className="font-bold text-sm">Large (Sharing)</span>
                  <span className="font-extrabold text-stone-950">₹{item.largePrice}</span>
                </button>
              </div>
            </div>
          )}

          {/* Extras from the Menu Card */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center justify-between">
              <span>Popular Add-Ons (Menu Extras)</span>
              <span className="text-[11px] font-semibold text-amber-600">Optional</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-center justify-between p-3 rounded-xl border border-stone-200 hover:bg-stone-50 cursor-pointer transition-all">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={extraCheese}
                    onChange={(e) => setExtraCheese(e.target.checked)}
                    className="w-4 h-4 text-amber-500 rounded border-stone-300 focus:ring-amber-500"
                  />
                  <div>
                    <span className="font-bold text-sm text-stone-800">Cheese Slice</span>
                    <p className="text-[11px] text-stone-500">Melted dairy cheddar slice</p>
                  </div>
                </div>
                <span className="font-extrabold text-stone-950 text-sm">+₹20</span>
              </label>

              <label className="flex items-center justify-between p-3 rounded-xl border border-stone-200 hover:bg-stone-50 cursor-pointer transition-all">
                <div className="flex items-center gap-2.5">
                  <input
                    type="checkbox"
                    checked={extraTikki}
                    onChange={(e) => setExtraTikki(e.target.checked)}
                    className="w-4 h-4 text-amber-500 rounded border-stone-300 focus:ring-amber-500"
                  />
                  <div>
                    <span className="font-bold text-sm text-stone-800">Extra Aloo Tikki</span>
                    <p className="text-[11px] text-stone-500">Crispy spiced potato patty</p>
                  </div>
                </div>
                <span className="font-extrabold text-stone-950 text-sm">+₹20</span>
              </label>
            </div>
          </div>

          {/* Custom Instruction */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
              Kitchen Instructions
            </label>
            <input
              type="text"
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              placeholder="e.g. Less spicy, extra crispy, sauce on the side"
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-xs sm:text-sm focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none"
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 flex items-center justify-between gap-4">
          {/* Quantity Selector */}
          <div className="flex items-center border border-stone-300 rounded-xl bg-white p-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center font-bold text-sm text-stone-900">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add Button */}
          <button
            onClick={handleAddToCart}
            className="flex-1 py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Order • ₹{grandTotal}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
