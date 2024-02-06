'use client';

import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { navStore } from '@/app/lib/zustard/store';

const NavbarMenu = () => {
  const setNavActive = navStore((state: any) => state.setNavActive)
  return (
    <div 
  className='flex lg:hidden w-[52px] h-[43px] justify-center items-center rounded-lg border text-xl '
  onClick={setNavActive}
  >
      <RxHamburgerMenu />
      
  </div>

  )
}

export default NavbarMenu