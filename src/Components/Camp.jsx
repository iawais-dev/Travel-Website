import React from 'react'
import bg from '../imgs/img-1.png'
import bg2 from '../imgs/img-2.png'
import map from '../imgs/folded-map.svg'
import person1 from '../imgs/person-1.png'
import person2 from '../imgs/person-2.png'
import person3 from '../imgs/person-3.png'
import person4 from '../imgs/person-4.png'
import quote from '../imgs/quote.svg'
function Camp() {
  return (
  <section className='font-abc relative max-w-[1536px] mx-auto 2xl:px-10' >
        <div className='flex hide-scrollbar  xl:h-screen flex-nowrap gap-8 overflow-x-scroll  ' style={{}}>
          <div className='flex flex-col w-full   min-w-[1100px] py-5  pl-7 justify-between lg:py-10 lg:pl-20 mt-44 2xl:rounded-5xl lg:rounded-e-5xl overflow-hidden bg-no-repeat' style={{backgroundImage: `url(${bg})`}}>
      
         <div className='flex gap-3 items-center'>
        <div className='bg-green-50 p-4   rounded-5xl'>
        <img src={map} alt="" />
        </div>
        <div>
            <h1 className='text-white text-lg font-bold'>Putuk Truno Camp</h1>
            <p className='text-white text-sm'>Prigen, Pasuruan</p>
        </div>
    </div>
    <div className='  flex items-center gap-5'>
        <div className='flex -space-x-4'>
             <img src={person1} className='h-10' alt="" />
       <img src={person2} className='h-10 '  alt="" />
       <img src={person3} className='h-10' alt="" />
       <img src={person4} className='h-10' alt="" />
        </div>
      
       <div>
        <p className='text-white font-bold text-xl'>50+ Joined</p>
       </div>
    </div> 
 

        </div>
        <div className='flex flex-col w-full min-w-[1100px] py-5 pl-7 justify-between lg:py-10 lg:pl-20 mt-44 lg:rounded-e-5xl 2xl:rounded-5xl overflow-hidden bg-no-repeat' style={{backgroundImage: `url(${bg2})`}}>
      
         <div className='flex gap-3 items-center'>
        <div className='bg-green-50 p-4   rounded-5xl'>
        <img src={map} alt="" />
        </div>
        <div>
            <h1 className='text-white text-lg font-bold'>Mountain View Camp</h1>
            <p className='text-white text-sm'>Somewhere in the Wilderness</p>
        </div>
    </div>
    <div className='mt-40  flex items-center gap-5'>
        <div className='flex -space-x-4'>
             <img src={person1} className='h-10' alt="" />
       <img src={person2} className='h-10 '  alt="" />
       <img src={person3} className='h-10' alt="" />
       <img src={person4} className='h-10' alt="" />
        </div>
      
       <div>
        <p className='text-white font-bold text-xl'>50+ Joined</p>
       </div>
    </div> 
 

        </div>
        </div>
        
    
     
     <div className='p-5 mt-5 lg:absolute right-10  -bottom-10 xl:-bottom-32 lg:w-[550px] xl:w-[800px]  2xl:-bottom-[270px] 2xl:right-14 '>
        <div className='bg-green-50 rounded-3xl xl:rounded-5xl overflow-hidden p-7 relative xl:p-20 xl:px-16'>

       <h1 className='text-white text-[25px] md:text-[34px] 2xl:text-[65px] 2xl:leading-[120%]  '><strong>Feeling Lost</strong>  And Not Knowing The Way?</h1>
       <p className='text-white mt-5 relative  text-sm lg:pr-10 xl:text-base xl:pr-4'>Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure</p>
       <img src={quote} className='absolute -right-4 bottom-4    w-[140px] lg:bottom-10 xl:-right-8 xl:w-[186px] 3xl:right-0' alt="" />

        </div> 
     </div>
    

  </section>
  )
}

export default Camp