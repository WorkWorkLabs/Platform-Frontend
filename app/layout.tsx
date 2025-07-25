import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import './globals.css'
 
export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  // Use default locale for now to avoid issues
  const locale = 'zh';
  
  // Get messages for the default locale
  const messages = await import(`../messages/${locale}.json`).then(m => m.default);
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}