import React from 'react';
import { Phone, Clock, MapPin, MessageSquare, UtensilsCrossed, Heart, ShieldCheck } from 'lucide-react';
import { STORE_PHONE, STORE_PHONE_FORMATTED, STORE_WHATSAPP, STORE_TIMINGS, STORE_LOCATION } from '../data/menuData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-400 text-stone-950 flex items-center justify-center font-bold shadow-md">
                <UtensilsCrossed className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="font-heading font-black text-2xl text-white tracking-tight">
                  GUPSHUP <span className="text-red-500">CORNER</span>
                </span>
                <p className="text-[10px] text-stone-400 font-bold tracking-widest uppercase">
                  STREET BITES & CHAI TALKS
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              Your favorite neighborhood corner for crispy burgers, steaming Himalayan momos, wok-smoked noodles, and unforgettable evening gupshup with friends and family.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-stone-800 border border-stone-700 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Pure Vegetarian Kitchen Guarantee</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-extrabold text-white text-base tracking-wide">
              Popular Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  🍔 Smash Burgers (From ₹30)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  🥟 Kurkure & Gravy Momos
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  🥢 Hakka & Singapore Noodles
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  🍟 Peri-Peri & Loaded Fries
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  🥪 Triple Layer GSC Sandwiches
                </a>
              </li>
              <li>
                <a href="#combos" className="hover:text-amber-400 transition-colors">
                  🔥 Everyday Combo Deals (Save ₹60)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Kitchen Hotline & Timings */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-extrabold text-white text-base tracking-wide">
              Kitchen Hotline & Location
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={`tel:${STORE_PHONE}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-stone-800/80 border border-stone-700 hover:border-amber-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 uppercase font-bold block">Direct Order Hotline</span>
                  <span className="font-heading font-black text-white text-sm group-hover:text-amber-400 transition-colors">
                    {STORE_PHONE_FORMATTED}
                  </span>
                </div>
              </a>

              <a
                href={`https://wa.me/${STORE_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-stone-800/80 border border-stone-700 hover:border-emerald-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 uppercase font-bold block">WhatsApp Order Dispatch</span>
                  <span className="font-heading font-bold text-white text-sm group-hover:text-emerald-400 transition-colors">
                    Tap to Chat on WhatsApp
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-stone-400 pt-1">
                <Clock className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span>{STORE_TIMINGS}</span>
              </div>

              <div className="flex items-start gap-2.5 text-stone-400">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span>{STORE_LOCATION}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom sub-footer */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Gupshup Corner. All rights reserved. Made with love for authentic street food lovers.</p>
          <div className="flex items-center gap-1 text-stone-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>for great conversations</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
