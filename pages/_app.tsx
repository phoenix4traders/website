import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar, Footer } from '../components'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-white min-w-screen">
        <Navbar />
      <main className='w-full py-16 pb-5 w-md mx-auto '>
        <Component {...pageProps} />
        <Footer/>
      </main>
    </div>
  )
}

export default MyApp
