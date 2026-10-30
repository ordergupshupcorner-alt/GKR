import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { FeaturedCombos } from './components/FeaturedCombos';
import { MenuSection } from './components/MenuSection';
import { WhyGupshup } from './components/WhyGupshup';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ItemModal } from './components/ItemModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { SearchModal } from './components/SearchModal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-white text-stone-900 font-sans antialiased selection:bg-amber-400 selection:text-stone-950 flex flex-col">
        {/* Top Promotional Announcement Banner */}
        <TopBanner />

        {/* Sticky Glassmorphic Navbar */}
        <Navbar onSearchClick={() => setIsSearchModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* High-Impact Hero with interactive microinteractions */}
          <Hero />

          {/* All-Ages Social Proof & Metrics Strip */}
          <SocialProof />

          {/* Everyday Offers & Blockbuster Combos (From physical menu card) */}
          <FeaturedCombos />

          {/* Full Interactive Menu Showcase with category filters and search */}
          <MenuSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {/* Brand Benefits & Standards */}
          <WhyGupshup />

          {/* Real Customer Love across age groups */}
          <Testimonials />

          {/* Objections & Ordering FAQ Accordion */}
          <FaqSection />

          {/* High-Conversion Closing Call to Action */}
          <CtaSection />
        </main>

        {/* Site Footer */}
        <Footer />

        {/* Interactive Modals & Drawers */}
        <CartDrawer />
        <ItemModal />
        <OrderSuccessModal />
        <SearchModal
          isOpen={isSearchModalOpen}
          onClose={() => setIsSearchModalOpen(false)}
        />

        {/* Mobile Sticky Order Bar */}
        <FloatingMobileBar />
      </div>
    </CartProvider>
  );
}
