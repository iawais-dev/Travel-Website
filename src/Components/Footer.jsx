import React from 'react'
import logo from '../imgs/hilink-logo.svg'
import { Link } from 'react-router-dom'
import youtube from '../imgs/youtube.svg'
import twitter from '../imgs/twitter.svg'
import insta from '../imgs/instagram.svg'
import word from '../imgs/wordpress.svg'
import fb from '../imgs/facebook.svg'
function Footer() {
  return (
  <section className='p-5 mt-20 overflow-hidden font-abc mx-auto max-w-[1440px]'>
     
        <div className='flex flex-col md:flex-row md:items-baseline  md:gap-20 lg:gap-28 md:flex-nowrap flex-wrap lg:px-16 3xl:px-0'>
         
          <div>
             <img src={logo} className='h-6 ' alt="" />
        </div>
        <div className='flex gap-10 flex-wrap sm:justify-between lg:flex-1 mt-10 lg:gap-12 '>

        <div>
            <h1 className='font-bold  text-lg' >Learn More</h1> 
            <div className='text-gray-30  mt-5 flex flex-col gap-5 font-abc text-sm'>
               <p className='cursor-pointer'>About Hilink</p>
            <p className='cursor-pointer'>Press Releases</p>
            <p className='cursor-pointer'>Environment</p>
            <p className='cursor-pointer'>Jobs</p>
            <p className='cursor-pointer'>Privacy Policy</p>
            <p className='cursor-pointer'>Contact Us</p>
            </div>
           
        </div>
        <div>

         <h1 className='font-bold text-lg'>Our Community</h1>
         <div className='text-gray-30 mt-5 flex flex-col gap-5 font-abc text-sm'>
           <p className='cursor-pointer'>Climbing xixixi</p>
         <p className='cursor-pointer'>Hiking hilink</p>
         <p className='cursor-pointer'>Hilink kinthill</p>
         </div>
        
        </div>


<div className='sm:flex'>

  <div>
            <h1 className='font-bold font-abc text-lg'>Contact Us</h1> 
          <div className='font-abc flex flex-col gap-5 mt-5'>
              <p className='cursor-pointer '>Admin Officer: <br className='hidden md:flex lg:hidden' /> 1 123-456-7890</p>  
            <p className='cursor-pointer'>Email Officer:<br className='hidden md:flex lg:hidden' /> hilink@akinthil.com </p>

           
          </div>
             
           </div>
        </div>
             
             <div className='mt-5 md:mt-0'>
             <p className='font-bold font-abc text-lg'> Social </p>
             <div className='flex gap-5 mt-5'>
              <img className=' cursor-pointer' src={fb} alt="" />
              <img className=' cursor-pointer' src={insta} alt="" />
              <img className=' cursor-pointer' src={twitter} alt="" />
              <img className=' cursor-pointer' src={youtube} alt="" />
              <img className=' cursor-pointer' src={word} alt="" />


             </div>
             </div>
</div>
           

              
        </div> <div className='m-auto text-center text-gray-30 text-sm mt-32 mb-20'>
                2024 Hilink | All rights reserved 
               </div>
        

      
  </section>
  )
}

export default Footer