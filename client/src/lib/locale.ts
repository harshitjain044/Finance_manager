export const INDIA_LOCALE = "en-IN";
export const INDIA_CURRENCY = "INR";
export const INDIA_TIMEZONE = "Asia/Kolkata";

export const formatDate = (
  value: string | number | Date,
  options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }
) =>
  new Intl.DateTimeFormat(INDIA_LOCALE, {
    timeZone: INDIA_TIMEZONE,
    ...options,
  }).format(new Date(value));

export const formatCompactDate = (value: string | number | Date) =>
  formatDate(value, {
    day: "numeric",
    month: "short",
  });

export const formatLongDate = (value: string | number | Date) =>
  formatDate(value, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
