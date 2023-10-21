import React from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import { phoneImg, ship1Img, ship2Img, ship3Img } from '@/public/images'
import { StoreProduct } from '@/type'

export default function CartPage() {
    const productData = useSelector((state:any)=> state.shopper.productData)
  return (
    <div className='w-full py-10'>
        <div className='w-full flex gap-10'>
            <div className=' w-2/3 flex flex-col gap-5'>
                <h1 className='text-2xl font-bold text-black'>Cart <span className='text-lightText font-normal'>({productData.length})</span></h1>
                {/* pickup details */}
                <div>
                    <div>
                        <Image className='w-10' src={phoneImg} alt='phoneImg'></Image>
                        <p>pickup and delivery options</p>
                    </div>
                   <div className='w-full grid grid-cols-3 gap-4 text-xs'>
                         <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2'>
                        <Image className='w-10' src={ship1Img} alt='shippingImg'/>
                        <p className='font-bold'>Shipping</p>
                        <p>All items available</p>
                        </div>
                        <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2'>
                        <Image className='w-10' src={ship2Img} alt='shippingImg'/>
                        <p className='font-bold'>Pickup</p>
                        <p>All items available</p>
                        </div>
                        <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center gap-1 p-2'>
                        <Image className='w-10' src={ship3Img} alt='shippingImg'/>
                        <p className='font-bold'>Delivery</p>
                        <p>All items available</p>
                        </div>
                   </div>
                   {/* cart Product */}
                   <div className='w-full p-5 border-[1px] border-zinc-400 rounded-md flex flex-col gap-4'>
                    <p className='font-semibold text-sm text-zinc-500'>sold and shipped by <span className='text-black font-semibold'>Shoppers.com</span></p>

                    {/* items */}
                   <div>
                    {
                        productData.map((item:StoreProduct)=>(
                            <div key={item._id} className='flex items-center justify-between gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
                                <div className='w-3/4 flex items-center gap-2'>
                                    <Image className='w-32' width={500} height={500} src={item.image} alt='productImg'/>
                                     <div>
                                        <h2 className='text-base text-zinc-900'>{item.title}</h2>
                                         <p className='text-sm text-zinc-500'>{item.description}</p>
                                         <p className='text-sm text-zinc-500'>Price: ¥{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                   </div>
                   </div>
                   
                </div>
                </div>
            <div className='w-1/3 p-4 mt-24 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4'>

            </div>
        </div>
    </div>
  )
}
