export default function Home() {
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
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">远程招聘网站导航</h1>
                <p className="mt-1 text-gray-600">汇集全球优质远程工作与Web3招聘平台</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
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
          {/* AbetterWeb3 */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-emerald-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-emerald-200 rounded flex items-center justify-center text-emerald-600 font-bold">
                    A
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">AbetterWeb3</h2>
                  <p className="mt-1 text-sm text-gray-500">中文</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  AbetterWeb3是一个基于Notion应用程序的中文Web3招聘社区。由Web3行业从业者创建，旨在为Web3行业提供更好的招聘服务。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://abetterweb3.notion.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Blockchain.works-hub.com */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-blue-200 rounded flex items-center justify-center text-blue-600 font-bold">
                    B
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Blockchain.works-hub</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  Discover the best Blockchain opportunities with Blockchain Works.
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://blockchain.works-hub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Cryptocurrency Jobs */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-yellow-200 rounded flex items-center justify-center text-yellow-600 font-bold">
                    C
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Cryptocurrency Jobs</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  Cryptocurrency Jobs 是一个Web3招聘网站。它的目标是为数字货币和区块链行业提供最好的人才招聘服务。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://cryptocurrencyjobs.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Crypto.jobs */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-purple-200 rounded flex items-center justify-center text-purple-600 font-bold">
                    C
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Crypto.jobs</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  CryptoJobs是一家Web3招聘网站。它旨在连接数字货币和区块链领域的雇主和求职者。该网站提供充满活力的工作机会，适合具有编程、市场营销、审计和其他各种技能的求职者。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://crypto.jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Cryptojobs.com */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-red-200 rounded flex items-center justify-center text-red-600 font-bold">
                    C
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Cryptojobs.com</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  Cryptojobs.com 是连续创业者Carl Runefelt建立的招聘平台，该平台旨在为 Web3 组织和人才之间搭建桥梁。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://www.cryptojobs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* CryptoJobslist */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-green-200 rounded flex items-center justify-center text-green-600 font-bold">
                    C
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">CryptoJobslist</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">CryptoJobslist是一个专注于加密货币和区块链行业的招聘平台。</p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://CryptoJobslist.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* DeFi Jobs */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-indigo-200 rounded flex items-center justify-center text-indigo-600 font-bold">
                    D
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">DeFi Jobs</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  DeFi.jobs是一个专门为金融领域的去中心化金融（DeFi）项目提供招聘服务的网站。该网站的目标是建立一个透明、可靠、高效的招聘平台，帮助有意愿加入DeFi行业的人才快速找到合适的职位。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://www.defi.jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* DeJob */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-pink-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-pink-200 rounded flex items-center justify-center text-pink-600 font-bold">
                    D
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">DeJob</h2>
                  <p className="mt-1 text-sm text-gray-500">中文 英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  DeJob，是一个专注于Web3的公益性质招聘求职平台。(注：从2025年年初开始，Dejob提交岗位超过1个需要收费)
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://www.dejob.top/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* 登链招聘 */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-orange-200 rounded flex items-center justify-center text-orange-600 font-bold">
                    登
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">登链招聘</h2>
                  <p className="mt-1 text-sm text-gray-500">中文</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  登链社区是一个开放的社区，社区成员一起贡献、相互分享并引以为傲。以上链接是登链官网官网的招聘专栏。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://learnblockchain.cn/jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* 电鸭社区 */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-yellow-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-yellow-200 rounded flex items-center justify-center text-yellow-600 font-bold">
                    电
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">电鸭社区</h2>
                  <p className="mt-1 text-sm text-gray-500">中文</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  电鸭社区是国内最早的远程工作社区，也是互联网工作者们的聚集地。「只工作，不上班」是他们倡导的工作态度。你可以在电鸭社区找到Web3远程工作。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://eleduck.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Dynamite Jobs */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-red-200 rounded flex items-center justify-center text-red-600 font-bold">
                    D
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Dynamite Jobs</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">初创/小型企业远程招聘平台</p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://dynamitejobs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Foresight news｜Jobs */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-blue-200 rounded flex items-center justify-center text-blue-600 font-bold">
                    F
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Foresight news｜Jobs</h2>
                  <p className="mt-1 text-sm text-gray-500">中文+英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  Froesight是一家聚焦Crypto 及Web3
                  等前沿领域的中文内容平台，秉持中立、客观及开放的态度，希望与读者们一起「遇见」未来。其中的「Job」板块
                  有相当多的Web3招聘信息发布 而且可以一键筛选"只看中文招聘"。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://foresightnews.pro/job"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* JustRemote */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-teal-200 rounded flex items-center justify-center text-teal-600 font-bold">
                    J
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">JustRemote</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">小众的远程招聘平台（部分职位需要付费查看）</p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://justremote.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Job Protocol */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-indigo-200 rounded flex items-center justify-center text-indigo-600 font-bold">
                    J
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Job Protocol</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  The OpenRecruitment Network. Job Protocol connects companies with an ecosystem of talent partners to
                  hire the right candidate faster and cheaper.
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://www.jobprotocol.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn/领英 */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-blue-200 rounded flex items-center justify-center text-blue-600 font-bold">
                    L
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">LinkedIn/领英</h2>
                  <p className="mt-1 text-sm text-gray-500">全语言</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  领英作为职场社交软件，其中亦可以找到Web3/Remote工作，虽然查找难度可能相比纯Web3招聘平台要难。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Rebase */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-green-200 rounded flex items-center justify-center text-green-600 font-bold">
                    R
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Rebase</h2>
                  <p className="mt-1 text-sm text-gray-500">中文</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">Rebase 开发者社区的招聘信息</p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://rebase.network/job"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Remote3.co */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-purple-200 rounded flex items-center justify-center text-purple-600 font-bold">
                    R
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Remote3.co</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  Discover 4,100+ remote Web3 Jobs around the world at companies working on blockchain, smart contract,
                  DeFi, NFT, crypto etc.
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://remote3.co/web3-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* @Remote_cn(远程工作者) */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-teal-200 rounded flex items-center justify-center text-teal-600 font-bold">
                    R
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">@Remote_cn(远程工作者)</h2>
                  <p className="mt-1 text-sm text-gray-500">中文</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  中文区比较大的远程工作Telegram频道，会收集多家远程工作平台的招聘信息流。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://t.me/remote_cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Remote-Jobs */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gray-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-gray-200 rounded flex items-center justify-center text-gray-600 font-bold">
                    R
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Remote-Jobs</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  一个拥有27.8k（截止到2024.05）stars数量的GitHub仓库，内容是支持远程工作公司汇总列表，一共有700+公司。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://github.com/remoteintech/remote-jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* RemoteOK */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-red-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-red-200 rounded flex items-center justify-center text-red-600 font-bold">
                    R
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">RemoteOK</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">独立开发者做的远程工作平台，信息容易筛选，有很多大厂相关信息。</p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://remoteok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Smart Deer */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-amber-200 rounded flex items-center justify-center text-amber-600 font-bold">
                    S
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Smart Deer</h2>
                  <p className="mt-1 text-sm text-gray-500">英语+中文</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  SmartDeer 是面向全球市场、专注于 Web3 项目和人才连接的招聘平台，为全球 Web3 builders
                  提供更灵活、更高薪、更面向未来、更高价值捕获的机会。目前有 iOS 和 Android 双端 app。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://smartdeer.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Stablegram */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-blue-200 rounded flex items-center justify-center text-blue-600 font-bold">
                    S
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Stablegram</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  We help talent to find the most promising Web3 companies. Find a crypto career you'll love.
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://stablegram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Talentverse Platform */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-purple-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-purple-200 rounded flex items-center justify-center text-purple-600 font-bold">
                    T
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Talentverse Platform</h2>
                  <p className="mt-1 text-sm text-gray-500">中文 英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  Talentverse是一家刚创立不久的专注于Web3及AI等新兴领域的人才招聘平台，致力于为区块链和人工智能领域的企业提供最优质的人才服务。团队Base在亚洲和北美，由资深猎头、知名项目方运营专家和名校区块链协会骨干组成。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://talent-verse.notion.site/Talentverse-690e2af2939346b1bace7a7bb959c12d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Solana Job */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-emerald-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-emerald-200 rounded flex items-center justify-center text-emerald-600 font-bold">
                    S
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Solana Job</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  Solana Job 是Solana 官方提供的一个招聘平台，其中大部分机会是Solana
                  链的，也有少量其他链的机会。但是基本都是海外的一些公司，因此除了专业技能外,对于英语要求较高。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://jobs.solana.com/jobs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* UpWork */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-green-200 rounded flex items-center justify-center text-green-600 font-bold">
                    U
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">UpWork</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  Upwork
                  是一个全球性的自由职业市场平台，它连接了来自世界各地的自由职业者和客户。自由职业者可以在该平台上提供各种服务，包括但不限于编程、设计、写作、翻译、营销等。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://www.upwork.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Web3 Career */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-cyan-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-cyan-200 rounded flex items-center justify-center text-cyan-600 font-bold">
                    W
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Web3 Career</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  Web3
                  Career是一个专门面向Web3行业的职业平台，旨在帮助招聘者在数字货币和区块链领域找到最佳的人才，同时也为求职者提供了一个寻找Web3行业工作机会的平台。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://web3.career/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Web3 Expert */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-indigo-200 rounded flex items-center justify-center text-indigo-600 font-bold">
                    W
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Web3 Expert</h2>
                  <p className="mt-1 text-sm text-gray-500">日语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  日本首个专门面向Web3领域的招聘网站。包括全职、自由职业和兼职，适合希望在Web3创业公司或远程工作的人。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://web3-expert.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Web3 Frontend */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-orange-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-orange-200 rounded flex items-center justify-center text-orange-600 font-bold">
                    W
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Web3 Frontend</h2>
                  <p className="mt-1 text-sm text-gray-500">中文</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  一个非常全面的、分享Web3前端信息的公众号平台。具有严格的筛查机制，提高Web3前端，移动端UX产品体验。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-orange-600 hover:text-orange-500"
                >
                  关注公众号
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Web3 Job Database */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-teal-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-teal-200 rounded flex items-center justify-center text-teal-600 font-bold">
                    W
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Web3 Job Database</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">一个含有Web3招聘信息汇总的谷歌表格</p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://docs.google.com/spreadsheets/d/1jxymnRoNf05quL4QCr69702AEAC1QQroX-_gl9iNz_A/edit#gid=870926729"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Web3-Jobs.jp */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-rose-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-rose-200 rounded flex items-center justify-center text-rose-600 font-bold">
                    W
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Web3-Jobs.jp</h2>
                  <p className="mt-1 text-sm text-gray-500">日语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  ゲーム・エンタメ業界に特化したフリーランスエージェントであるコンフィデンス・プロが提供するWeb3.0特化の案件サイトです。聚焦于快速匹配需求，界面更加简洁流畅。使用体验不错。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://web3-job.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* who-is-hiring / rebase-network */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-slate-200 rounded flex items-center justify-center text-slate-600 font-bold">
                    W
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">who-is-hiring / rebase-network</h2>
                  <p className="mt-1 text-sm text-gray-500">中文</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  一个收集区块链工作机会的GitHub仓库。该平台从各种科技公司收集和汇总了工作空缺。该存储库对有兴趣找到技术工作机会的求职者有帮助，因为它提供了一个集中的位置来浏览多家公司的工作清单。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://github.com/rebase-network/who-is-hiring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-slate-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* WithB */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-violet-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-violet-200 rounded flex items-center justify-center text-violet-600 font-bold">
                    W
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">WithB</h2>
                  <p className="mt-1 text-sm text-gray-500">日语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">
                  ブロックチェーン・暗号資産・WEB3業界の求人メディア。会提供详细的企业背景信息和职位说明，更适合寻找长远职业发展的大佬。
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://withb.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-violet-600 hover:text-violet-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Wellfound */}
          <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-amber-100 rounded-lg p-3">
                  <div className="h-12 w-12 bg-amber-200 rounded flex items-center justify-center text-amber-600 font-bold">
                    W
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold text-gray-900">Wellfound</h2>
                  <p className="mt-1 text-sm text-gray-500">英语</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600 text-sm">初创公司为主的远程招聘平台</p>
              </div>
              <div className="mt-4 flex justify-end">
                <a
                  href="https://wellfound.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-amber-600 hover:text-amber-500"
                >
                  访问网站
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500">
            <p className="text-sm font-medium">Made in WorkWork</p>
            <p className="text-sm mt-2">为远程及Web3行业发展持续泵入新鲜血液</p>
            <p className="text-sm mt-2">远程求职与职场社交平台 ——— WorkWork</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
