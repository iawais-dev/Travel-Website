import React from 'react'
import phones from '../imgs/phones.png'
import android from '../imgs/android.svg'
import apple from '../imgs/apple.svg'
import bg from '../imgs/pattern.png'

function GetApp() {
  return (
    <section className=' ' >
       <div className='p-5 pt-10 sm:flex  sm:items-center sm:pb-24 lg:px-20 relative xl:py-28 xl:pb-40 bg-no-repeat bg-cover mt-20  bg-green-90  2xl:rounded-5xl  bg-center overflow-hidden max-w-[1440px] mx-auto xl:max-h-[598px]    'style={{backgroundImage :`url(${bg})`}}>
        <div className='w-full sm:pr-10 flex flex-col sm:w-[50%] xl:pr-0 '>
            <h1 className='text-white  text-[43px] leading-[120%] pr-16 font-abc font-bold sm:pr-0 sm:text-[40px] lg:text-[62px] xl:w-80 '>Get for free now!</h1>
            <p className='text-white mt-10 font-abc'>Available on iOS and Android</p>
           
           <div className='xl:flex xl:items-center xl:mt-10 xl:gap-3  '>
              <button className='bg-white rounded-5xl mt-10 py-3 flex-1 xl:px-20 w-full xl:w-auto xl:py-5 gap-3 flex justify-center items-center  xl:mt-0'>
           <img src={apple} alt="" />
           <p className='text-green-50 font-bold'>App Store</p>
            </button>
   
          
             <button className='rounded-5xl py-5 mt-3 gap-3 flex  flex-1 justify-center w-full xl:w-auto items-center border  xl:px-20 xl:py-5 xl:mt-0'>
             <img src={android} alt="" />
             <p className='text-white font-bold'>Play Store</p>
            </button>  
      
              
           </div>
            
        </div>
           
           <div className='mt-40 sm:mt-12 sm:w-[50%] flex flex-1 items-center justify-center xl:right-0   xl:absolute'>
           <img src={phones} className='  ' width={550} height={870} alt="" />

           </div>
   
       </div>
    </section>
  )
}

export default GetApp