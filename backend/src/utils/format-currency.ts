import { INDIA_CURRENCY, INDIA_LOCALE } from "./locale";

// Convert rupees to paise when saving
export function convertToMinorUnit(amount: number) {
  return Math.round(amount * 100);
}

// Convert paise to rupees when retrieving
export function convertToMajorUnit(amount: number) {
  return amount / 100;
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat(INDIA_LOCALE, {
    style: "currency",
    currency: INDIA_CURRENCY,
  }).format(amount);
}
