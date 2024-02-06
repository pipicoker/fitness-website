"use client"
import {NavBtns} from '../../lib/headerNav'
import { navStore } from '@/app/lib/zustard/store';
import Link from 'next/link';

import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";


const NavigationBtns = () => {
    const nav = navStore((state:any) => state.nav)
    const setNavFalse = navStore((state: any) => state.setNavFalse)

  return (
    <div className='flex'>
     
       <div className='hidden lg:flex space-x-6'>
            {NavBtns.map((item, index) => (
                <Link  href={item.route}
                key={index} className='flex items-center gap-2'>
                    <button className='text-[#383838] font-inter capitalize'>{item.btnName}</button>
                    <div className={index === 0 ? 'flex' : 'hidden'}>
                        <IoIosArrowDown />
                    </div>
                    
                </Link>
            ))}
        </div>

        {/* mobile and tablet nav */}
        <div className={nav? 'lg:hidden fixed h-screen bg-[#F7F7F7] right-0 top-0 px-8 py-8 text-left space-y-12' : 'hidden'}>
            <div className='flex justify-end text-3xl' onClick={setNavFalse}>
                <IoMdClose />
            </div>
        

            {NavBtns.map((item, index) => (
                <div key={index} className='flex items-center gap-2' onClick={setNavFalse}>
                    <Link href={item.route}>
                        <button className='text-[#383838] font-inter capitalize'>{item.btnName}</button>
                        <div className={index === 0 ? 'flex' : 'hidden'}>
                            <IoIosArrowDown />
                        </div>
                    </Link>
                    
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default NavigationBtns