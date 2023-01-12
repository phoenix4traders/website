require('dotenv').config()

/** @type {import('next').NextConfig} */
module.exports = {
  env:{
    DISCORD_URL: process.env.DISCORD_URL
  },
  reactStrictMode: true,
}
