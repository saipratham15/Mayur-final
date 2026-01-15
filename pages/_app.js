// We import main.css because that is the file you have in your styles folder
import '../styles/main.css'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/next'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* This script forces Tailwind CSS to load from the internet */}
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
