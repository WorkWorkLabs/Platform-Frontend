import Link from "next/link"

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">招聘网站分类</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">按语言分类</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/categories/chinese" className="text-emerald-600 hover:underline">
                中文网站
              </Link>
            </li>
            <li>
              <Link href="/categories/english" className="text-emerald-600 hover:underline">
                英文网站
              </Link>
            </li>
            <li>
              <Link href="/categories/japanese" className="text-emerald-600 hover:underline">
                日语网站
              </Link>
            </li>
            <li>
              <Link href="/categories/multilingual" className="text-emerald-600 hover:underline">
                多语言网站
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">按类型分类</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/categories/web3" className="text-emerald-600 hover:underline">
                Web3招聘
              </Link>
            </li>
            <li>
              <Link href="/categories/remote" className="text-emerald-600 hover:underline">
                远程工作
              </Link>
            </li>
            <li>
              <Link href="/categories/blockchain" className="text-emerald-600 hover:underline">
                区块链
              </Link>
            </li>
            <li>
              <Link href="/categories/crypto" className="text-emerald-600 hover:underline">
                加密货币
              </Link>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">按地区分类</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/categories/global" className="text-emerald-600 hover:underline">
                全球
              </Link>
            </li>
            <li>
              <Link href="/categories/asia" className="text-emerald-600 hover:underline">
                亚洲
              </Link>
            </li>
            <li>
              <Link href="/categories/north-america" className="text-emerald-600 hover:underline">
                北美
              </Link>
            </li>
            <li>
              <Link href="/categories/europe" className="text-emerald-600 hover:underline">
                欧洲
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
