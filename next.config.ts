import type { NextConfig } from 'next'

import { env } from '@/env/server'

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL(env.STASH_BASE_URL).hostname
      },
      new URL(env.STASHDB_BASE_URL),
      new URL(env.THEPORNDB_BASE_URL)
    ]
  }
}

export default nextConfig
