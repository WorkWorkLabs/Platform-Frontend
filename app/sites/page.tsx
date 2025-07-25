import { SiteCard } from "@/components/site-card"
import { loadJobSites } from "@/lib/data-loader"

export default function SitesPage() {
  const sites = loadJobSites()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">所有招聘网站</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sites.map((site, index) => (
          <SiteCard
            key={index}
            name={site.name}
            logo="/placeholder.svg?height=48&width=48"
            language={site.language}
            description={site.description}
            url={site.url}
            color={site.color}
          />
        ))}
      </div>
    </div>
  )
}
