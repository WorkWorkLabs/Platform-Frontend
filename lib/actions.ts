'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function setLocale(locale: string) {
  const cookieStore = await cookies()
  cookieStore.set('locale', locale, {
    path: '/',
    maxAge: 365 * 24 * 60 * 60, // 1 year
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  })
  
  // Redirect to refresh the page with new locale
  redirect('/')
}