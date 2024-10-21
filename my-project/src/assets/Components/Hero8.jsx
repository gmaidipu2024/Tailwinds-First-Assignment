import React from 'react'

function Hero8() {
  return (
    <>
      <div className='flex flex-wrap justify-between content-center py-3 bg-[#E4E4E780] ml-4 mr-4'>
           {/* First Part */}
          <div className='flex  flex-col justify-center '>
            <h3 className='text-[#71717A] text-[13px]'>Incidents-DR-4699 March 2023 Severe Storms </h3>
            <div className='flex flex-wrap justify-center gap-2 p-2'>
              <img src="/img/tree.png" alt="" />
            <h1 className='font-bold text-2xl '>DR-4699 March 2023 Severe Storms</h1>
            </div>
            
          </div>
           {/* Last part */}
          <div className='flex flex-wrap gap-4 justify-center content-center'>
            <div>
             <input className='p-4 outline-none' type="text" placeholder='Search incident' />
            </div>
              
              <span className='bg-[white] p-4'>Sort By: Date modified</span>
              <button className='bg-primary p-4 rounded-lg text-white font-Onest font-bold '> + New  Location</button>

          </div>
        </div>

      {/* Main Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 justify-around  gap-5'>
            {/* Part 1 */}
            <div className=' mt-10 '>
              <div className='flex flex-wrap  gap-2 p-2 '>
                    <img className='p-4 w-20 ' src="/img/locat.png" alt="" />
                  <div>
                    <p className='text-secondary mb-3'>Location</p>
                    <h1 className='text-other text-2xl font-semibold '>Tulare County,  Los Angles, CA 23415</h1>
                  </div>
              </div>

              <div className='flex flex-wrap gap-2 p-2 '>
                    <img className='p-4 w-20 ' src="/img/cam.png" alt="" />
                  <div>
                    <p className='text-secondary mb-3'>Approx. Cost:</p>
                    <h1 className='text-other text-2xl font-semibold '>$60,607,456.00</h1>
                  </div>
              </div>
              <div>
                <span className='ml-8'>Description</span>
                <div className=' text-justify w-fit'>
                <p className=' ml-4 text-wrap mr-4'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho  werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit  general sac mascho werhoLorem ipsum dolar sit general sac mascho  werhoLorem ipsum dolar sit general sac mascho werho</p>
                </div>
              
              </div>
            <div className='grid grid-cols-1 md:grid-cols-3 justify-around items-center '>
            <div className='mt-10 mb-20 p-4 w-[214px] h-[241px]  '>
                <img className=' relative ' src="/img/bldinmg1.png" alt="" />

                <div className='mt-[-145px] ml-[80px] bg-white m-5  z-0 rounded-full p-2 absolute flex  gap-1 items-center'>
                  <img className='w-full h-fit' src="/img/bld.png" alt="" />
                  
                  <h1 className='text-other '>Building</h1>
                </div>
                <div className='mt-4 mb-4'>
                  <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
                  <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
                  <h2 className='text-other font-bold'>$1,456,654.00</h2>
                </div>
              </div>
              <div className='mt-10 mb-20 p-4 w-[214px] h-[241px] '>
                <img className=' relative ' src="/img/buld3.png" alt="" />

                <div className='mt-[-145px] ml-[80px] bg-white m-5  z-0 rounded-full p-2 absolute flex  gap-1 items-center'>
                  <img className='w-full h-fit' src="/img/bld.png" alt="" />
                  
                  <h1 className='text-other '>Building</h1>
                </div>
                <div className='mt-4 mb-4'>
                  <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
                  <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
                  <h2 className='text-other font-bold'>$1,456,654.00</h2>
                </div>
              </div>
              <div className='mt-10 mb-20 p-4 w-[214px] h-[241px] '>
                <img className=' relative ' src="/img/bldinmg1.png" alt="" />

                <div className='mt-[-145px] ml-[80px] bg-white m-5  z-0 rounded-full p-2 absolute flex  gap-1 items-center'>
                  <img className='w-full h-fit' src="/img/bld.png" alt="" />
                  
                  <h1 className='text-other '>Building</h1>
                </div>
                <div className='mt-4 mb-4'>
                  <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
                  <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
                  <h2 className='text-other font-bold'>$1,456,654.00</h2>
                </div>
              </div>
              <div className='mt-5 mb-10 p-4 w-[214px] h-[241px] '>
                <img className=' relative ' src="/img/bldinmg1.png" alt="" />

                <div className='mt-[-145px] ml-[80px] bg-white m-5  z-0 rounded-full p-2 absolute flex  gap-1 items-center'>
                  <img className='w-full h-fit' src="/img/bld.png" alt="" />
                  
                  <h1 className='text-other '>Building</h1>
                </div>
                <div className='mt-4 mb-4'>
                  <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
                  <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
                  <h2 className='text-other font-bold'>$1,456,654.00</h2>
                </div>
              </div>
            </div>
           
                  
             <div className='flex flex-wrap flex-col ml-5 mr-5'>
                <div className='flex justify-between mt-10 mb-3'>
                  <p className='text-other font-semibold'>Activities</p>
                  <p className='text-other font-semibold'>See all</p>
                </div>
                <div className='flex flex-wrap items-center gap-2 p-3 bg-[#F4F4F5] mb-10 '>
                      <img className='p-4 w-20 h-fit ' src="/img/bldinmg1.png" alt="" />
                    <div>
                      <h1 className=' text-other  font-semibold  mb-3'>Activity name</h1>
                      <p className=' text-secondary  mb-3'>Location name
                      16.12212, -122.1424</p>
                      <h1 className='text-other font-semibold mb-3 '>$1,456,654.00</h1>
                    </div>
                </div>
                <div className='flex flex-wrap items-center gap-2 p-2 bg-[#F4F4F5] mb-10 '>
                      <img className='p-4 w-20 h-fit ' src="/img/bldinmg1.png" alt="" />
                    <div>
                      <h1 className=' text-other  font-semibold  mb-3'>Activity name</h1>
                      <p className=' text-secondary mb-3 '>Location name
                      16.12212, -122.1424</p>
                      <h1 className='text-other font-semibold mb-3 '>$1,456,654.00</h1>
                    </div>
                </div>

                <div className='flex justify-between mt-10 mb-3'>
                  <p className='text-other font-semibold'>Documents</p>
                  <p className='text-other font-semibold'>See all</p>
                </div>
                <div className='flex flex-wrap items-center gap-2 p-2 bg-[#F4F4F5] mb-10 '>
                      <img className='p-4 w-20 h-fit ' src="/img/bldinmg1.png" alt="" />
                    <div>
                      <h1 className=' text-other  font-semibold  mb-3'>Activity name</h1>
                      <p className=' text-secondary mb-3 '>Location name
                      16.12212, -122.1424</p>
                      <h1 className='text-other font-semibold mb-3 '>$1,456,654.00</h1>
                    </div>
                </div>
                <div className='flex flex-wrap items-center gap-2 p-2 bg-[#F4F4F5] mb-10 '>
                      <img className='p-4 w-20 h-fit ' src="/img/bldinmg1.png" alt="" />
                    <div>
                      <h1 className=' text-other  font-semibold  mb-3'>Activity name</h1>
                      <p className=' text-secondary  mb-3'>Location name
                      16.12212, -122.1424</p>
                      <h1 className='text-other font-semibold mb-3 '>$1,456,654.00</h1>
                    </div>
                </div>

                
              </div>
              
            </div>

             {/* Part 2 */}
            <div className='mt-10 ml-4 mr-4'>
               <h1 className='text-secondary font-semibold mb-5'>Incident Map</h1>
                <img src="/img/mp2.png" alt="" />
                <p  className='text-secondary font-semibold mt-5 text-[12px]'>Start 19.1232, -118.233     End 19.3245, -119.2323</p>
            </div>
      </div>
    </>
  )
}

export default Hero8;
