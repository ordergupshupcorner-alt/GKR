import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS } from '../data/menuData';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-100/40 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
              Real Foodie Love
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
              Stories Shared Over <span className="text-amber-600">Great Food</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              See how Gupshup Corner satisfies taste cravings for foodies of every generation.
            </p>
          </div>

          {/* Rating Aggregate Pill */}
          <div className="bg-stone-50 border border-stone-200/90 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xs">
            <div className="font-heading font-black text-4xl text-stone-950">
              4.9
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-stone-600">
                Based on <strong className="text-stone-900">2,400+</strong> Google & Direct Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="relative rounded-3xl bg-stone-50/70 border border-stone-200 hover:border-amber-300 p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-stone-300 group-hover:text-amber-400 transition-colors" />
                </div>

                {/* Feedback Comment */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal italic">
                  "{review.comment}"
                </p>

                {/* Favorite Dish Pill */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-0.5">
                    Favorite Craving:
                  </span>
                  <span className="text-xs font-bold text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded-md inline-block">
                    {review.favoriteDish}
                  </span>
                </div>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 mt-6 border-t border-stone-200/80 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <h4 className="font-heading font-bold text-stone-900 text-xs sm:text-sm truncate">
                      {review.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  </div>
                  <p className="text-[11px] text-stone-500 truncate">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
