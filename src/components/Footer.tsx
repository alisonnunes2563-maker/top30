import React from 'react';
import { TopLogo } from './TopLogo';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-10 px-4 sm:px-6 max-w-4xl mx-auto border-t border-neutral-900 text-center text-xs text-neutral-500 pb-24 sm:pb-12">
      <div className="flex flex-col items-center justify-center gap-4 mb-6">
        <TopLogo size="sm" />
        <p className="text-neutral-400 font-medium max-w-md text-balance">
          Desafio Top 30 · Uma campanha especial focada em acelerar resultados físicos com acompanhamento profissional.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-neutral-500 mb-6">
        <span>© {new Date().getFullYear()} Top Academia. Todos os direitos reservados.</span>
        <span>·</span>
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
          Ambiente Seguro
        </span>
      </div>

      <p className="text-[10px] text-neutral-600 max-w-lg mx-auto leading-normal">
        Este site não possui vínculo institucional direto com a Meta ou WhatsApp Inc. O WhatsApp é utilizado exclusivamente como canal de comunicação para o grupo exclusivo do desafio.
      </p>
    </footer>
  );
};
