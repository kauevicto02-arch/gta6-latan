const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "fbclid",
  "gclid",
  "ttclid",
  "src",
  "sck",
] as const;

const STORAGE_KEY = "checkout_tracking_params";

type TrackingParams = Record<string, string>;

function getSavedTrackingParams(): TrackingParams {
  if (typeof window === "undefined") return {};

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);

    if (!saved) return {};

    const parsed: unknown = JSON.parse(saved);

    if (typeof parsed !== "object" || parsed === null) {
      return {};
    }

    return parsed as TrackingParams;
  } catch {
    return {};
  }
}

export function captureTrackingParams(): void {
  if (typeof window === "undefined") return;

  const currentParams = new URLSearchParams(window.location.search);
  const savedParams = getSavedTrackingParams();

  TRACKING_KEYS.forEach((key) => {
    const value = currentParams.get(key);

    if (value) {
      savedParams[key] = value;
    }
  });

  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(savedParams),
    );
  } catch {
    // Mantém o restante da página funcionando se o storage estiver bloqueado.
  }
}

export function buildTrackedCheckoutUrl(
  baseCheckoutUrl: string,
): string {
  if (typeof window === "undefined") {
    return baseCheckoutUrl;
  }

  captureTrackingParams();

  const checkoutUrl = new URL(baseCheckoutUrl);
  const trackingParams = getSavedTrackingParams();

  Object.entries(trackingParams).forEach(([key, value]) => {
    if (!value) return;

    // Não substitui parâmetros que já existem no checkout.
    if (checkoutUrl.searchParams.has(key)) {
      return;
    }

    checkoutUrl.searchParams.set(key, value);
  });

  return checkoutUrl.toString();
}