import React from 'react';
import { ArrowRight, Flame, Sparkles, Star, Clock, ShieldCheck, Heart, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS, STORE_PHONE, STORE_WHATSAPP } from '../data/menuData';

export const Hero: React.FC = () => {
  const { addToCart, setIsCartOpen } = useCart();

  const kurkureMomo = MENU_ITEMS.find((i) => i.id === 'm-kurkure') || MENU_ITEMS[0];
  const grillCheese = MENU_ITEMS.find((i) => i.id === 'b-grill-cheese') || MENU_ITEMS[1];

  const handleQuickAdd = (item: typeof kurkureMomo) => {
    addToCart(item, item.hasPortions ? 'half' : 'single');
    setIsCartOpen(true);
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-20 bg-radial from-amber-50/70 via-stone-50/50 to-white">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-200/40 via-yellow-200/30 to-red-100/20 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-40 right-[-100px] w-96 h-96 bg-amber-400/10 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Tech-grade copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-amber-200/80 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-stone-800 tracking-tight">
                Kitchen Live • <span className="text-emerald-700 font-bold">140+ Orders Prepared Today</span>
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-stone-300" />
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded-full">
                <Flame className="w-3 h-3 text-red-500 fill-red-500" /> Fast 20-30m Dispatch
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 tracking-tight leading-[1.08]">
              Where Every Bite Sparks{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-red-600">
                Great Gupshup.
                <svg
                  className="absolute left-0 -bottom-2 w-full h-3 text-amber-400/80 -z-10"
                  viewBox="0 0 250 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9C60 3 180 3 247 9"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtext targeting all age groups */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl font-normal leading-relaxed">
              Step into high-energy street indulgence. Handcrafted smash-crisp burgers, wok-flamed Hakka noodles, golden Kurkure momos, and molten grilled sandwiches. Freshly prepared to order, loved by students, office crews, and families alike.
            </p>

            {/* Price anchor highlight */}
            <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-stone-700">
              <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-lg border border-amber-200">
                Starting at just <strong className="text-stone-950 font-black">₹30</strong>
              </span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-600">100% Pure Fresh Veg</span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-600">No Reused Oils</span>
              <span className="text-stone-400">•</span>
              <span className="text-stone-600">Spill-proof Packaging</span>
            </div>

            {/* Conversion CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 hover:from-amber-600 hover:to-amber-500 text-stone-950 font-heading font-extrabold text-base shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 active:scale-98 transition-all duration-200 group"
              >
                <span>Order Now (Menu)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(
                  'Hi Gupshup Corner! I would like to order delicious food. Please share today’s specials!'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-base shadow-md shadow-emerald-600/20 active:scale-98 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5 fill-white/20" />
                <span>WhatsApp Order</span>
              </a>

              <a
                href={`tel:${STORE_PHONE}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 font-heading font-bold text-base border border-stone-200 shadow-xs active:scale-98 transition-all duration-200"
              >
                <span>Call Kitchen</span>
              </a>
            </div>

            {/* Social Trust Metrics Strip */}
            <div className="pt-4 border-t border-stone-200/80 flex flex-wrap items-center gap-6 text-stone-600 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-stone-900">4.9 / 5.0</span>
                <span className="text-stone-500">(2,400+ Foodies)</span>
              </div>

              <div className="flex items-center gap-1.5 font-medium text-stone-700">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>20-30 Min Delivery</span>
              </div>

              <div className="flex items-center gap-1.5 font-medium text-stone-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Hygiene Certified</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Interactive Micro-Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow container */}
              <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-amber-400/30 via-white/50 to-stone-200/40 shadow-2xl shadow-amber-900/10 border border-white">
                <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-square">
                  <img
                    src="public/images/gupshup-hero.jpg"
                    alt="Gupshup Corner signature spread of burgers, momos, noodles and fries"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Over-image caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-flex items-center gap-1 bg-amber-500 text-stone-950 text-[11px] font-black px-2.5 py-0.5 rounded-full mb-1">
                      <Sparkles className="w-3 h-3" /> SIGNATURE SPREAD
                    </span>
                    <h2 className="text-lg font-bold font-heading text-white">Fresh • Sizzling • Authentic</h2>
                    <p className="text-xs text-stone-300">Over 35+ items on the menu. Always hot to order.</p>
                  </div>
                </div>
              </div>

              {/* Interactive Floating Pill 1: Kurkure Momo */}
              <div className="absolute -top-4 -left-4 sm:-left-6 glass-panel rounded-2xl p-3 shadow-xl border border-white/80 animate-float max-w-[210px]">
                <div className="flex items-center gap-2.5">
                  <img
                    src={kurkureMomo.image}
                    alt={kurkureMomo.name}
                    className="w-11 h-11 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">
                      🔥 Most Craved
                    </span>
                    <p className="text-xs font-bold text-stone-900 truncate">{kurkureMomo.name}</p>
                    <p className="text-xs font-extrabold text-stone-900">₹{kurkureMomo.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleQuickAdd(kurkureMomo)}
                  className="mt-2 w-full py-1 text-[11px] font-bold rounded-lg bg-amber-500 hover:bg-amber-600 text-stone-950 transition-colors cursor-pointer"
                >
                  + Quick Add
                </button>
              </div>

              {/* Interactive Floating Pill 2: Grill Cheese Burger */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 glass-panel rounded-2xl p-3 shadow-xl border border-white/80 animate-float-delayed max-w-[220px]">
                <div className="flex items-center gap-2.5">
                  <img
                    src={grillCheese.image}
                    alt={grillCheese.name}
                    className="w-11 h-11 rounded-xl object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
                      🧀 Super Cheesy
                    </span>
                    <p className="text-xs font-bold text-stone-900 truncate">{grillCheese.name}</p>
                    <p className="text-xs font-extrabold text-stone-900">₹{grillCheese.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleQuickAdd(grillCheese)}
                  className="mt-2 w-full py-1 text-[11px] font-bold rounded-lg bg-stone-900 hover:bg-black text-amber-300 transition-colors cursor-pointer"
                >
                  + Add to Order
                </button>
              </div>

              {/* Experience Badge */}
              <div className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 bg-white/95 rounded-2xl p-2.5 shadow-lg border border-amber-200/80 items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                  <Heart className="w-4 h-4 fill-red-600" />
                </div>
                <div className="text-left pr-2">
                  <p className="text-[11px] font-bold text-stone-900">98% Repeat Rate</p>
                  <p className="text-[10px] text-stone-500">Pure Taste That Addicts</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
