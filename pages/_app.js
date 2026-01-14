import '../styles/globals.css'
import { Inter } from 'next/font/google'

// If loading a font fails, Next.js will use a fallback, preventing a crash
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  )
}
