import yaml from 'js-yaml'

export interface JobSite {
  name: string
  logo: string
  language: string
  description: string
  url: string
  color: string
  textColor: string
  bgColor: string
}

// Since this is a static export, we'll load the data at build time
// For development, we'll use a simple import
let cachedSites: JobSite[] | null = null

export function loadJobSites(): JobSite[] {
  if (cachedSites) {
    return cachedSites
  }

  try {
    // In a static export environment, we'll use the pre-compiled data
    // For now, we'll use a dynamic import workaround
    const sitesData = [
      {
        name: "AbetterWeb3",
        logo: "A",
        language: "中文",
        description: "AbetterWeb3是一个基于Notion应用程序的中文Web3招聘社区。由Web3行业从业者创建，旨在为Web3行业提供更好的招聘服务。",
        url: "https://abetterweb3.notion.site/",
        color: "bg-emerald-100",
        textColor: "text-emerald-600",
        bgColor: "bg-emerald-200"
      },
      {
        name: "Blockchain.works-hub",
        logo: "B",
        language: "英语",
        description: "Discover the best Blockchain opportunities with Blockchain Works.",
        url: "https://blockchain.works-hub.com/",
        color: "bg-blue-100",
        textColor: "text-blue-600",
        bgColor: "bg-blue-200"
      },
      {
        name: "Cryptocurrency Jobs",
        logo: "C",
        language: "英语",
        description: "Cryptocurrency Jobs 是一个Web3招聘网站。它的目标是为数字货币和区块链行业提供最好的人才招聘服务。该网站提供全球范围内的远程和本地工作机会，比如 NFT、DAO、DeFi 等等。",
        url: "https://cryptocurrencyjobs.co/",
        color: "bg-yellow-100",
        textColor: "text-yellow-600",
        bgColor: "bg-yellow-200"
      },
      {
        name: "Crypto.jobs",
        logo: "C",
        language: "英语",
        description: "CryptoJobs是一家Web3招聘网站。它旨在连接数字货币和区块链领域的雇主和求职者。该网站提供充满活力的工作机会，适合具有编程、市场营销、审计和其他各种技能的求职者。",
        url: "https://crypto.jobs/",
        color: "bg-purple-100",
        textColor: "text-purple-600",
        bgColor: "bg-purple-200"
      },
      {
        name: "Cryptojobs.com",
        logo: "C",
        language: "英语",
        description: "Cryptojobs.com 是连续创业者Carl Runefelt建立的招聘平台，该平台旨在为 Web3 组织和人才之间搭建桥梁。",
        url: "https://www.cryptojobs.com/",
        color: "bg-red-100",
        textColor: "text-red-600",
        bgColor: "bg-red-200"
      },
      {
        name: "CryptoJobslist",
        logo: "C",
        language: "英语",
        description: "CryptoJobslist是一个专注于加密货币和区块链行业的招聘平台。",
        url: "https://CryptoJobslist.com",
        color: "bg-green-100",
        textColor: "text-green-600",
        bgColor: "bg-green-200"
      },
      {
        name: "DeFi Jobs",
        logo: "D",
        language: "英语",
        description: "DeFi.jobs是一个专门为金融领域的去中心化金融（DeFi）项目提供招聘服务的网站。该网站的目标是建立一个透明、可靠、高效的招聘平台，帮助有意愿加入DeFi行业的人才快速找到合适的职位。",
        url: "https://www.defi.jobs/",
        color: "bg-indigo-100",
        textColor: "text-indigo-600",
        bgColor: "bg-indigo-200"
      },
      {
        name: "DeJob",
        logo: "D",
        language: "中文 英语",
        description: "DeJob，是一个专注于Web3的公益性质招聘求职平台。(注：从2025年年初开始，Dejob提交岗位超过1个需要收费)",
        url: "https://www.dejob.top/",
        color: "bg-pink-100",
        textColor: "text-pink-600",
        bgColor: "bg-pink-200"
      },
      {
        name: "登链招聘",
        logo: "登",
        language: "中文",
        description: "登链社区是一个开放的社区，社区成员一起贡献、相互分享并引以为傲。以上链接是登链官网官网的招聘专栏。",
        url: "https://learnblockchain.cn/jobs",
        color: "bg-orange-100",
        textColor: "text-orange-600",
        bgColor: "bg-orange-200"
      },
      {
        name: "电鸭社区",
        logo: "电",
        language: "中文",
        description: "电鸭社区是国内最早的远程工作社区，也是互联网工作者们的聚集地。「只工作，不上班」是他们倡导的工作态度。你可以在电鸭社区找到Web3远程工作。",
        url: "https://eleduck.com",
        color: "bg-yellow-100",
        textColor: "text-yellow-600",
        bgColor: "bg-yellow-200"
      },
      {
        name: "Dynamite Jobs",
        logo: "D",
        language: "英语",
        description: "初创/小型企业远程招聘平台",
        url: "https://dynamitejobs.com/",
        color: "bg-red-100",
        textColor: "text-red-600",
        bgColor: "bg-red-200"
      },
      {
        name: "Foresight news｜Jobs",
        logo: "F",
        language: "中文+英语",
        description: "Froesight是一家聚焦Crypto及Web3等前沿领域的中文内容平台，秉持中立、客观及开放的态度，希望与读者们一起「遇见」未来。其中的Job板块有相当多的Web3招聘信息发布，而且可以一键筛选'只看中文招聘'。",
        url: "https://foresightnews.pro/job",
        color: "bg-blue-100",
        textColor: "text-blue-600",
        bgColor: "bg-blue-200"
      },
      {
        name: "JustRemote",
        logo: "J",
        language: "英语",
        description: "小众的远程招聘平台（部分职位需要付费查看）",
        url: "https://justremote.co/",
        color: "bg-teal-100",
        textColor: "text-teal-600",
        bgColor: "bg-teal-200"
      },
      {
        name: "Job Protocol",
        logo: "J",
        language: "英语",
        description: "The OpenRecruitment Network. Job Protocol connects companies with an ecosystem of talent partners to hire the right candidate faster and cheaper.",
        url: "https://www.jobprotocol.xyz/",
        color: "bg-indigo-100",
        textColor: "text-indigo-600",
        bgColor: "bg-indigo-200"
      },
      {
        name: "LinkedIn/领英",
        logo: "L",
        language: "全语言",
        description: "领英作为职场社交软件，其中亦可以找到Web3/Remote工作，虽然查找难度可能相比纯Web3招聘平台要难。",
        url: "https://www.linkedin.com/",
        color: "bg-blue-100",
        textColor: "text-blue-600",
        bgColor: "bg-blue-200"
      },
      {
        name: "Rebase",
        logo: "R",
        language: "中文",
        description: "Rebase 开发者社区的招聘信息",
        url: "https://rebase.network/job",
        color: "bg-green-100",
        textColor: "text-green-600",
        bgColor: "bg-green-200"
      },
      {
        name: "Remote3.co",
        logo: "R",
        language: "英语",
        description: "Discover 4,100+ remote Web3 Jobs around the world at companies working on blockchain, smart contract, DeFi, NFT, crypto etc.",
        url: "https://remote3.co/web3-jobs",
        color: "bg-purple-100",
        textColor: "text-purple-600",
        bgColor: "bg-purple-200"
      },
      {
        name: "@Remote_cn(远程工作者)",
        logo: "R",
        language: "中文",
        description: "中文区比较大的远程工作Telegram频道，会收集多家远程工作平台的招聘信息流。",
        url: "https://t.me/remote_cn",
        color: "bg-teal-100",
        textColor: "text-teal-600",
        bgColor: "bg-teal-200"
      },
      {
        name: "Remote-Jobs",
        logo: "R",
        language: "英语",
        description: "一个拥有27.8k（截止到2024.05）stars数量的GitHub仓库，内容是支持远程工作公司汇总列表，一共有700+公司。",
        url: "https://github.com/remoteintech/remote-jobs",
        color: "bg-gray-100",
        textColor: "text-gray-600",
        bgColor: "bg-gray-200"
      },
      {
        name: "RemoteOK",
        logo: "R",
        language: "英语",
        description: "独立开发者做的远程工作平台，信息容易筛选，有很多大厂相关信息。",
        url: "https://remoteok.com/",
        color: "bg-red-100",
        textColor: "text-red-600",
        bgColor: "bg-red-200"
      },
      {
        name: "Smart Deer",
        logo: "S",
        language: "英语+中文",
        description: "SmartDeer 是面向全球市场、专注于 Web3 项目和人才连接的招聘平台，为全球 Web3 builders 提供更灵活、更高薪、更面向未来、更高价值捕获的机会。目前有 iOS 和 Android 双端 app。",
        url: "https://smartdeer.com",
        color: "bg-amber-100",
        textColor: "text-amber-600",
        bgColor: "bg-amber-200"
      },
      {
        name: "Stablegram",
        logo: "S",
        language: "英语",
        description: "We help talent to find the most promising Web3 companies. Find a crypto career you'll love.",
        url: "https://stablegram.com/",
        color: "bg-blue-100",
        textColor: "text-blue-600",
        bgColor: "bg-blue-200"
      },
      {
        name: "Talentverse Platform",
        logo: "T",
        language: "中文 英语",
        description: "Talentverse是一家刚创立不久的专注于Web3及AI等新兴领域的人才招聘平台，致力于为区块链和人工智能领域的企业提供最优质的人才服务。团队Base在亚洲和北美，由资深猎头、知名项目方运营专家和名校区块链协会骨干组成。",
        url: "https://talent-verse.notion.site/Talentverse-690e2af2939346b1bace7a7bb959c12d",
        color: "bg-purple-100",
        textColor: "text-purple-600",
        bgColor: "bg-purple-200"
      },
      {
        name: "Solana Job",
        logo: "S",
        language: "英语",
        description: "Solana Job 是Solana 官方提供的一个招聘平台，其中大部分机会是Solana 链的，也有少量其他链的机会。但是基本都是海外的一些公司，因此除了专业技能外,对于英语要求较高。",
        url: "https://jobs.solana.com/jobs",
        color: "bg-emerald-100",
        textColor: "text-emerald-600",
        bgColor: "bg-emerald-200"
      },
      {
        name: "UpWork",
        logo: "U",
        language: "英语",
        description: "Upwork 是一个全球性的自由职业市场平台，它连接了来自世界各地的自由职业者和客户。自由职业者可以在该平台上提供各种服务，包括但不限于编程、设计、写作、翻译、营销等。",
        url: "https://www.upwork.com/",
        color: "bg-green-100",
        textColor: "text-green-600",
        bgColor: "bg-green-200"
      },
      {
        name: "Web3 Career",
        logo: "W",
        language: "英语",
        description: "Web3 Career是一个专门面向Web3行业的职业平台，旨在帮助招聘者在数字货币和区块链领域找到最佳的人才，同时也为求职者提供了一个寻找Web3行业工作机会的平台。",
        url: "https://web3.career/",
        color: "bg-cyan-100",
        textColor: "text-cyan-600",
        bgColor: "bg-cyan-200"
      },
      {
        name: "Web3 Expert",
        logo: "W",
        language: "日语",
        description: "日本首个专门面向Web3领域的招聘网站。包括全职、自由职业和兼职，适合希望在Web3创业公司或远程工作的人。",
        url: "https://web3-expert.com/",
        color: "bg-indigo-100",
        textColor: "text-indigo-600",
        bgColor: "bg-indigo-200"
      },
      {
        name: "Web3 Frontend",
        logo: "W",
        language: "中文",
        description: "一个非常全面的、分享Web3前端信息的公众号平台。具有严格的筛查机制，提高Web3前端，移动端UX产品体验。",
        url: "#",
        color: "bg-orange-100",
        textColor: "text-orange-600",
        bgColor: "bg-orange-200"
      },
      {
        name: "Web3 Job Database",
        logo: "W",
        language: "英语",
        description: "一个含有Web3招聘信息汇总的谷歌表格",
        url: "https://docs.google.com/spreadsheets/d/1jxymnRoNf05quL4QCr69702AEAC1QQroX-_gl9iNz_A/edit#gid=870926729",
        color: "bg-teal-100",
        textColor: "text-teal-600",
        bgColor: "bg-teal-200"
      },
      {
        name: "Web3-Jobs.jp",
        logo: "W",
        language: "日语",
        description: "ゲーム・エンタメ業界に特化したフリーランスエージェントであるコンフィデンス・プロが提供するWeb3.0特化の案件サイトです。聚焦于快速匹配需求，界面更加简洁流畅。使用体验不错。",
        url: "https://web3-job.jp/",
        color: "bg-rose-100",
        textColor: "text-rose-600",
        bgColor: "bg-rose-200"
      },
      {
        name: "who-is-hiring / rebase-network",
        logo: "W",
        language: "中文",
        description: "一个收集区块链工作机会的GitHub仓库。该平台从各种科技公司收集和汇总了工作空缺。该存储库对有兴趣找到技术工作机会的求职者有帮助，因为它提供了一个集中的位置来浏览多家公司的工作清单。",
        url: "https://github.com/rebase-network/who-is-hiring",
        color: "bg-slate-100",
        textColor: "text-slate-600",
        bgColor: "bg-slate-200"
      },
      {
        name: "WithB",
        logo: "W",
        language: "日语",
        description: "ブロックチェーン・暗号資産・WEB3業界の求人メディア。会提供详细的企业背景信息和职位说明，更适合寻找长远职业发展的大佬。",
        url: "https://withb.co.jp/",
        color: "bg-violet-100",
        textColor: "text-violet-600",
        bgColor: "bg-violet-200"
      },
      {
        name: "Wellfound",
        logo: "W",
        language: "英语",
        description: "初创公司为主的远程招聘平台",
        url: "https://wellfound.com/",
        color: "bg-amber-100",
        textColor: "text-amber-600",
        bgColor: "bg-amber-200"
      }
    ]
    
    cachedSites = sitesData
    return cachedSites
  } catch (error) {
    console.error('Error loading job sites:', error)
    return []
  }
}