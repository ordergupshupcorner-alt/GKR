import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, Search, ArrowRight, UtensilsCrossed } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_PHONE, STORE_PHONE_FORMATTED } from '../data/menuData';

interface NavbarProps {
  onSearchClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const { itemCount, subtotal, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: '🔥 Combo Deals', href: '#combos', badge: 'SAVE UP TO ₹60' },
    { name: 'Menu', href: '#menu' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Love & Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/90 border-b border-amber-100/70 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 text-stone-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
            <UtensilsCrossed className="w-6 h-6 stroke-[2.2]" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-black text-2xl tracking-tight text-stone-900 group-hover:text-amber-600 transition-colors">
                GUPSHUP
              </span>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-red-600">
                CORNER
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] font-bold tracking-widest text-stone-500 uppercase -mt-0.5">
              BURGERS • MOMOS • INDO-CHINESE
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-3.5 py-2 text-sm font-semibold text-stone-700 hover:text-stone-950 hover:bg-amber-50 rounded-xl transition-all duration-200 flex items-center gap-1.5 group"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="bg-red-50 text-red-600 border border-red-200 text-[10px] font-bold px-1.5 py-0.5 rounded-full tracking-wide">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Search trigger */}
          <button
            onClick={onSearchClick}
            aria-label="Search Dishes"
            className="p-2.5 rounded-xl text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
            title="Search dishes"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Call direct button */}
          <a
            href={`tel:${STORE_PHONE}`}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-xl transition-all border border-stone-200"
          >
            <Phone className="w-3.5 h-3.5 text-stone-700" />
            <span>{STORE_PHONE_FORMATTED}</span>
          </a>

          {/* Cart Trigger Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-stone-950 to-stone-900 hover:from-black hover:to-stone-900 text-white shadow-md shadow-stone-900/15 hover:shadow-lg hover:shadow-stone-900/25 active:scale-95 transition-all duration-200 cursor-pointer font-medium"
          >
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-stone-950 animate-bounce">
                  {itemCount}
                </span>
              )}
            </div>
            <span className="hidden md:inline font-semibold text-sm">Cart</span>
            {subtotal > 0 && (
              <span className="bg-white/15 px-2 py-0.5 rounded-md text-xs font-bold text-amber-300">
                ₹{subtotal}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold text-stone-800 hover:bg-amber-50 hover:text-amber-700 transition-colors"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <a
              href={`tel:${STORE_PHONE}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-500 text-stone-950 font-bold text-sm shadow-sm active:scale-98 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Kitchen: {STORE_PHONE_FORMATTED}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCartOpen(true);
              }}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-stone-950 text-white font-bold text-sm active:scale-98 transition-all"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>View Cart & Order ({itemCount} items)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
