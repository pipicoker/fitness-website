import Image from "next/image"
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="    bg-[#F7F7F7] bg-hero-bg bg-no-repeat relative bg-center bg-cover">
        <div className="grid lg:grid-cols-2 gap-16 items-center pt-[65px] px-4 lg:px-[100px]    bg-gradient-to-b from-[rgba(247,247,247,0.9)] to-[rgba(247,247,247,0.9)]">
            <div className="">
                <h2 className="text-[40px] lg:text-[72px]  text-[#000000] font-extrabold font-sora">Empowering Your Body; <br/> Inspiring Your Life wellbeing</h2>

                <p className="mt-4 lg:mt-8 text-[24px] lg:text-[28px] text-[#494949] font-inter">Transform your fitness journey with our engaging classes and experts.</p>

                <button className="mt-6 lg:mt-8 flex gap-2 items-center bg-[#25AB75] px-6 lg:px-8 py-3 lg:py-4 lg:text-xl font-medium text-[#000000] rounded-tl-lg rounded-br-lg font-inter">
                    Explore Class
                    <MdArrowOutward />
                </button>

            </div>

            <div className="lg:w-full h-[465px] lg:h-full">
            <div className="lg:h-[853px]  lg:p-4  rounded-[44.72px] flex justify-center items-center lg:border-[0.93px] bg-[#FFFFFF] ">
                <img
                src="/hero-image.jpg"
                alt="hero picture "
            className="h-[465px] lg:h-full"
                />
            </div>
            </div>   
        </div>
        
        
       
    </div>
  )
}

export default Hero