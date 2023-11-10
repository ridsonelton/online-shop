import Layout from '@/components/Layout';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Open_Sans} from 'next/font/google'
import "slick-carousel/slick/slick.css"; 
import { Provider } from 'react-redux'
import { store,persistor } from '@/redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { SessionProvider } from "next-auth/react"


const open_sans = Open_Sans({
  subsets:["latin"],
  variable:"--font-open_sans",

})


export default function App({ Component, pageProps:{sessions, ...pageProps} }: AppProps) {
  return(
   <Provider store={store}>
    <SessionProvider session={sessions}>
    <PersistGate loading={"loading"} persistor={persistor}>
    <main className={`${open_sans.variable} font-sans`}>
      
      <Layout>
        
      <Component {...pageProps} />

      </Layout>
    </main>
    </PersistGate>
    </SessionProvider>
   </Provider>
  ) 
}
