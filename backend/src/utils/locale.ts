export const INDIA_LOCALE = "en-IN";
export const INDIA_CURRENCY = "INR";
export const INDIA_TIMEZONE = "Asia/Kolkata";

export function formatDateInIndia(
  value: string | number | Date,
  options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  }
) {
  return new Intl.DateTimeFormat(INDIA_LOCALE, {
    timeZone: INDIA_TIMEZONE,
    ...options,
  }).format(new Date(value));
}
