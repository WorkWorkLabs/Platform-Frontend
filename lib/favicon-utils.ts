/**
 * Generates a favicon URL from a website URL
 * Uses Google's favicon service as a fallback for better reliability
 */
export function getFaviconUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    const domain = urlObj.hostname
    
    // Use Google's favicon service for better reliability
    return `https://www.google.com/s2/favicons?sz=64&domain=${domain}`
  } catch (error) {
    console.warn('Invalid URL provided to getFaviconUrl:', url)
    return '/placeholder.svg?height=48&width=48'
  }
}

/**
 * Alternative favicon URL generators (can be used as fallbacks)
 */
export const faviconServices = {
  google: (domain: string) => `https://www.google.com/s2/favicons?sz=64&domain=${domain}`,
  duckduckgo: (domain: string) => `https://icons.duckduckgo.com/ip3/${domain}.ico`,
  yandex: (domain: string) => `https://favicon.yandex.net/favicon/${domain}`,
  direct: (domain: string) => `https://${domain}/favicon.ico`
}