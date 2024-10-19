import React from 'react'

function Hero8() {
  return (
    <>
      <div className='bg-[#E4E4E780] p-5 mx-auto'>
        {/* Upper Navbar */}
        <div className=' flex justify-between content-center flex-wrap  '>
          <img src="./public/img/logo.png" alt="" />

          <div className='content-center' >
            <ul className='flex flex-wrap flex-row gap-4 text-[#71717A] font-semibold '>
              <li className='active'>Dashboard</li>
              <li>Incidents</li>
              <li>Locations</li>
              <li>Activities</li>
              <li>Documents</li>
              <li>Cypher AI</li>
            </ul>
          </div>
          <div className='flex flex-wrap content-center gap-4 '>
            <img className='p-1' src="/public/img/nav.png" alt="" />
            <img className='p-1' src="./public/img/Rectangle 5412.png" alt="" />
            <div>
              <h1>Goutam Adhikari Dipu</h1>
              <h3>gtm10322@gmail.com</h3>
            </div>  
          </div>

        </div>
         {/* Lower Navbar */}
        <div className='flex justify-between content-center mt-6'>
           {/* First Part */}
          <div>
            <h3 className='text-[#71717A] '>Incidents - DR-4699 March 2023 Severe Storms </h3>

            <div className='flex  gap-1'>
              <img className='p-3' src="/public/img/tree.png" alt="" />
            <h1 className='font-bold text-3xl p-2'>DR-4699 March 2023 Severe Storms</h1>
            </div>
            
          </div>
           {/* Last part */}
          <div className='flex flex-wrap gap-4 justify-center content-center'>
            <div>
             <input className='p-4 outline-none' type="text" placeholder='Search incident' />
            </div>
              
              <span className='bg-[white] p-4'>Sort By: Date modified</span>
              <button className='bg-primary p-4 rounded-lg text-white font-Onest font-bold '> + New Locations</button>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className='flex  gap-5'>
            {/* Part 1 */}
            <div className='w-[100%] mt-10 '>
              <div className='flex flex-wrap gap-2 p-2 '>
                    <img className='p-4 w-20 ' src="/public/img/locat.png" alt="" />
                  <div>
                    <p className='text-secondary mb-3'>Location</p>
                    <h1 className='text-other text-2xl font-semibold '>Tulare County,  Los Angles, CA 23415</h1>
                  </div>
              </div>

              <div className='flex flex-wrap gap-2 p-2 '>
                    <img className='p-4 w-20 ' src="/public/img/cam.png" alt="" />
                  <div>
                    <p className='text-secondary mb-3'>Approx. Cost:</p>
                    <h1 className='text-other text-2xl font-semibold '>$60,607,456.00</h1>
                  </div>
              </div>
              <div>
                <span>Description</span>
                <p className='text-justify  '>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho  werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit  general sac mascho werhoLorem ipsum dolar sit general sac mascho  werhoLorem ipsum dolar sit general sac mascho werho</p>
              </div>

              <div className='mt-10 mb-10 p-4 w-[214px] h-[241px] '>
                <img className=' relative ' src="/public/img/Rectangle3.png" alt="" />

                <div className='mt-[-215px] ml-[160px] bg-white   m-6  z-0 rounded-full p-2 absolute flex  gap-4 items-center'>
                  <img className='w-full h-fit' src="/public/img/clouds.png" alt="" />
                  
                  <h1 className='text-other font-bold '>Blizzard</h1>
                </div>
                <div className='mt-4 mb-4'>
                  <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
                  <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
                  <h2 className='text-other font-bold'>$1,456,654.00</h2>
                </div>
              </div>
              <div className='mt-10 mb-10 p-4 w-[214px] h-[241px] '>
                <img className=' relative ' src="/public/img/Rectangle3.png" alt="" />

                <div className='mt-[-215px] ml-[160px] bg-white   m-6  z-0 rounded-full p-2 absolute flex  gap-4 items-center'>
                  <img className='w-full h-fit' src="/public/img/clouds.png" alt="" />
                  
                  <h1 className='text-other font-bold '>Blizzard</h1>
                </div>
                <div className='mt-4 mb-4'>
                  <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
                  <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
                  <h2 className='text-other font-bold'>$1,456,654.00</h2>
                </div>
              </div>
              <div className='mt-10 mb-10 p-4 w-[214px] h-[241px] '>
                <img className=' relative ' src="/public/img/Rectangle3.png" alt="" />

                <div className='mt-[-215px] ml-[160px] bg-white   m-6  z-0 rounded-full p-2 absolute flex  gap-4 items-center'>
                  <img className='w-full h-fit' src="/public/img/clouds.png" alt="" />
                  
                  <h1 className='text-other font-bold '>Blizzard</h1>
                </div>
                <div className='mt-4 mb-4'>
                  <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
                  <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
                  <h2 className='text-other font-bold'>$1,456,654.00</h2>
                </div>
              </div>
              <div className='mt-10 mb-10 p-4 w-[214px] h-[241px] '>
                <img className=' relative ' src="/public/img/Rectangle3.png" alt="" />

                <div className='mt-[-215px] ml-[160px] bg-white   m-6  z-0 rounded-full p-2 absolute flex  gap-4 items-center'>
                  <img className='w-full h-fit' src="/public/img/clouds.png" alt="" />
                  
                  <h1 className='text-other font-bold '>Blizzard</h1>
                </div>
                <div className='mt-4 mb-4'>
                  <h1 className='text-other font-bold'>Whitechapel Rd.</h1>
                  <h2 className='text-secondary'>Tulare County,  Los Angles, CA 23415</h2>
                  <h2 className='text-other font-bold'>$1,456,654.00</h2>
                </div>
              </div>

              <div className='flex flex-wrap gap-2 p-2 '>
                    <img className='p-4 w-20 ' src="/public/img/locat.png" alt="" />
                  <div>
                    <p className='text-secondary mb-3'>Location</p>
                    <h1 className='text-other text-2xl font-semibold '>Tulare County,  Los Angles, CA 23415</h1>
                  </div>
              </div>

              <div className='flex flex-wrap gap-2 p-2 '>
                    <img className='p-4 w-20 ' src="/public/img/cam.png" alt="" />
                  <div>
                    <p className='text-secondary mb-3'>Approx. Cost:</p>
                    <h1 className='text-other text-2xl font-semibold '>$60,607,456.00</h1>
                  </div>
              </div>
              

            </div>

             {/* Part 2 */}
            <div className='w-[100%]'>
              <div>
                <h1>Incident Map</h1>
                <img src="/public/img/mp2.png" alt="" />
                <p>Start 19.1232, -118.233     End 19.3245, -119.2323</p>
              </div>
            </div>
    </div>
    </>
  )
}

export default Hero8;
