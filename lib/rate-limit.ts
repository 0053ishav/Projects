type RateLimitEntry = {
  count: number;
  lastReset: number;
};

const RATE_LIMIT = 10;
const WINDOW = 60 * 1000;

const ipStore = new Map<string, RateLimitEntry>();

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipStore.get(ip);

  if (!entry) {
    ipStore.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (now - entry.lastReset > WINDOW) {
    ipStore.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (entry.count >= RATE_LIMIT) {
    return false;
  }

  entry.count += 1;
  return true;
}
