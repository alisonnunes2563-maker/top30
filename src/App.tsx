import React from 'react';
import { HeroSection } from './components/HeroSection';
import { BenefitsSection } from './components/BenefitsSection';
import { FloatingMobileCta } from './components/FloatingMobileCta';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-red-600 selection:text-white bg-carbon-grid bg-radial-glow relative overflow-x-hidden">
      {/* Top subtle blood-red ambient light */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-[120px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Main landing container: 1ª e 2ª dobra */}
      <main className="relative z-10 w-full">
        {/* 1ª DOBRA: HERO COM HEADLINE & CTA IMEDIATO */}
        <HeroSection />

        {/* 2ª DOBRA: BLOCO DE DESEJO (PILARES DE TRANSFORMAÇÃO & CTA) */}
        <BenefitsSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MOBILE STICKY FLOATING CTA (<= 15% viewport height) */}
      <FloatingMobileCta />
    </div>
  );
}
