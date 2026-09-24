/**
 * Deterministic 2-D value noise with fractal octaves.
 * Used only for *synthetic, clearly-labelled* illustrations (hero, demo). Not data.
 */
export function makeNoise(seed = 1) {
  let s = seed >>> 0 || 1;
  const rand = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296);
  const SIZE = 256;
  const perm = new Uint8Array(SIZE * 2);
  const grid = new Float32Array(SIZE);
  for (let i = 0; i < SIZE; i++) { perm[i] = i; grid[i] = rand(); }
  for (let i = SIZE - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; }
  for (let i = 0; i < SIZE; i++) perm[i + SIZE] = perm[i];
  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const val = (ix: number, iy: number) => grid[perm[(perm[ix & 255] + iy) & 255]];
  function noise(x: number, y: number): number {
    const x0 = Math.floor(x), y0 = Math.floor(y);
    const fx = fade(x - x0), fy = fade(y - y0);
    return lerp(lerp(val(x0, y0), val(x0 + 1, y0), fx), lerp(val(x0, y0 + 1), val(x0 + 1, y0 + 1), fx), fy);
  }
  function fbm(x: number, y: number, octaves = 4, lac = 2, gain = 0.5): number {
    let a = 0, amp = 1, f = 1, norm = 0;
    for (let i = 0; i < octaves; i++) { a += amp * noise(x * f, y * f); norm += amp; amp *= gain; f *= lac; }
    return a / norm;
  }
  return { noise, fbm, rand };
}

/** Marching-squares isolines for a scalar field. Returns [x1,y1,x2,y2] segments in grid coordinates. */
export function isolines(field: Float32Array, w: number, h: number, level: number): number[][] {
  const segs: number[][] = [];
  const at = (x: number, y: number) => field[y * w + x];
  const ip = (a: number, b: number) => (level - a) / (b - a || 1e-9);
  for (let y = 0; y < h - 1; y++) for (let x = 0; x < w - 1; x++) {
    const a = at(x, y), b = at(x + 1, y), c = at(x + 1, y + 1), d = at(x, y + 1);
    const idx = (a > level ? 8 : 0) | (b > level ? 4 : 0) | (c > level ? 2 : 0) | (d > level ? 1 : 0);
    if (idx === 0 || idx === 15) continue;
    const top = [x + ip(a, b), y], right = [x + 1, y + ip(b, c)], bottom = [x + ip(d, c), y + 1], left = [x, y + ip(a, d)];
    const push = (p: number[], q: number[]) => segs.push([p[0], p[1], q[0], q[1]]);
    switch (idx) {
      case 1: case 14: push(left, bottom); break;
      case 2: case 13: push(bottom, right); break;
      case 3: case 12: push(left, right); break;
      case 4: case 11: push(top, right); break;
      case 5: push(top, left); push(bottom, right); break;
      case 6: case 9: push(top, bottom); break;
      case 7: case 8: push(top, left); break;
      case 10: push(top, right); push(left, bottom); break;
    }
  }
  return segs;
}
