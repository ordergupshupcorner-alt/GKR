import React from 'react';
import { Sparkles, CheckCircle2, ShoppingBag, Users, Flame, Percent } from 'lucide-react';
import { COMBO_DEALS, STORE_PHONE } from '../data/menuData';
import { useCart } from '../context/CartContext';
import { ComboItem } from '../types';

export const FeaturedCombos: React.FC = () => {
  const { addComboToCart, setIsCartOpen } = useCart();

  const handleAdd = (combo: ComboItem) => {
    addComboToCart(combo);
    setIsCartOpen(true);
  };

  return (
    <section id="combos" className="py-16 sm:py-20 bg-gradient-to-b from-stone-50 via-amber-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-black uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
              Direct From The Menu Card
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Everyday Offers & <span className="text-amber-600">Combo Deals</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              Hand-bundled combos crafted for maximum satisfaction at minimum spend. Save up to ₹60 on your order today!
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-stone-700 bg-white border border-amber-200 px-4 py-2.5 rounded-xl shadow-xs">
            <Percent className="w-4 h-4 text-emerald-600" />
            <span>Extra 10% OFF with code <strong className="text-stone-950 font-bold">GUPSHUP10</strong></span>
          </div>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMBO_DEALS.map((combo) => (
            <div
              key={combo.id}
              className="group relative rounded-3xl bg-white border border-stone-200 hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Image banner */}
              <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                <img
                  src={combo.image}
                  alt={combo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/20 to-transparent" />
                
                {/* Savings Pill */}
                <div className="absolute top-3 left-3 bg-red-600 text-white font-heading font-black text-xs px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> SAVE ₹{combo.savings}
                </div>

                {/* Serves tag */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] font-bold text-white bg-stone-900/80 backdrop-blur-xs px-2 py-0.5 rounded-md">
                  <Users className="w-3 h-3 text-amber-400" />
                  <span>{combo.serves}</span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 inline-block">
                    {combo.badge}
                  </span>
                  <h3 className="font-heading font-extrabold text-stone-900 text-lg group-hover:text-amber-600 transition-colors">
                    {combo.title}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {combo.subtitle}
                  </p>

                  {/* Included Items List */}
                  <div className="pt-2 space-y-1.5 border-t border-stone-100 mt-2">
                    {combo.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-stone-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Add to Cart */}
                <div className="pt-3 border-t border-stone-100 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-stone-400 line-through mr-1.5 font-medium">
                        ₹{combo.originalPrice}
                      </span>
                      <span className="font-heading font-black text-2xl text-stone-950">
                        ₹{combo.offerPrice}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Best Value
                    </span>
                  </div>

                  <button
                    onClick={() => handleAdd(combo)}
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-98 transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Combo to Order</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bulk / Party Custom Combo Callout */}
        <div className="rounded-2xl border border-amber-300 bg-gradient-to-r from-amber-100/70 via-yellow-100/40 to-amber-100/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-stone-900 text-base">
              🎉 Hosting a Birthday, College Fest, or Office Snack Party?
            </h4>
            <p className="text-xs sm:text-sm text-stone-700">
              We prepare customized snack boxes and bulk burger/momos platters with exclusive corporate & party rates.
            </p>
          </div>
          <a
            href={`tel:${STORE_PHONE}`}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-stone-950 hover:bg-black text-amber-300 font-heading font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all"
          >
            Call 7508662008 for Party Rates
          </a>
        </div>

      </div>
    </section>
  );
};
