import { cookies } from 'next/headers'

export async function getLocale() {
  // Try to get locale from cookie first
  const cookieStore = cookies()
  const localeCookie = cookieStore.get('locale')
  
  if (localeCookie && ['zh', 'en', 'es', 'fr'].includes(localeCookie.value)) {
    return localeCookie.value
  }

  // Default to Chinese
  return 'zh'
}