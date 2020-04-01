export function urlFromObject (url, obj) {
  const params = obj ? Object.entries(obj).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&') : '';

  return `${url}?${params}`;
}

