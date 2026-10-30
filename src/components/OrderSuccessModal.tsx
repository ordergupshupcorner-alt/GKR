import React from 'react';
import { CheckCircle2, Phone, Clock, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_PHONE, STORE_PHONE_FORMATTED } from '../data/menuData';

export const OrderSuccessModal: React.FC = () => {
  const { isOrderSuccessModalOpen, setIsOrderSuccessModalOpen, lastOrderRef, clearCart } = useCart();

  if (!isOrderSuccessModalOpen) return null;

  const handleClose = () => {
    clearCart();
    setIsOrderSuccessModalOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-success-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-md rounded-3xl bg-white shadow-2xl p-6 sm:p-8 text-center space-y-6 border border-amber-200">
        {/* Animated Celebration Icon */}
        <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-500 to-yellow-400 mx-auto flex items-center justify-center shadow-lg shadow-amber-500/25">
          <CheckCircle2 className="w-10 h-10 text-stone-950" />
          <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold animate-ping opacity-75">
            🎉
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Order Dispatched To Kitchen
          </div>
          <h3 id="order-success-title" className="font-heading font-black text-2xl sm:text-3xl text-stone-900">
            Order Confirmed!
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            Your feast is now being freshly assembled with authentic spices and care.
          </p>
        </div>

        {/* Order Reference Box */}
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-1">
          <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider block">
            Order Reference
          </span>
          <p className="font-mono font-black text-2xl text-stone-900 tracking-wider">
            #{lastOrderRef || '750866'}
          </p>
          <div className="flex items-center justify-center gap-1 text-xs text-stone-600 pt-1">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Estimated Kitchen Dispatch: <strong>20 - 30 Mins</strong></span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <a
            href={`tel:${STORE_PHONE}`}
            className="w-full py-3.5 px-4 rounded-xl bg-stone-950 hover:bg-black text-amber-400 font-heading font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
          >
            <Phone className="w-4 h-4" />
            <span>Call Hotline: {STORE_PHONE_FORMATTED}</span>
          </a>

          <button
            onClick={handleClose}
            className="w-full py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-heading font-bold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            Done & Back to Menu
          </button>
        </div>

        <p className="text-[11px] text-stone-400">
          Payment can be settled through UPI QR code on delivery or cash upon arrival.
        </p>
      </div>
    </div>
  );
};
