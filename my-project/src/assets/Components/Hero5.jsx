import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHillAvalanche, faDna, faCloud  } from '@fortawesome/free-solid-svg-icons'

function Hero5() {
  return (
    <>
    {/* 1st Section */}
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
          <div >
            <hr className=' border 1px solid border-b-red-900 ' />
          </div>
        </div>
         {/* Lower Navbar */}
        <div className='flex justify-between content-center mt-6'>
           {/* First Part */}
          <div>
            <h3 className='text-[#71717A] text-xl'>Home - Incidents - New Incident</h3>
            <h1 className='font-bold text-5xl text-other  mt-4 font-bold '>New Incident</h1>
          </div>
           {/* Last part */}
          <div className='flex flex-wrap gap-4 justify-center content-center'>
                         
          <button className='bg-[white] px-20 rounded-lg text-other font-Onest font-bold '> Back</button>
              <button className='bg-primary p-4 rounded-lg text-white font-Onest font-bold '> + New Incident</button>

          </div>
        </div>

      </div>
    {/* 2nd Section */}
      <div >
        <h1 className='text-center text-other text-4xl font-bold font-Onest mt-8 mb-8'>Which of these best describes the incident?</h1>
        <div className=' flex flex-wrap gap-3 justify-center items-center mb-5' >
           <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto'>
            <img src="/public/img/fi_67855.png" alt="" />
              <span className='text-secondary'>Avalanche</span>
            </div>

            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto '>
            <img src="/public/img/fi_8931510.png" alt="" />
              <span className='text-secondary'>Biological</span>
            </div>
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto'>
           <img src="/public/img/fi_3496215.png" alt="" />
              <span className='text-secondary'>Blizzard</span>
            </div>
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto'>
           <img src="/public/img/Vector (1).png" alt="" />
              <span className='text-secondary'>Cold/Freezing</span>
            </div>


        </div>

        <div className=' flex flex-wrap gap-3 justify-center items-center mb-5' >
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto '>
           <img src="/public/img/fi_533057.png" alt="" />
              <span className='text-secondary'>Drought</span>
            </div>
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto'>
            <img src="/public/img/erth.png" alt="" />
              <span className='text-secondary'>Earthquake</span>
            </div>
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto'>
           <img src="/public/img/flo.png" alt="" />
              <span className='text-secondary'>Flooding</span>
            </div>
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto'>
           <img src="/public/img/heat.png" alt="" />
              <span className='text-secondary'>Heat Wave</span>
            </div>
        </div>

        <div className=' flex flex-wrap gap-3 justify-center items-center mb-5  ' >
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto '>
            <img src="/public/img/hail.png" alt="" />
              <span className='text-secondary'>Hail</span>
            </div>
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto'>
            <img src="/public/img/light.png" alt="" />
              <span className='text-secondary'>Lightning</span>
            </div>
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto '>
           <img src="/public/img/hand.png" alt="" />
              <span className='text-secondary'>Man Made</span>
            </div>
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto'>
           <img src="/public/img/cld2.png" alt="" />
              <span className='text-secondary'>Mudslide</span>
            </div>
        </div>

        <div className=' flex flex-wrap gap-3 justify-center items-center mb-5' >
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto'>
           <img src="/public/img/storm.png" alt="" />
              <span className='text-secondary'>Severe Storm</span>
            </div>
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto'>
            <img src="t/public/img/strm2.png" alt="" />
              <span className='text-secondary'>Strong Wind</span>
            </div>
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto '>
           <img src="/public/img/trnwdo.png" alt="" />
              <span className='text-secondary'>Tornado</span>
            </div>
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[180px] h-auto'>
           <img src="/public/img/sunami.png" alt="" />
              <span className='text-secondary'>Tsunami</span>
            </div>


        </div>

        <div className=' flex flex-wrap justify-center gap-5 mb-5 ' >
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[200px] h-auto'>
           <img src="/public/img/volano.png" alt="" />
              <span className='text-secondary'>Volcanic Eruption</span>
            </div>
            <div className=' flex flex-wrap gap-4 text-center bg-[#E4E4E7] p-4 w-[200px] h-auto '>
            <img src="/public/img/wild.png" alt="" />
              <span className='text-secondary'>Wildfire</span>
            </div>
        </div>


      </div>
      
    </>
  )
}

export default Hero5



