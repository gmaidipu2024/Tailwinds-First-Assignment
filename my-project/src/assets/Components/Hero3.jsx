import React from 'react'
import Main from './Main'


function Hero3() {
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
          <div className='flex content-center gap-4'>
            <img className='bg-[#FFFFFF] p-4 rounded-full ' src="./public/img/bel.png" alt="" />
            <img src="./public/img/Rectangle 5412.png" alt="" />
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
            <h3 className='text-[#71717A] '>Welcome back</h3>
            <h1 className='font-bold text-3xl '>Dashboard</h1>
          </div>
           {/* Last part */}
          <div className='flex flex-wrap gap-4 justify-center content-center'>
            <div>
             <input className='p-4 outline-none' type="text" placeholder='Search incident' />
            </div>
              
              <span className='bg-[white] p-4'>Sort By: Date modified</span>
              <button className='bg-primary p-4 rounded-lg text-white font-Onest font-bold '> + New Incident</button>

          </div>
        </div>

      </div>
      <Main/>
    </>
  )
}

export default Hero3;
