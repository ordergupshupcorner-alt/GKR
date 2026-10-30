import React, { useState } from 'react';
import { Sparkles, Phone, Clock, Copy, Check } from 'lucide-react';
import { STORE_PHONE, STORE_PHONE_FORMATTED } from '../data/menuData';
import { useCart } from '../context/CartContext';

export const TopBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { applyCoupon } = useCart();

  const handleCopy = () => {
    navigator.clipboard.writeText('GUPSHUP10');
    applyCoupon('GUPSHUP10');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <aside aria-label="Special Offers and Contact Banner" className="relative z-50 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-stone-950 font-medium text-xs sm:text-sm py-2 px-3 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Offer */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-stone-950 text-amber-300 font-bold px-2 py-0.5 rounded-full text-[11px] uppercase tracking-wider animate-pulse-subtle">
            <Sparkles className="w-3 h-3 text-amber-400" /> Special Offer
          </span>
          <span className="font-semibold text-stone-900">
            Flat 10% OFF on all orders! Code:
          </span>
          <button
            onClick={handleCopy}
            title="Click to copy coupon"
            className="inline-flex items-center gap-1.5 bg-stone-950/10 hover:bg-stone-950/20 active:scale-95 transition-all duration-200 border border-stone-900/20 px-2 py-0.5 rounded font-mono font-bold text-stone-950 cursor-pointer"
          >
            GUPSHUP10
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-800" />
            ) : (
              <Copy className="w-3.5 h-3.5 opacity-70" />
            )}
          </button>
          {copied && (
            <span className="text-[11px] font-semibold text-emerald-900 animate-fade-in">
              Copied & Applied!
            </span>
          )}
        </div>

        {/* Right: Hotline & Fast Delivery */}
        <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-stone-900">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-stone-900 opacity-80" />
            <span>Avg. Delivery: 20-30 Mins</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-stone-900/40" />
          <a
            href={`tel:${STORE_PHONE}`}
            className="inline-flex items-center gap-1.5 hover:text-stone-950 hover:underline transition-colors"
          >
            <Phone className="w-3.5 h-3.5 fill-stone-950" />
            <span>Order Direct: {STORE_PHONE_FORMATTED}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
