import React from 'react'

function Hero7() {
  return (
    <>
      <div className='bg-[#E4E4E780] p-5 mx-auto'>
        {/* Upper Navbar */}
        <div className=' flex flex-wrap justify-around content-between  '>
          <img src="./public/img/logo.png" alt="" />

          <div className='content-center hidden lg:block ' >
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
          <div >
            <hr className=' border 1px solid border-b-red-900 ' />
          </div>
        </div>
         {/* Lower Navbar */}
        <div className='flex flex-wrap justify-between content-center mt-6'>
           {/* First Part */}
          <div className='flex flex-wrap gap-4'>
            
            <div>
              <h3 className='text-[#71717A] text-xl'>Home - Incidents - New Incident</h3>
              <h1 className='font-bold text-3xl text-other  mt-4  '>New Incident</h1>
            </div>
          </div>
           {/* Last part */}
          <div className='flex flex-wrap gap-4 justify-center content-center'>
                         
          <button className='bg-[white] px-20 py-4 rounded-lg text-other font-Onest font-bold '> Back</button>
              <button className='bg-primary px-20 rounded-lg text-white font-Onest font-bold '>Finished</button>

          </div>
        </div>

    </div>

    <div className='mt-10 mr-0 flex flex-col flex-wrap  justify-center content-center '>
      
        <h1 className='text-4xl font-Onest font-bold mb-5'>Where’s the incident?</h1>
        <h3 className='text-[14px] text-secondary font-medium mb-5 text-xl '>Enter a GPS, address. or pin point on the map. Try to be as accurate as <br/> possible, or click:Jurisdiction Wide</h3>

        <div>
          <img className='mb-10' src="/public/img/map.png" alt="" />
        </div>
    </div>
    <div>
        
    </div>
    </>
  )
}

export default Hero7
