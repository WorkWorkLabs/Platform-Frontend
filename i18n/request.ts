import {getRequestConfig} from 'next-intl/server';
import {cookies} from 'next/headers';
import {routing} from './routing';
 
export default getRequestConfig(async ({locale}) => {
  // Get locale from cookie if not provided
  if (!locale) {
    const cookieStore = await cookies();
    const localeCookie = cookieStore.get('locale');
    locale = localeCookie?.value || routing.defaultLocale;
  }
  
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});