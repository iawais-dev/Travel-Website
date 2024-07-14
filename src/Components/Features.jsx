import React from 'react'
import map from '../imgs/map.svg'
import camp from '../imgs/camp.svg'
import calendar from '../imgs/calendar.svg'
import tech from '../imgs/tech.svg'
import location from '../imgs/location.svg'
import phone from '../imgs/phone.png'
import featurebg from '../imgs/feature-bg.png'
function Features() {
  return (
    <section  className='overflow-hidden'>
        <div className='lg:flex lg:items-center relative lg:justify-end max-w-[1440px] 2xl:mb-14 3xl:mb-28 mx-auto  bg-cover bg-no-repeat bg-center lg:pt-5'style={{backgroundImage: `url(${featurebg})`}}>
         <div className='hidden lg:flex lg:min-h-[900px]  ' >

         <img src={phone} className='rotate-[15deg] hidden lg:flex  top-[240px] absolute -left-16 3xl:left-24 ' alt="" />
         </div>
 

       
       
            <div className=' lg:w-[60%] 3xl:p-0 p-5 mt-16 lg:pr-20 lg:pl-0   '>
            <div className='relative'>
           <img src={camp} className='-top-4 absolute h-9 lg:h-14 lg:-top-6 lg:-left-2 ' alt="" />
           <h1 className='font-bold text-[40px] font-abc lg:text-[4rem]'>Our Features</h1>
        </div>
     
            <div className='grid '>
            <div className='md:flex md:gap-10 lg:gap-20 '>
                 <div className='w-full   '>
            <div className='bg-green-50 p-4 rounded-full w-fit mt-10 lg:p-7'>
                <img src={map} alt="" />
                </div>
                <div>
                       <h2 className='font-bold text-[20px] mt-5 font-abc lg:text-3xl lg:pr-5 3xl:pr-0 3xl:text-[32px]'>Real Maps Can Be Offline</h2>
            <p className='text-gray-30 mt-7 font-abc'>We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location</p>
                </div>
         
        </div>
        <div className='w-full'>
            <div className='bg-green-50 p-4 rounded-full w-fit mt-10 lg:p-7 '>
            <img src={calendar} alt="" />

            </div>
            <h2 className='font-bold text-[20px] mt-5  font-abc lg:text-3xl lg:pr-16 xl:pr-3 3xl:text-[32px]'>Set An Adventure Schedule</h2>
            <p className='text-gray-30 mt-7 font-abc'>Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion</p>
        </div>
            </div>
            
            <div className='md:flex md:gap-10 lg:gap-20 lg:mt-20'>
                 <div className='w-full'>
            <div className='bg-green-50 p-4 rounded-full w-fit mt-10 lg:p-7 '>
            <img src={tech} alt="" />

            </div>
            <h2 className='font-[700] text-[20px] md:pr-2  mt-5 font-abc lg:text-3xl lg:pr-12 3xl:text-[32px]'>Technology Using Augment Reality</h2>
            <p className='text-gray-30 mt-7 font-abc  '>Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection</p>
        </div>
        <div className='w-full'>
            <div className='bg-green-50 p-4 rounded-full w-fit mt-10 lg:p-7 '>
            <img src={location} alt="" />
            </div>
            <h2 className='font-[700] text-[20px]   mt-5 font-abc lg:text-3xl 3xl:text-[32px]'>Many New Locations Every Month</h2>
            <p className='text-gray-30 mt-7 font-abc '>Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing</p>
        </div>
            </div>

       
        </div>
        </div>
        
        
        </div>
        
        
    </section>
  )
}

export default Features