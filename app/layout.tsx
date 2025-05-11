import type React from "react"
import "./globals.css"

export const metadata = {
  title: "远程招聘网站导航 - 汇集全球优质远程工作与Web3招聘平台",
  description: "整理各家远程及Web3招聘平台的网站导航，帮助您找到理想的远程工作机会。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
