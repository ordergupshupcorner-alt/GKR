import React from 'react';
import { ShieldCheck, Flame, Sparkles, Heart, Zap, Award } from 'lucide-react';

export const WhyGupshup: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'Pocket Friendly Starting at ₹30',
      description: 'Gourmet street taste at student-friendly rates. From ₹30 Aloo Tikki Burgers to ₹40 Hakka Noodles, relish quality without thinking twice.',
      badge: 'Unbeatable Value'
    },
    {
      icon: ShieldCheck,
      title: '100% Pure Veg & Kitchen Hygiene',
      description: 'We adhere to uncompromising cleanliness: RO-filtered water, daily fresh vegetable chopping, branded dairy cheese, and strictly zero recycled oil.',
      badge: 'Clean Kitchen'
    },
    {
      icon: Flame,
      title: 'High-Flame Wok Mastery',
      description: 'Our chefs cook on blazing high-temperature wok burners to capture that authentic smoky street aroma and crisp wok toss in every noodle and manchurian dish.',
      badge: 'Smoky Street Flavor'
    },
    {
      icon: Award,
      title: 'Non-Soggy Ventilated Packaging',
      description: 'Engineered food-grade packaging that lets steam escape so Kurkure Momos stay razor-crisp and burgers stay fluffy and toasted on arrival.',
      badge: 'Stays Crispy'
    },
    {
      icon: Sparkles,
      title: 'Everyday Combos & Savings',
      description: 'Pre-curated meals that bundle your favorite burger, fries, and momos with direct discounts up to ₹60. The smarter way to satisfy group hunger.',
      badge: 'Smart Combos'
    },
    {
      icon: Heart,
      title: 'The Real Spirit of Gupshup',
      description: 'Where memories are made over steaming chai, spicy momo chutneys, and laughter. Designed for all generations to connect and unwind.',
      badge: 'Community First'
    }
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-stone-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            The Gupshup Advantage
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
            Why Foodies Across Ages <span className="text-amber-600">Keep Coming Back</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We combined the irresistible soul of Indian street food with tech-brand hygiene, rapid delivery, and transparent pocket-friendly pricing.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl bg-white p-7 sm:p-8 border border-stone-200/90 hover:border-amber-400 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-500/10 to-yellow-500/20 text-amber-600 flex items-center justify-center border border-amber-200/60 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-stone-900 text-xl group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-stone-100 flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <span>Guaranteed Fresh</span>
                  <span className="text-stone-300">•</span>
                  <span>Pure Flavors</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
