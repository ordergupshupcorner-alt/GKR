import React from 'react';
import { GraduationCap, Briefcase, Users, HeartHandshake, Sparkles } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const demographics = [
    {
      icon: GraduationCap,
      label: 'Students & Gen Z',
      tagline: 'Pocket Friendly & High Crunch',
      desc: 'Bites starting from ₹30, daily combo savings, and endless gupshup with friends after college.',
      color: 'from-amber-500/10 to-yellow-500/10 border-amber-200 text-amber-700'
    },
    {
      icon: Briefcase,
      label: 'Working Professionals',
      tagline: 'Quick 20-Min Power Meals',
      desc: 'Hassle-free group WhatsApp orders, hot noodle boxes, and evening stress-buster fries for office teams.',
      color: 'from-blue-500/10 to-indigo-500/10 border-blue-200 text-blue-700'
    },
    {
      icon: Users,
      label: 'Families & Kids',
      tagline: '100% Pure Veg & Hygienic',
      desc: 'Kids love creamy White Sauce Pasta & Cheese Sandwiches. Parents trust our zero reused oil policy.',
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-200 text-emerald-700'
    },
    {
      icon: HeartHandshake,
      label: 'Seniors & Walkers',
      tagline: 'Fresh, Light & Welcoming',
      desc: 'Steamed momos, grilled fresh vegetable sandwiches, and courteous service for evening conversations.',
      color: 'from-rose-500/10 to-red-500/10 border-rose-200 text-rose-700'
    }
  ];

  const metrics = [
    { value: '45,000+', label: 'Happy Foodies Served', highlight: 'Across the city' },
    { value: '4.9 ★', label: 'Average Customer Rating', highlight: '2,400+ authentic reviews' },
    { value: '20-30m', label: 'Lightning Kitchen Dispatch', highlight: 'Always hot & fresh' },
    { value: '₹30', label: 'Snacks Starting From', highlight: 'Value you can trust' },
  ];

  return (
    <section className="py-12 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Loved By All Generations
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            From After-School Hangouts to Family Dinners
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Food that unites every age group with comfort, crunch, and authentic street flavors.
          </p>
        </div>

        {/* 4 Age Group Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {demographics.map((demo) => {
            const Icon = demo.icon;
            return (
              <div
                key={demo.label}
                className="relative rounded-2xl p-5 border bg-white hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${demo.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-stone-900 text-base">
                      {demo.label}
                    </h3>
                    <p className="text-xs font-bold text-amber-600 mt-0.5">
                      {demo.tagline}
                    </p>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {demo.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Metrics Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 p-6 sm:p-8 text-white shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {metrics.map((m, idx) => (
              <div key={idx} className="space-y-1 relative">
                <div className="font-heading font-black text-3xl sm:text-4xl text-amber-400">
                  {m.value}
                </div>
                <div className="font-semibold text-xs sm:text-sm text-stone-200">
                  {m.label}
                </div>
                <div className="text-[11px] text-stone-400">
                  {m.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
