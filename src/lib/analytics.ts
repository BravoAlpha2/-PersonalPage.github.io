/** Tiny, provider-agnostic event tracker. Safe to call when analytics are disabled. */
declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string> }) => void;
    umami?: { track: (event: string, data?: Record<string, string>) => void };
  }
}
export function track(event: string, props: Record<string, string> = {}): void {
  try {
    if (window.plausible) window.plausible(event, { props });
    else if (window.umami) window.umami.track(event, props);
  } catch {
    /* analytics must never break the page */
  }
}
/** Wire `data-track="Event Name"` attributes to clicks once. */
export function bindTracking(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-track]').forEach((el) => {
    if (el.dataset.trackBound) return;
    el.dataset.trackBound = '1';
    el.addEventListener('click', () => track(el.dataset.track!, el.dataset.trackProps ? JSON.parse(el.dataset.trackProps) : {}));
  });
}
