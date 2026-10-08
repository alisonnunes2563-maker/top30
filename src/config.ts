/**
 * Configuração Central do Desafio Top 30 - Top Academia
 * 
 * O link do grupo de WhatsApp é definido aqui no chat da IA do Google.
 * Para alterar o link, basta informar o novo link aqui na conversa.
 */

export const CONFIG = {
  // Link oficial do grupo de WhatsApp do Top 30
  WHATSAPP_GROUP_URL: 'https://chat.whatsapp.com/JSEUW519mIyDAsbfspYCh0?s=sw&p=i&mlu=4&ilr=4',
  
  // Textos dos botões de Call To Action (CTA)
  CTA_PRIMARY_TEXT: 'QUERO ENTRAR NO GRUPO DO TOP 30',
  CTA_FINAL_TEXT: 'ENTRAR NO GRUPO DO TOP 30',
  CTA_STICKY_MOBILE_TEXT: 'ENTRAR NO GRUPO DO TOP 30',
  
  // Microcopy persuasiva de apoio aos CTAs
  CTA_MICROCOPY: 'Clique para entrar no grupo exclusivo do Top 30.',
  
  // Informações da academia
  BRAND_NAME: 'Top Academia',
  PROGRAM_NAME: 'Top 30',
};

/**
 * Retorna o link oficial do WhatsApp configurado no projeto
 */
export function getActiveWhatsAppLink(): string {
  return CONFIG.WHATSAPP_GROUP_URL;
}
