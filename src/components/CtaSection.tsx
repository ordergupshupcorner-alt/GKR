import React, { useState } from 'react';
import { ArrowRight, Phone, MessageSquare, Copy, Check, Clock, Sparkles, ShieldCheck } from 'lucide-react';
import { STORE_PHONE, STORE_PHONE_FORMATTED, STORE_WHATSAPP } from '../data/menuData';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';

export const CtaSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { applyCoupon } = useCart();

  const handleCopy = () => {
    navigator.clipboard.writeText('GUPSHUP10');
    applyCoupon('GUPSHUP10');
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 sm:py-24 bg-stone-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl border border-stone-800 bg-gradient-to-b from-stone-900/90 to-stone-950/90 p-8 sm:p-12 lg:p-16 shadow-2xl space-y-10 text-center max-w-4xl mx-auto">
          
          {/* Header pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Craving Sizzling Street Food Right Now?
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Order Your Gupshup Feast in Under <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">60 Seconds.</span>
            </h2>
            <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              No complicated apps or surge pricing. Freshly tossed momos, crunchy burgers, loaded fries, and spicy noodles delivered straight to your doorstep or ready for hot pickup.
            </p>
          </div>

          {/* Coupon Code Claim Voucher */}
          <div className="max-w-md mx-auto p-4 rounded-2xl bg-stone-900 border border-stone-700/80 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-inner">
            <div className="text-left space-y-0.5">
              <span className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                Instant Discount Code
              </span>
              <p className="font-heading font-extrabold text-white text-base">
                10% OFF Your Entire Order
              </p>
            </div>

            <button
              onClick={handleCopy}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
            >
              <span>GUPSHUP10</span>
              {copied ? <Check className="w-4 h-4 text-emerald-900" /> : <Copy className="w-4 h-4 opacity-75" />}
            </button>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-amber-500 text-stone-950 font-heading font-black text-base shadow-lg shadow-amber-500/20 active:scale-98 transition-all"
            >
              <span>Explore Menu & Order</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href={`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(
                'Hello Gupshup Corner! I would like to place an order from your website.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-base shadow-md shadow-emerald-600/20 active:scale-98 transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>Order on WhatsApp</span>
            </a>

            <a
              href={`tel:${STORE_PHONE}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-heading font-bold text-base border border-stone-700 active:scale-98 transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{STORE_PHONE_FORMATTED}</span>
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="pt-6 border-t border-stone-800 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-stone-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Delivered in 20-30 Mins</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Spill-proof Packaging</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>No Minimum Order Value</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
