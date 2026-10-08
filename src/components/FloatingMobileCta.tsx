import React, { useEffect, useState } from 'react';
import { getActiveWhatsAppLink } from '../config';
import { ArrowRight } from 'lucide-react';

export const FloatingMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA only after scrolling past initial hero (e.g., 300px)
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const link = getActiveWhatsAppLink();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-neutral-950/95 backdrop-blur-md border-t border-red-900/40 shadow-2xl sm:hidden animate-fade-in-up">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 bg-[#25D366] active:bg-[#1caa50] text-neutral-950 font-black uppercase text-xs sm:text-sm tracking-wide rounded-xl flex items-center justify-center gap-2 shadow-lg whatsapp-cta-glow select-none"
        >
          {/* WhatsApp Icon */}
          <svg
            className="w-4 h-4 shrink-0 fill-current text-neutral-950"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.101-.476-.15-.677.15-.201.302-.778.98-.954 1.18-.175.201-.351.226-.652.075-.302-.151-1.273-.469-2.425-1.498-.897-.8-1.503-1.789-1.68-2.09-.176-.301-.019-.464.132-.614.136-.135.302-.351.453-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.151-.678-1.633-.929-2.235-.245-.586-.494-.506-.678-.515-.176-.008-.377-.01-.578-.01-.201 0-.527.075-.803.376-.276.302-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.151.201 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.721.23 1.378.197 1.898.119.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.076-.126-.277-.202-.578-.352z" />
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.661 1.434 5.178L2 22l4.982-1.408A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.624 0-3.136-.458-4.428-1.252l-.317-.197-2.956.835.836-2.883-.214-.339A8.156 8.156 0 013.8 12c0-4.522 3.678-8.2 8.2-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
          </svg>
          <span>ENTRAR NO GRUPO DO TOP 30</span>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </div>
  );
};
