/** Prefix an absolute site path with the configured base (GitHub Pages project sites live under a sub-path). */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  if (path.startsWith('/#')) return `${base}/${path.slice(1)}`;
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}
