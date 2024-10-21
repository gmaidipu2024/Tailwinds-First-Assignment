import React from 'react'
import { useNavigate } from 'react-router-dom';

// Incident Dashbord
function Hero3() {
  const Navigate = useNavigate();
  return (
    <>
      <div className='flex flex-wrap justify-between content-center py-3 bg-[#E4E4E780] ml-4 mr-4'>
           {/* First Part */}
          <div>
            <h3 className='text-[#71717A] '>Home - Incidents</h3>
            <h1 className='font-bold text-3xl '>Incidents</h1>
          </div>
           {/* Last part */}
          <div className='flex flex-wrap gap-4 justify-center content-center'>
            <div>
             <input className='p-4 outline-none' type="text" placeholder='Search incident' />
            </div>
              
              <span className='bg-[white] p-4'>Sort By: Date modified</span>
              <button onClick={()=>Navigate('/Incidents1') } className='bg-primary p-4 rounded-lg text-white font-Onest font-bold '> + New Incidents</button>

          </div>
    </div>
    <div className='flex flex-wrap'>
      {/* dis1 */}
    <div className='mt-10 mb-10 p-4 w-[306px] h-[253px] '>
      <img className=' relative ' src="/img/disas1.png" alt="" />

      <div className='mt-[-215px] ml-[160px] bg-white   m-6  z-0 rounded-full p-2 absolute flex  gap-4 items-center'>
        <img className='w-full h-fit' src="/img/clouds.png" alt="" />
        
        <h1 className='text-other font-bold '>Blizzard</h1>
      </div>
      <div className='mt-4 mb-4'>
        <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
        <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
        <h2 className='text-other font-bold'>$1,456,654.00</h2>
      </div>
     </div>
   {/* dis2 */}
     <div className='mt-10 mb-10 p-4 w-[306px] h-[253px] '>
      <img className=' relative ' src="/img/Rectangle 2.png" alt="" />

      <div className='mt-[-215px] ml-[160px] bg-white   m-6  z-0 rounded-full p-2 absolute flex  gap-4 items-center'>
        <img className='w-full h-fit' src="/img/clouds.png" alt="" />
        
        <h1 className='text-other font-bold '>Blizzard</h1>
      </div>
      <div className='mt-4 mb-4'>
        <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
        <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
        <h2 className='text-other font-bold'>$1,456,654.00</h2>
      </div>
     </div>
    {/* dis3 */}
     <div className='mt-10 mb-10 p-4 w-[306px] h-[253px] '>
      <img className=' relative ' src="/img/Rectangle3.png" alt="" />

      <div className='mt-[-215px] ml-[160px] bg-white   m-6  z-0 rounded-full p-2 absolute flex  gap-4 items-center'>
        <img className='w-full h-fit' src="/img/clouds.png" alt="" />
        
        <h1 className='text-other font-bold '>Blizzard</h1>
      </div>
      <div className='mt-4 mb-4'>
        <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
        <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
        <h2 className='text-other font-bold'>$1,456,654.00</h2>
      </div>
     </div>
    {/* dis4 */}
     <div className='mt-10 mb-10 p-4 w-[306px] h-[253px] '>
      <img className=' relative ' src="/img/Rectangle 4.png" alt="" />

      <div className='mt-[-215px] ml-[160px] bg-white   m-6  z-0 rounded-full p-2 absolute flex  gap-4 items-center'>
        <img className='w-full h-fit' src="/img/clouds.png" alt="" />
        
        <h1 className='text-other font-bold '>Blizzard</h1>
      </div>
      <div className='mt-4 mb-4'>
        <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
        <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
        <h2 className='text-other font-bold'>$1,456,654.00</h2>
      </div>
     </div>
    </div>
    
      {/* dis5 */}
    <div className='mt-5 flex flex-wrap'>
    <div className='mt-10 mb-10 p-4 w-[306px] h-[253px] '>
      <img className=' relative ' src="/img/Rectangle5.png" alt="" />

      <div className='mt-[-215px] ml-[160px] bg-white   m-6  z-0 rounded-full p-2 absolute flex  gap-4 items-center'>
        <img className='w-full h-fit' src="/img/clouds.png" alt="" />
        
        <h1 className='text-other font-bold '>Blizzard</h1>
      </div>
      <div className='mt-4 mb-4'>
        <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
        <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
        <h2 className='text-other font-bold'>$1,456,654.00</h2>
      </div>
     </div>

     <div className='mt-10 p-4 w-[306px] h-[253px] '>
      <img className=' relative ' src="/img/Rectangle6.png" alt="" />

      <div className='mt-[-215px] ml-[160px] bg-white   m-6  z-0 rounded-full p-2 absolute flex  gap-4 items-center'>
        <img className='w-full h-fit' src="/img/clouds.png" alt="" />
        
        <h1 className='text-other font-bold '>Blizzard</h1>
      </div>
      <div className='mt-4 mb-4'>
        <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
        <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
        <h2 className='text-other font-bold'>$1,456,654.00</h2>
      </div>
     </div>
    </div>
     
    </>
  )
}

export default Hero3;
