import React from 'react';
import { ShoppingBag, ArrowRight, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_PHONE } from '../data/menuData';

export const FloatingMobileBar: React.FC = () => {
  const { itemCount, finalTotal, setIsCartOpen } = useCart();

  if (itemCount === 0) {
    return (
      <aside aria-label="Mobile quick order toolbar" className="lg:hidden fixed bottom-4 right-4 z-30">
        <a
          href={`tel:${STORE_PHONE}`}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-stone-950 text-amber-400 font-heading font-bold text-xs shadow-xl border border-stone-800 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call 7508662008</span>
        </a>
      </aside>
    );
  }

  return (
    <aside aria-label="Mobile order checkout bar" className="lg:hidden fixed bottom-0 inset-x-0 z-30 p-3 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-2xl animate-slide-up">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="relative w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          </div>
          <div>
            <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">
              Cart Total
            </span>
            <p className="font-heading font-black text-lg text-stone-950 leading-none">
              ₹{finalTotal}
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex-1 max-w-[200px] py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25 active:scale-98 transition-all cursor-pointer"
        >
          <span>View Order</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
