'use client'

import { useRouter } from 'next/router'
import {useState,useEffect} from 'react'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsStarFill,BsInfoCircle} from 'react-icons/bs'
import {ship1Img,ship2Img,ship3Img} from '@/public/images'
import {useDispatch} from 'react-redux'
import { addToCart } from '@/redux/shopperSlice'
import toast,{Toaster} from 'react-hot-toast'

export default function ProductDetails() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [product, setProduct] = useState<any>({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        setProduct(router.query)
        setIsLoading(false)

    },[])
    
    const _id= Number(product._id)
  return (
    <div className='w-full bg-white'>
        <div className='max-w-contentContainer mx-auto flex items-center py-4'>
            <div className='w-2/3 h-full flex items-center justify-center overflow-hidden relative'>
                <img src={product.image} alt="productimg" className='w-[80%] cursor-move duration-500' />
            </div>
            <div className='w-1/3 h-full flex  flex-col gap-2'>
                <p className='p-2 text-hoverBg text-sm font-semibold border border-gray-400 rounded-md'>500+ bought since yesterday</p>
                <div className='px-2 py-4 border border-gray-400 rounded-md flex flex-col gap-6'>
                    <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                        <button className='px-2 py-[1px] text-hoverBg text-sm border-[1px] border-hoverBg rounded-sm'>Best Seller</button>
                        <button className='px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm'>Rollback</button>
                    </div>
                        <IoMdHeartEmpty className='text-gray-600 text-2xl'/>
                    </div>
                
                {/* product Info */}
                <div>
                    <p className='textsm underline underline-offset-4'>{product.brand}</p>
                    <p className='text-xl font-semibold text-black'>{product.title}</p>
                    <p className='text-base text-zinc-500'>{product.description}</p>
                    <div className='flex gap-2 items-center text-sm mt-2'>
                                <div className='flex items-center gap-1 text-sm'>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <BsStarFill/>
                                <p>25</p>
                                 </div>
                         </div>
                         <div className='flex items-end gap-2'>
                            <p className='font-semibold text-2xl text-green-700'>Now ${product.price}</p>
                            <p  className='flex items-center gap-1 line-through text-sm text-zinc-500'>${product.oldPrice}   <span><BsInfoCircle/></span></p>
                         </div>
                </div>
                {/* online Info */}
                <div>
                    <p className='text-xs text-zinc-500 flex items-center gap-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span><BsInfoCircle/></span> </p>
                </div>
                    {/* add to cart */}
                    <div className='border-b-[1px] border-b-zinc-300 pb-4'>
                        <button onClick={()=>dispatch(addToCart({
                             _id: _id,
                             title: product.title,
                             description: product.description,
                             oldPrice: product.oldPrice,
                             price: product.price,
                             brand: product.brand,
                             image: product.image,
                             quantity: 1,
                             category: product.category,
                        })) && toast.success(`${product.title.substring(0,20)} is added to cart`)
                        } className='w-32 h-10 bg-blue text-white rounded-full hover:bg-hoverBg duration-300'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
        <Toaster
        reverseOrder={false}
        position='top-center'
        toastOptions={{
            style:{
                borderRadius:'8px',
                background:'#333',
                color:'#fff'

            }
        }}/>
    </div>

  )
}
