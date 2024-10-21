import React from 'react'

{/* Dashboard */}
function Hero() {
  return (
    <>

    <div className='flex flex-wrap justify-between content-center py-4 bg-[#E4E4E780] ml-4 mr-4 '>
           {/* First Part */}
          <div className=' p-5  '>
            <h3 className='text-[#71717A] mb-2 '>Welcome back</h3>
            <h1 className='font-bold text-3xl '>Dashboard</h1>
          </div>
           {/* Last part */}
          <div className='flex flex-wrap gap-4 justify-center items-center p-4'>
            <div>
             <input className='p-5 outline-none w-full md:fit' type="text" placeholder='Search incident' />
            </div>
              
              <span className='bg-[white] p-5 w-full md:w-fit'>Sort By: Date modified</span>
              <button className='bg-primary p-5 w-full md:w-fit rounded-lg text-white font-Onest font-bold '> Cypher AI</button>

          </div>
    </div>
    <div className='flex flex-wrap'>
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
    {/* dis1 */}
      {/* dis5 */}
    <div className='mt-5 flex flex-wrap mb-10'>
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

     <div className='mt-10 p-4 w-[306px] h-[253px] mb-10 '>
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

export default Hero;
