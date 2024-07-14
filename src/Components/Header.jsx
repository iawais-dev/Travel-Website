import React, { useEffect, useState } from 'react'
import logo from '../imgs/hilink-logo.svg'
import hamburger from '../imgs/menu.svg'
import close from '../imgs/close.png'
import user from '../imgs/user.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Header() {
    const [menu ,setMenu] = useState(false)

    useEffect(()=>{
      Aos.init()
    },[])
  
  return (      
    <header className=' mx-auto max-w-[1440px]  overflow-hidden'>
        <div className='flex  p-5 px-6 lg:px-20 3xl:px-0 items-center justify-between'>
  
             <img src={logo} alt="" />
            
         
           <div className='  hidden lg:flex  font-abc' >
                         <ul className='gap-12  hidden lg:flex'>
                            <li className='cursor-pointer text-gray-50 hover:font-bold transition-all'>Home</li>
                            <li className='cursor-pointer text-gray-50 hover:font-bold transition-all' >How Hilink Work?</li>
                            <li className='cursor-pointer text-gray-50 hover:font-bold transition-all' >Services</li>
                            <li className='cursor-pointer text-gray-50 hover:font-bold transition-all' >Pricing</li>
                            <li className='cursor-pointer text-gray-50 transition-all  hover:font-bold ' >Contact Us</li>
                         </ul>
                </div>
           <div className='flex justify-center gap-2'>
           
              <button className={`rounded-3xl  flex bg-black text-white text-center md:p-2 lg:p-4 md:px-7 lg:px-8 md:font-bold md:gap-3 md:rounded-5xl py-2 px-4 font-semibold`}>
                <img src={user} className='hidden lg:flex' alt="" />
                Login
            </button>
          <button className='lg:hidden' onClick={()=>{setMenu(!menu)}}>
            {menu ? (<img src={close} className='h-8 transition duration-500 ease-in-out' alt="close" />) : (<img src={hamburger} className='h-8 transition duration-500 ease-in-out' alt="menu" />)}
            </button>  
           </div>
          
           
        </div>
        {
                menu ? <div className='bg-green-50 text-white lg:hidden p-2 px-5 absolute z-50 w-screen  right-0 top-20' data-aos='fade-down' data-aos-duration='500'>
                         <ul className='gap-6  flex flex-col mb-10 mt-10'>
                            <li className='cursor-pointer hover:font-bold transition duration-150'>Home</li>
                            <li className='cursor-pointer hover:font-bold transition duration-150'>How Hilink Work?</li>
                            <li className='cursor-pointer hover:font-bold transition duration-150'>Services</li>
                            <li className='cursor-pointer hover:font-bold transition duration-150'>Pricing</li>
                            <li className='cursor-pointer hover:font-bold transition duration-150'>Contact Us</li>
                         </ul>
                </div> : null
            }
    </header>
  )
}

export default Header