import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { Flame, ShieldCheck, Target, Users } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 sm:pt-14 pb-14 sm:pb-20 px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center text-center">
      {/* Campaign Badge / Special Notice */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-700/60 text-red-300 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 shadow-sm">
        <Flame className="w-4 h-4 text-red-400 shrink-0 animate-pulse" />
        <span>Desafio Especial Top Academia · Grupo Exclusivo</span>
      </div>

      {/* Main Headline */}
      <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[0.95] text-balance mb-5 sm:mb-6">
        30 dias para acelerar <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-400 drop-shadow-[0_4px_16px_rgba(220,38,38,0.4)]">
          seus resultados.
        </span>
      </h1>

      {/* Persuasive Subheadline */}
      <p className="font-body text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl text-balance font-normal leading-relaxed mb-8">
        Pare de depender apenas da motivação passageira e comece a seguir um método estruturado.
        Com o <strong className="text-white font-bold">Top 30</strong>, você recebe acompanhamento profissional diário, treino personalizado, estratégia alimentar e avaliação física para registrar sua evolução real do início ao fim.
      </p>

      {/* Main High-Converting WhatsApp CTA */}
      <div className="w-full flex justify-center mb-10">
        <WhatsAppButton
          text="QUERO ENTRAR NO GRUPO DO TOP 30"
          subtext="Clique para entrar no grupo exclusivo do Top 30"
          size="large"
          fullWidth={true}
        />
      </div>

      {/* Quick Trust Anchor (3 Trust Points without clutter) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-4 border-t border-neutral-800/80 w-full max-w-xl text-neutral-400 text-xs sm:text-sm font-medium">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-center">
          <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
          <span>Acompanhamento real</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-center">
          <Target className="w-4 h-4 text-red-500 shrink-0" />
          <span>Método comprovado</span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-center">
          <Users className="w-4 h-4 text-red-500 shrink-0" />
          <span>Comunidade focada</span>
        </div>
      </div>
    </section>
  );
};
