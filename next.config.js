/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["i.ibb.co","images.pexel.com", "lh3.googleusercontent.com"],
  },
  env:{
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY, 
  },
  typescript:{
    ignoreBuildErrors:true,
  }
}

module.exports = nextConfig
