import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from 'lucide-react';
import { FAQS, STORE_PHONE, STORE_WHATSAPP } from '../data/menuData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-stone-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            Frequently Asked Questions
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Got Questions? <span className="text-amber-600">We've Got Answers.</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Everything you need to know about our food, preparation, express delivery, and custom orders.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200 bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-50/70 transition-colors"
                >
                  <span className="font-heading font-extrabold text-stone-900 text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-amber-100 text-amber-700' : 'text-stone-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-stone-600 text-sm sm:text-base leading-relaxed border-t border-stone-100 pt-3 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Contact Card */}
        <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading font-bold text-stone-900 text-lg">
              Still have a specific query or dietary need?
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              Our kitchen captain is always happy to chat and customize your meal.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${STORE_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${STORE_PHONE}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-amber-400 font-heading font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Hotline</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
