import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar, Footer } from '../components'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50 min-w-screen">
        <Navbar />
      <main className=' py-16 pb-5 w-md mx-auto min-h-screen'>
        <Component {...pageProps} />
      </main>
        <Footer/>
    </div>
  )
}

export default MyApp
