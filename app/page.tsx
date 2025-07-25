import { loadJobSites } from '@/lib/data-loader'
import { SiteCard } from '@/components/site-card'
import { LanguageSwitcher } from '@/components/language-switcher'
import { getTranslations } from 'next-intl/server'

export default async function Home() {
  const t = await getTranslations('nav')
  const tFooter = await getTranslations('footer')
  const sites = loadJobSites()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 mr-4">
                <img src="/images/workwork-logo.png" alt="WorkWork Logo" className="h-16 w-16" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{t('title')}</h1>
                <p className="mt-1 text-gray-600">{t('subtitle')}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <LanguageSwitcher />
              <a href="https://t.me/WorkWorkWeb3" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                <img
                  src="https://img.shields.io/badge/Telegram-WorkWork-%232CA5E0?style=flat-square&logo=telegram"
                  alt="Telegram WorkWork"
                />
              </a>
              <a
                href="https://github.com/WorkWorkWeb3/Web3-Recruitment-Platform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://badgen.net/github/stars/WorkWorkWeb3/Web3-Recruitment-Platform?icon=github&color=black"
                  alt="GitHub stars"
                />
              </a>
              <a
                href="https://github.com/WorkWorkWeb3/Web3-Recruitment-Platform"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://badgen.net/github/forks/WorkWorkWeb3/Web3-Recruitment-Platform?icon=github&color=black"
                  alt="GitHub forks"
                />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((site, index) => (
            <SiteCard
              key={index}
              name={site.name}
              logo={site.logo}
              language={site.language}
              description={site.description}
              url={site.url}
              color={site.color}
            />
          ))}
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500">
            <p className="text-sm font-medium">{tFooter('madeIn')}</p>
            <p className="text-sm mt-2">{tFooter('description1')}</p>
            <p className="text-sm mt-2">{tFooter('description2')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
