import React from 'react';
import { StoreProvider } from './context/StoreContext';
import Navbar from './components/Navbar';
import AgencyBanner from './components/AgencyBanner';
import Hero from './components/Hero';
import EngineeringTeardown from './components/EngineeringTeardown';
import SavingsCalculator from './components/SavingsCalculator';
import BundleBuilder from './components/BundleBuilder';
import ClinicalProof from './components/ClinicalProof';
import CustomerReviews from './components/CustomerReviews';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import AgencyPitchModal from './components/AgencyPitchModal';

export default function App() {
  return (
    <StoreProvider>
      <div className="min-h-screen bg-obsidian-950 text-titanium-200 selection:bg-hydro-cyan/20 selection:text-hydro-cyan flex flex-col">
        {/* Navigation & Agency Header */}
        <Navbar />
        <AgencyBanner />

        {/* Main Storefront Experience */}
        <main className="flex-1">
          <Hero />
          <EngineeringTeardown />
          <SavingsCalculator />
          <BundleBuilder />
          <ClinicalProof />
          <CustomerReviews />
        </main>

        {/* Architectural Footer */}
        <Footer />

        {/* Interactive Modals & Slide-over Drawers */}
        <CartDrawer />
        <CheckoutModal />
        <AgencyPitchModal />
      </div>
    </StoreProvider>
  );
}
