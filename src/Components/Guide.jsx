import React from 'react'
import camp from '../imgs/camp.svg'
import boat from '../imgs/boat.png'
import meter from '../imgs/meter.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Guide() {
  return (
   <section className='max-w-[1440px] mx-auto lg:mt-24 xl:mt-52'id='Guide'  >
    <div className='p-5 lg:p-10 lg:px-20 3xl:px-0 '>
      <img src={camp} className='' alt="" />
           <h2 className='text-green-50 text-[20px]'>WE ARE HERE FOR YOU</h2>


           <div className='xl:flex xl:items-center xl:justify-between'>
        <h1 className='font-bold text-[38px] leading-[50px] mt-4 font-abc lg:text-[64px] xl:max-w-[390px] xl:leading-[120%]'>Guide You to Easy Path</h1>
         <p className='mt-7 text-gray-30 text-[16px] font-[400] font-abc lg:mt-10 xl:max-w-[520px]   xl:mt-0'>Only with the hilink application you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>
            </div>
       
    </div>

    <div className=' bg-cover bg-center mt-20 relative flex items-center justify-center ' data-aos='zoom-in' data-aos-easing="linear"
     data-aos-duration="500">
        <img src={boat} className='w-full object-cover 2xl:rounded-5xl  relative object-center' alt="" />
   <div className='flex w-[17rem] p-5 bg-white rounded-3xl  shadow-lg mx-auto   py-8 pl-5 pr-7  absolute md:left-10 lg:top-20 lg:left-20'>
  <img src={meter} alt="" />
    <div className='flex ml-2 w-full gap-10 flex-col'>
        <div className=''>
            <div className='flex justify-between w-full'>
                <p className='text-gray-20'>Destination</p>
                <p className='font-bold text-green-50 text-[17px]'>48 min</p>
            </div>
           <p className='font-bold text-[21px] mt-2'>Aguas Calientes</p>
        </div>
        <div>
          <p className='text-gray-20'>Start track</p>
          <p className='font-bold text-[20px]'>Wonorejo Pasuruan</p>
        </div>
    </div>
   </div>
    </div>
   </section>
  )
}

export default Guide