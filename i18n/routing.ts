import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['zh', 'en', 'es', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'zh',
  
  // Don't use locale prefix in URLs
  localePrefix: 'never'
});