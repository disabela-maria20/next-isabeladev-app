type DataLayerEvent = {
  event: string;
} & Record<string, unknown>;

export function trackEvent(data: DataLayerEvent) {
  if (typeof window === 'undefined') {
    return;
  }

  const dataLayer = (window.dataLayer ?? []) as DataLayerEvent[];
  dataLayer.push(data);
  window.dataLayer = dataLayer;
}
