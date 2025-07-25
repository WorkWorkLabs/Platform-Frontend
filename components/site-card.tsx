"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { getFaviconUrl } from "@/lib/favicon-utils"
import { useTranslations } from 'next-intl'

interface SiteCardProps {
  name: string
  logo: string
  language: string
  description: string
  url: string
  color: string
}

export function SiteCard({ name, logo, language, description, url, color }: SiteCardProps) {
  const t = useTranslations('nav')
  const faviconUrl = getFaviconUrl(url)
  
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start">
          <div className={`flex-shrink-0 ${color} rounded-lg p-3`}>
            <Image
              src={faviconUrl}
              alt={`${name} Logo`}
              width={48}
              height={48}
              className="h-12 w-12"
              onError={(e) => {
                // Fallback to placeholder if favicon fails to load
                const target = e.target as HTMLImageElement
                target.src = "/placeholder.svg?height=48&width=48"
              }}
            />
          </div>
          <div className="ml-4 flex-1">
            <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
            <p className="mt-1 text-sm text-gray-500">{language}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-500"
          >
            {t('visitSite')}
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
