import React from 'react';
import { getActiveWhatsAppLink, CONFIG } from '../config';

interface WhatsAppButtonProps {
  text?: string;
  subtext?: string;
  size?: 'default' | 'large' | 'compact';
  fullWidth?: boolean;
  className?: string;
  showMicrocopy?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  text = CONFIG.CTA_PRIMARY_TEXT,
  subtext = CONFIG.CTA_MICROCOPY,
  size = 'large',
  fullWidth = true,
  className = '',
  showMicrocopy = true,
}) => {
  const link = getActiveWhatsAppLink();

  const sizeClasses = {
    compact: 'py-3 px-5 text-sm sm:text-base font-bold',
    default: 'py-4 px-6 text-base sm:text-lg font-extrabold',
    large: 'py-4 sm:py-5 px-6 sm:px-8 text-base sm:text-xl font-black',
  }[size];

  return (
    <div className={`flex flex-col items-center ${fullWidth ? 'w-full' : ''} ${className}`}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          ${sizeClasses}
          ${fullWidth ? 'w-full max-w-md' : 'inline-flex'}
          relative group flex items-center justify-center gap-3
          bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa50]
          text-neutral-950 uppercase tracking-tight
          rounded-xl shadow-xl hover:shadow-[0_0_30px_rgba(37,211,102,0.45)]
          transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0
          cursor-pointer select-none text-center
          whatsapp-cta-glow
        `}
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 fill-current text-neutral-950"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.101-.476-.15-.677.15-.201.302-.778.98-.954 1.18-.175.201-.351.226-.652.075-.302-.151-1.273-.469-2.425-1.498-.897-.8-1.503-1.789-1.68-2.09-.176-.301-.019-.464.132-.614.136-.135.302-.351.453-.527.15-.176.201-.301.301-.502.101-.201.05-.377-.025-.527-.075-.151-.678-1.633-.929-2.235-.245-.586-.494-.506-.678-.515-.176-.008-.377-.01-.578-.01-.201 0-.527.075-.803.376-.276.302-1.054 1.03-1.054 2.512 0 1.482 1.079 2.912 1.23 3.113.151.201 2.123 3.242 5.143 4.547.718.311 1.279.497 1.716.636.721.23 1.378.197 1.898.119.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.076-.126-.277-.202-.578-.352z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.661 1.434 5.178L2 22l4.982-1.408A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.624 0-3.136-.458-4.428-1.252l-.317-.197-2.956.835.836-2.883-.214-.339A8.156 8.156 0 013.8 12c0-4.522 3.678-8.2 8.2-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z" />
        </svg>

        <span className="truncate tracking-wide font-black">
          {text}
        </span>
      </a>

      {showMicrocopy && (
        <p className="mt-2 text-xs sm:text-sm text-neutral-400 text-center tracking-tight font-medium flex items-center justify-center gap-1.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          <span>{subtext}</span>
        </p>
      )}
    </div>
  );
};
