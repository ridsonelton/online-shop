import React from 'react'
import Navbar from './Navbar'
import NavbarBottom from './NavbarBottom'
import Footer from './Footer'
import TopFooter from './TopFooter'


interface Props{
    children: React.ReactNode
}

export default function Layout({children}:Props) {
  return (
    <>
    <Navbar/>
    <main>
        {children}
    </main>
    <TopFooter/>
    <Footer/>
    </>
  )
}
