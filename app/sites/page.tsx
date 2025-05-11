import { SiteCard } from "@/components/site-card"

// 网站数据
const sites = [
  {
    name: "AbetterWeb3",
    logo: "/placeholder.svg?height=48&width=48",
    language: "中文",
    description:
      "AbetterWeb3是一个基于Notion应用程序的中文Web3招聘社区。由Web3行业从业者创建，旨在为Web3行业提供更好的招聘服务。",
    url: "https://abetterweb3.notion.site/",
    color: "bg-emerald-100",
  },
  {
    name: "Blockchain.works-hub",
    logo: "/placeholder.svg?height=48&width=48",
    language: "英语",
    description: "Discover the best Blockchain opportunities with Blockchain Works.",
    url: "https://blockchain.works-hub.com/",
    color: "bg-blue-100",
  },
  {
    name: "Cryptocurrency Jobs",
    logo: "/placeholder.svg?height=48&width=48",
    language: "英语",
    description:
      "Cryptocurrency Jobs 是一个Web3招聘网站。它的目标是为数字货币和区块链行业提供最好的人才招聘服务。该网站提供全球范围内的远程和本地工作机会，比如 NFT、DAO、DeFi 等等。",
    url: "https://cryptocurrencyjobs.co/",
    color: "bg-yellow-100",
  },
  // 可以添加更多网站数据
]

export default function SitesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">所有招聘网站</h1>

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
    </div>
  )
}
