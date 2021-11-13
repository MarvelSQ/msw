/**
 * Returns an absolute URL based on the given path.
 */
export function getAbsoluteUrl(path: string, baseUrl?: string): string {
  // Ignore url with any protocol or starts with *、:
  if (/^[a-z][a-z0-9+.-]*:/.test(path) || /^[:*]/.test(path)) {
    return path
  }

  // Resolve a relative request URL against a given custom "baseUrl"
  // or the current location (in the case of browser/browser-like environments).
  const origin = baseUrl || (typeof location !== 'undefined' && location.origin)

  return origin
    ? // Encode and decode the path to preserve escaped characters.
      decodeURI(new URL(encodeURI(path), origin).href)
    : path
}
