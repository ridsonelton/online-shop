import { Item } from '@/type'
import Image from 'next/image'
import { BsStarFill } from 'react-icons/bs'
import {GoPlus} from 'react-icons/go'
import Link from 'next/link'
import {useDispatch} from 'react-redux'
import { addToCart } from '@/redux/shopperSlice'
import toast,{Toaster} from 'react-hot-toast'

export default function Product({productData} :any) {
    const dispatch = useDispatch()
    const succesNotify = (item:string)=>toast.success(`${item} is added to cart`)
  return (
    <div className='py-6 px-4 grid grid-cols-4 gap-4'>
        {
            productData.map((item : Item)=>(
                <div key={item._id} className='border-[1px] border-gray-200 mb-6 group'>
                    <div className='w-full h-[250px] overflow-hidden p-1'>
                    <Image className='w-full h-full object-contain scale-100 group-hover:scale-105 duration-300' width={300} height={250} src={item.image} alt="itemimg"/>
                    </div>

                    <div className='px-2 py-6 flex flex-col justify-center'>
                        <div className='flex justify-between  py-2'>
                            <button onClick={()=> 
                            dispatch(
                                addToCart({
                                 _id: item._id,
                                 title: item.title,
                                 description: item.description,
                                 oldPrice: item.oldPrice,
                                 price: item.price,
                                 brand: item.brand,
                                 image: item.image,
                                 quantity: 1,
                                 category: item.category,
                              }) 
                            ) 
                            && toast.success(`${item.title.substring(0,20)} is added to cart`)
                            } className='flex items-center bg-blue text-white w-20 h-9 rounded-full gap-1 justify-center hover:bg-[#004f9a] duration-300'>
                                <span><GoPlus/></span>
                                Add </button>
                                
                            <Link href={{
                                pathname:`/product/${item._id}`,
                                query:{
                                    _id: item._id,
                                    title: item.title,
                                    description: item.description,
                                    oldPrice: item.oldPrice,
                                    price: item.price,
                                    brand: item.brand,
                                    image: item.image,
                                    isNew: item.isNew,
                                    category: item.category,
                                }
                            }} as={`/product/${item._id}`}>
                            <button className='flex items-center bg-white text-black border-black border-[1px] hover:bg-black w-20 h-9 rounded-full gap-1 justify-center hover:text-white duration-300'>
                                <span><GoPlus/></span>Details</button></Link>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='text-lg text-green-700 font-semibold'>Now ${item.price}</p>
                            <p className='text-gray-500 line-through text-sm'>${item.oldPrice}</p>
                        </div>
                            <p className='text-lg py-2 font-semibold'>{item.title.substring(0,35)}</p>
                            <p>{item.description.substring(0,80)}...</p>
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
                    </div>
                </div>
            ))
        }
        <Toaster
        reverseOrder={false}
        position='top-center'
        toastOptions={{
            style:{
                borderRadius:'8px',
                background:'#333',
                color:'#fff'

            }
        }}
        />
       

    </div>
  )
}
