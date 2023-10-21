import Image from 'next/image'
import React from 'react'
import {logo} from '@/public/images/index'
import {IoSearchOutline} from 'react-icons/io5'
import {AiOutlineHeart,AiOutlineUser} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import NavbarBottom from './NavbarBottom'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import {useEffect, useState} from 'react'

export default function Navbar() {
    const productData = useSelector((state:any)=>state.shopper.productData)
    const [totalAmt, setTotalAmt] = useState("")

    useEffect(()=>{
        let price = 0
        productData.map((item:any)=>{
            price += item.price * item.quantity
            return price
        })
        setTotalAmt(price.toFixed(2))
    },[productData])
  return (
    <div className='w-full bg-blue text-white sticky top-0 z-50'>
        <div className='w-full h-full border-b-[1px] border-b-white'>
        <div className='max-w-container mx-auto h-20 px-4 flex items-center gap-2'>
    {/* logo start */}
    <Link href='/'>
    <div className='navBarHover'>
             <Image src={logo} className='w-44' alt='logo'></Image>
        </div>
    </Link>
         
    {  /* logo end */}
    {/* departmen start */}
        <div className='navBarHover'>
            <div className='w-4 grid grid-cols-2 gap-[2px]'>
                <span className='departmentLogo'></span>
                <span className='departmentLogo'></span>
                <span className='departmentLogo'></span>
                <span className='departmentLogo'></span>
            </div>
            <p className='text-base font-semibold'>Departments</p>
        </div>
    {/* departmen end */}
    {/* Services start */}
        <div className='navBarHover'>
        <div className='w-4 grid grid-cols-2 gap-[2px]'>
                <span className='departmentLogoR'></span>
                <span className='departmentLogoR'></span>
                <span className='departmentLogoR'></span>
                <span className='departmentLogoR'></span>
            </div>
            <p className='text-base font-semibold'>Services</p>
        </div>
    {/* Services end */}
    {/* SearchBox start */}
        <div className='h-10 flex flex-1 relative'>
             <input className='h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-gray-400 duration-200' type="text" placeholder='Search Your Item'/>
             <span className='absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl'>
                <IoSearchOutline/>
             </span>
        </div>
    {/* SearchBox end */}
    {/* Myitem start */}
        <div className='navBarHover'>
            <AiOutlineHeart/>
            <div>
                <p className='text-xs'>Recorder</p>
                <h2 className='text-base font-semibold -mt-1'>My Items</h2>
            </div>
        </div>
    {/* Myitem end */}
    {/* Account start */}
        <div className='navBarHover'>
            <AiOutlineUser/>
            <div>
                <p className='text-xs'>Sign In</p>
                <h2 className='text-base font-semibold -mt-1'>Account</h2>
               
            </div>
        </div>
    {/* Account end */}
    {/* Cart start */}
       <Link href="/cart">
       <div className='flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-hoverBg duration-300 relative cursor-pointer'>
            <BsCart2 className='text-2xl'/>
            <p className='-mt-2 text-[10px]'>{totalAmt}￥</p>
            <span className='absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center text-xs'>{productData.length > 0 ? productData.length : 0}</span>
        </div></Link>
    {/* Cart end */}



        </div>
        </div>
    {/* NavBottom start */}
        <NavbarBottom/>
    {/* NavBottom end */}
    </div>
  )
}
