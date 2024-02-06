import LoginBtn from '@/app/ui/header/LoginBtn'
import Logo from '@/app/ui/header/Logo'
import NavbarMenu from '@/app/ui/header/NavbarMenu'
import NavigationBtns from '@/app/ui/header/NavigationBtns'
import React from 'react'

const Header = () => {
  return (
    <div className='h-[83px] lg:h-[112px] px-8 lg:px-[100px] bg-[#F7F7F7] opacity-60 flex items-center justify-between'>
        <div className='flex gap-[100px]'>
            <Logo/>
            <NavigationBtns />
        </div>
        
        <LoginBtn/>
        <NavbarMenu />
    </div>
  )
}

export default Header