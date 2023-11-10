import React,{useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import { phoneImg, ship1Img, ship2Img, ship3Img, warningImg } from '@/public/images'
import { StoreProduct } from '@/type'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import FormatPrice from './FormatPrice'
import { deleteItem, minusQuantity, plusQuantity, resetCart } from '@/redux/shopperSlice'
import { IoMdClose } from 'react-icons/io'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'
import session from 'redux-persist/lib/storage/session'
import { error } from 'console'
import { useSession } from 'next-auth/react'


export default function CartPage() {
    const {data: session} = useSession()
    const dispatch = useDispatch()
   
    const productData = useSelector((state:any)=> state.shopper.productData)
    const userInfo =useSelector((state:any)=>state.shopper.userInfo)
    const [warningMsg, setWarningMsg] = useState(false)
    const [totalOldPrice, setTotalOldPrice] = useState(0)
    const [totalSavings, setTotalSavings] = useState(0)
    const [totalAmt, setTotalAmt]= useState(0)
    useEffect(()=>{
        setWarningMsg(true)
        let oldPrice =0
        let savings =0
        let amt = 0
        productData.map((item:StoreProduct)=>{
            oldPrice += item.oldPrice * item.quantity
            savings += item.oldPrice - item.price
            amt += item.price * item.quantity
            return
        })
        setTotalOldPrice(oldPrice)
        setTotalSavings(savings)
        setTotalAmt(amt)
    },[productData])

    
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
                                         
                                    {/* button */}
                                    <div  className='mt-2 flex items-center gap-6'>
                                    <button onClick={()=>dispatch(deleteItem(item._id))} className='text-sm underline underline-offset-2 decoration-[1px] text-zinc-600 hover:no-underline hover:text-blue duration-300'>Remove</button>
                                    <div className='w-28 h-9 border border-zinc-400 rounded-full text-base font-semibold text-black flex items-center justify-between px-3'>
                                        <button onClick={()=> dispatch(minusQuantity({
                                             _id: item._id,
                                             title: item.title,
                                             description: item.description,
                                             oldPrice: item.oldPrice,
                                             price: item.price,
                                             brand: item.brand,
                                             image: item.image,
                                             quantity: 1,
                                             category: item.category,
                                        }))} className='text-base w-5 h-5 text-zinc-600 hover:bg-buttonMinAdd'><AiOutlineMinus/></button>
                                        <span>{item.quantity}</span>
                                        <button onClick={()=> dispatch(plusQuantity({
                                             _id: item._id,
                                             title: item.title,
                                             description: item.description,
                                             oldPrice: item.oldPrice,
                                             price: item.price,
                                             brand: item.brand,
                                             image: item.image,
                                             quantity: 1,
                                             category: item.category,
                                        }))} className='text-base w-5 h-5 text-zinc-600 hover:bg-buttonMinAdd'><AiOutlinePlus/></button>
                                    </div>
                                    </div>
                                    {/* button end*/}
                                    </div>
                                </div>
                                {/* sidePrice */}
                                <div className='w-1/4 text-right flex flex-col items-end gap-1'>
                                    <p className='font-semibold text-xl text-green-600'><FormatPrice amount={item.price * item.quantity}/></p>
                                    <p className='text-sm line-through text-zinc-500'><FormatPrice amount={item.price * item.quantity}/></p>
                                    <div className='flex items-center text-xs gap-2'>
                                        <p className='bg-green-200 text-[8px] uppercase px-2 py-[1px]'>You Save</p>
                                        <p><FormatPrice amount={
                                            item.oldPrice *item.quantity - item.price *item.quantity}/></p>
                                    </div>
                                    
                                </div>
                                
                                {/* sidePrice end */}
                            </div>
                        ))
                    }
                   </div>
                   <button onClick={()=> dispatch(resetCart())} className='w-44 bg-red-500 text-white j10
                    rounded-full text-base font-semibold hover:bg-red-800 duration-500'>Reset Cart</button>
                   </div>
                   
                </div>
                </div>
            <div className='w-1/3 p-4 mt-24 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4'>
                    <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
                    {userInfo? ( 
                    <button  className='bg-blue hover:bg-hoverBg w-full text-white h-10 rounded-full font-semibold duration-500'>Continue to checkout</button>) :
                    ( <button className='bg-blue w-full text-white h-10 rounded-full font-semibold cursor-not-allowed'>Continue to checkout</button>)}
                   
                    {!userInfo && (
                        <p className='text-sm text-center text-red-500 -mt-4 font-semibold '>Please Sign in for checkout</p>
                    )

                    }
                    { warningMsg && 
                    <div className='bg-hoverBg text-white p-2 rounded-lg flex items-center justify-between gap-4'>
                        <Image className='w-8' src={warningImg} alt='warningImg'/>
                        <p className='text-sm'>Item in your cart have reduced prices. Check out now for extra savings!</p>
                        <IoMdClose onClick={()=> setWarningMsg(false)} className='text-4xl hover:text-red-400 cursor-pointer duration-200'/>
                    </div>
                    }
                    <p className='text-sm text-center'>for the best Shopping experience, <span className='underline underline-offset-2 decoration-[1px]'>sign in</span></p>
                    </div>
                    {/* checkout price */}
                    <div className='w-full flex flex-col gap-4 border-b-[1px] border-b-zinc-200 pb-4'>
                        <div className='flex flex-col gap-1'>
                            <div className='text-sm flex justify-between'>
                                <p className='font-semibold'>subtotal <span>({productData.length} item)</span></p>
                                <p className='line-through text-zinc-500 text-base'><FormatPrice amount={totalOldPrice}/></p>
                            </div>
                            <div className='text-sm flex justify-between'>
                                        <p className='font-semibold'>Savings</p>
                                        <p className='text-green-600 font-bold bg-green-100 py-1 px-[2px] rounded-lg flex'><FormatPrice amount={totalSavings}/></p>
                                    </div>
                            <div className='text-sm flex justify-between'>
                                <p className='font-semibold'>Total Amount</p>
                                <p className='text-zinc-800 font-normal text-base'><FormatPrice amount={totalAmt}/></p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-4 border-b-[1px] pb-4 border-b-zinc-200'>
                    <div className='flex flex-col gap-1'>
                        <div className='text-sm flex justify-between'>
                            <p>Shipping</p>
                            <p className='text-green-600'>Free</p>
                        </div>
                        <div className='text-sm flex justify-between'>
                            <p className='font-semibold'>Taxes</p>
                            <p className='text-zinc-800'>Calculated at checkout</p>
                        </div>
                    </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p>Estimated total</p>
                        <p className='text-zinc-800 font-bold text-lg
                        '><FormatPrice amount={totalAmt}></FormatPrice></p>
                    </div>
                    {/* checkout price */}

            </div>
        </div>
    </div>
  )
}
