import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/"
    className='flex items-center space-x-2'>
        <img src="logo.jpg" alt="logo" />
        <p className='font-semibold text-[#000000] font-sora'>FITSTUDIO</p>
    </Link>
  )
}

export default Logo