import { phoneImg } from "@/public/images"
import {FiChevronDown} from "react-icons/fi"
import {FaPlaceOfWorship} from "react-icons/fa"
import {MdOutlineLocationOn} from "react-icons/md"
import Image from "next/image"


export default function NavbarBottom() {
  return (
    <div className='max-w-container mx-auto py-2 px-6 flex items-center justify-between gap-4'>
        <div className="flex items-center">
        <div className="flex items-center justify-center gap-2">
            <Image className="w-6" src={phoneImg} alt="phoneImg"></Image>
            <p className="text-sm font-semibold">How do you want your items?</p>
            <FiChevronDown/>
            <span className="w-[1px] h-4 bg-white inline-flex mx-2 "></span>
        </div>
        <div className="flex items-center gap-2">
            <MdOutlineLocationOn/>
            <p className="text-sm text-zinc-100">Shizuoka,040-2290</p>
            <FaPlaceOfWorship/>
            <p className="text-sm text-zinc-100">Shizuoka, Japan</p>
        </div>
        </div>
        <ul className="flex items-center gap-6 text-sm font-semibold">
            <li className="NavBottomLi">Deals</li>
            <li className="NavBottomLi">Easter</li>
            <li className="NavBottomLi">Grocery & essentials</li>
            <li className="NavBottomLi">Home</li>
            <li className="NavBottomLi">Tech</li>
            <li className="NavBottomLi">Fashion</li>
            <li className="NavBottomLi">Auto</li>
            <li className="NavBottomLi">Walmart+</li>
        </ul>
    </div>
  )
}
