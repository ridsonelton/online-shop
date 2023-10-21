import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Product from '@/components/Product'
import TopFooter from '@/components/TopFooter'
import { ProductType } from '@/type'
import Head from 'next/head'

interface Props {
  productData: ProductType
}

export default function Home({productData}:Props) {
  
  return (
   <>
   <Head>
    <title>Shopper</title>
    <link rel='icon' href='/favicon.ico'></link>
   </Head>
   <main className='bg-lightblue'>
    <div  className='max-w-contentContainer mx-auto bg-white'>
    <Banner/>
    <Product productData={productData}/>
    </div>
   </main>
   </>
  )
}



// SSR data fetching

export const getServerSideProps = async()=>{
  const productData = await (
    await fetch("http://localhost:3000/api/productdata")).json()

  return {
    props :{productData},
  }
}