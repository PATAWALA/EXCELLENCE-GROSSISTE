import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "33751174535"; // +33 7 51 17 45 35 sans le +

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  }).format(value);
}

export function buildWhatsAppMessage(
  items: { name: string; brand: string; qty: number; price: number }[],
  total: number
): string {
  const lines = items.map(
    (i) =>
      `• ${i.name} (${i.brand}) × ${i.qty} = ${formatPrice(i.price * i.qty)}`
  );
  const text =
    `🛍️ *Nouvelle commande B2B — EXCELLENCE GROSSISTE*\n\n` +
    lines.join("\n") +
    `\n\n━━━━━━━━━━━━━━━━━━\n` +
    `💰 *TOTAL HT : ${formatPrice(total)}*\n\n` +
    `Merci de me confirmer la disponibilité et le mode de livraison (Retrait Aubervilliers / Livraison).`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}