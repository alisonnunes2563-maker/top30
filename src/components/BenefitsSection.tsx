import React from 'react';
import { Dumbbell, UserCheck, Utensils, Activity } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

interface BenefitItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const benefits: BenefitItem[] = [
  {
    number: '01',
    title: 'TREINO PERSONALIZADO',
    subtitle: 'Adeus treinos genéricos',
    description: 'Um planejamento pensado exclusivamente para o seu corpo, sua rotina e suas metas. Chega de improvisar na academia sem saber se está no caminho certo.',
    icon: Dumbbell,
  },
  {
    number: '02',
    title: 'ACOMPANHAMENTO PROFISSIONAL',
    subtitle: 'Você não precisa fazer tudo sozinho',
    description: 'Orientação técnica de quem entende do assunto para corrigir execuções, tirar dúvidas e garantir que você mantenha a constância durante os 30 dias.',
    icon: UserCheck,
  },
  {
    number: '03',
    title: 'PLANO ALIMENTAR',
    subtitle: 'Estratégia prática sem dietas extremas',
    description: 'Alinhe sua nutrição com seu gasto calórico. Uma diretriz clara e sustentável para potencializar sua energia e acelerar a resposta do seu corpo.',
    icon: Utensils,
  },
  {
    number: '04',
    title: 'AVALIAÇÃO FÍSICA',
    subtitle: 'Acompanhe métricas reais',
    description: 'Monitore sua evolução com clareza objetiva do início ao encerramento do desafio. Veja na prática as transformações que o plano estruturado gera.',
    icon: Activity,
  },
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 max-w-4xl mx-auto border-t border-neutral-900">
      <div className="text-center mb-10 sm:mb-12">
        <span className="text-red-500 font-display text-lg tracking-widest uppercase font-bold">
          Pilares do Top 30
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-1 text-balance">
          Tudo que você precisa para <span className="text-red-500">não travar</span>
        </h2>
        <p className="font-body text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mt-2 text-balance">
          Não é mágica nem sorte. É um ecossistema completo pensado para tirar o atrito e conduzir você ao próximo nível.
        </p>
      </div>

      {/* Grid of 4 Desired Transformation Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.number}
              className="group relative bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-800 hover:border-red-900/70 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-950/70 border border-red-800/40 flex items-center justify-center text-red-500 group-hover:text-red-400 group-hover:scale-105 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-display text-2xl font-black text-neutral-700 group-hover:text-red-600/70 transition-colors">
                  {b.number}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight uppercase text-white group-hover:text-red-400 transition-colors">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-red-500/90 uppercase tracking-wider mb-3">
                  {b.subtitle}
                </p>
                <p className="font-body text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {b.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA at the end of the 2nd fold */}
      <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center text-center">
        <WhatsAppButton
          text="ENTRAR NO GRUPO DO TOP 30"
          subtext="Clique para entrar no grupo exclusivo do Top 30"
          size="large"
          fullWidth={true}
        />
      </div>
    </section>
  );
};
