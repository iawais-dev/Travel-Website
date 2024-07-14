import React from 'react'
import camp from '../imgs/camp.svg'
import star from '../imgs/star.svg'
import play from '../imgs/play.svg'
import cross from '../imgs/close.svg'
import bg from '../imgs/pattern-bg.png'
function Hero() {
  return (
    <section className='relative overflow-hidden'>
      <div className='px-6 lg:px-20 3xl:px-0  mx-auto max-w-[1440px] flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
   
    
       <div className='absolute  -z-30 top-28  right-0  h-screen w-screen  bg-cover bg-center md:-right-28   xl:-top-52' style={{ backgroundImage: `url(${bg})` }}>
      </div>
     <div className='xl:w-[45%] '>
      <img src={camp} className='h-10 lg:h-12 ' alt="" />
      <h1 className=' text-[52px] font-abc font-[700] lg:text-[88px] leading-[120%] -mt-3 lg:-mt-5'>Putuk Truno Camp Area</h1>
      <div >
        <p className='text-gray-30 mt-5  font-abc xl:w-[510px]'>
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app
        </p>
      </div>
      <div className='flex  mt-12 gap-5 flex-wrap sm:items-center '>
        <div className='flex lg:gap-2'>
          {Array(5).fill(1).map((_, index) => (
            <img src={star} key={index} alt="star" />
          ))}
        </div>
          <p className='  font-abc text-xl text-gray-90'> <b>198k</b>  Excellent Reviews</p>
      </div>

      <div className='flex flex-col sm:flex-row items-center sm:gap-10 sm:items-center '>
          <button className='bg-[#30af5b] p-5 font-bold text-white mt-10 rounded-5xl w-full sm:w-auto font-abc sm:px-9'>Download App</button>

        <button className='flex gap-3 mt-5 font-abc rounded-5xl bg-white w-full justify-center sm:w-auto p-5 sm:mt-10'>
          <img src={play} alt="" />
          <p className='font-bold  text-gray-90 text-[16px]'>How we work?</p>
        </button>
      </div>
     </div>
     

      <div className='text-teal-50 h-full  w-[268px] bg-[#292c27] rounded-3xl p-7 py-8 font-abc xl:mt-10 xl:mb-0 relative '>

        <div className='flex justify-between '>


          <p className='text-gray-20'>
            location
          </p>
          <img src={cross} className='  ' alt="" />

        </div>
        <h1 className='font-bold text-[20px]'>Aguas Calientes</h1>

        <div className='flex gap-5 mt-10 '>
          <div>
            <p className='text-gray-20'>Distance</p>
            <h1 className='font-[700] text-[20px]'>173.28 mi</h1>
          </div>
          <div>
            <p className='text-gray-20'>Elevation</p>
            <h1 className='font-[700] text-[20px] '>2.040 km</h1>
          </div>
        </div>

      </div>
 


    </div>
    </section>
    
  )
}

export default Hero