import Slider from "react-slick"
import { bannerImg, sliderImgFive, sliderImgFour,sliderImgOne,sliderImgThree,sliderImgTwo } from "@/public/images";
import Image from "next/image";
import BannertText from "./BannertText";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from "react-icons/bs"
import ButtonPrimary from "./ButtonPrimary";

function SampleNextArrow(props:any) {
    const { onClick } = props;
    return (
      <div className=" absolute top-52 z-10 left-6 cursor-pointer " onClick={onClick}>
        <BsFillArrowLeftCircleFill className="text-3xl duration-300 hover:opacity-50"/>
      </div>
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
        <div className=" absolute top-52 z-10 right-6 cursor-pointer " onClick={onClick}>
        <BsFillArrowRightCircleFill className="text-3xl duration-300 hover:opacity-50"/>
      </div>
    )
  }
  

export default function Banner() {
    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<SamplePrevArrow/>,
        prevArrow:<SampleNextArrow/>,
        customPaging: function(i:any) {
            return (
                <div className="ml-80 mt-2 z-10">
                    <div className="float-left h-1 w-7 rounded-full bg-gray-400 mx-1 text-transparent cursor-pointer hover:opacity-50">{i}</div>

                </div>
            );
          },
       
        };
  return (
    <div className='w-full bg-white px-4 py-6 flex gap-4 border-b-[1px]'>
        <div className='w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative'>
        <Slider dots dotsClass="slick-dots line-indicator" {...settings}>
          <div className="w-full h-[410px] relative">
            <Image className="w-full h-full object-cover rounded-lg" src={sliderImgOne} alt="sliderimg1" priority/>
           <BannertText className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-white" title="Spring fashion in bloom" desc="New trends & styles to turn heads anytime, on any budget." btnText="Shop Now" />
          </div>
          <div className="w-full h-[410px] relative">
            <Image className="w-full h-full object-cover rounded-lg" src={sliderImgTwo} alt="sliderimg1" priority/>
           <BannertText className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-black" title="Up to 65% off" desc="New savings every week! Hurry to score low, low prices." btnText="Shop Now" />
          </div>
          <div className="w-full h-[410px] relative">
            <Image className="w-full h-full object-cover rounded-lg" src={sliderImgThree} alt="sliderimg1" priority/>
           <BannertText className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-black" title="Up to 65% off" desc="New savings every week! Hurry to score low, low prices." btnText="Shop Now" />
          </div>
          <div className="w-full h-[410px] relative">
            <Image className="w-full h-full object-cover rounded-lg" src={sliderImgFour} alt="sliderimg1" priority/>
           <BannertText className="absolute w-60 h-full top-6 left-4 flex flex-col gap-3 text-black" title="You can save $1,300+ a year!*" desc="Start saving with free delivery, Walmart Reqards & more" btnText="Try Free" />
          </div>
        
        </Slider>
        </div>
        <div className='w-1/3 border-[1px] border-gray-200 rounded-lg h-[410px] shadow-bannerShadow flex flex-col justify-between p-4'>
            <div className="flex items-center justify-between"> 
              <h2 className="textxl font-semibold text-black">Flash pick of the Day</h2>
              <p className="text-base text-zinc-600 underline underline-offset-2 cursor-pointer">View all</p>
            </div>
            <Image className="h-60 object-cover" src={bannerImg} alt="banner image"/>
            <ButtonPrimary btnText="Option"/>
            <p className="text-lg text-black font-semibold">From $199.90</p>
            <p className="text-base text-gray-500 -mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, incidunt!...</p>

        </div>
    </div>
  )
}
