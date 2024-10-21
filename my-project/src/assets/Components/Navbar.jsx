import React from 'react'
import { NavLink } from 'react-router-dom'

// Navbar
function Navbar(Props) {
  return (
    <>
    {/* Main Div */}
      <div className='bg-[#E4E4E780] p-5  ml-4 mr-4   '>
        {/* Upper Navbar */}
        <div className=' flex flex-wrap justify-around gap-5 p-5 text-center  '>
          <img className='mb-2 text-center' src="/img/logo.png" alt="" />

          <div className=' flex ' >
            <ul className=' flex flex-wrap justify-center items-center content-center gap-5 text-[#71717A] font-semibold '>
              <li> <NavLink to="/" >Dashboard</NavLink></li>
              <li> <NavLink to="/Incidents">Incidents </NavLink> </li>
              <li> <NavLink to="/Locations">Locations</NavLink> </li>
              <li> <NavLink to="/Error">Activities</NavLink> </li>
              <li> <NavLink to="/Error">Documents </NavLink> </li>
              <li> <NavLink to="/Error">Cypher AI </NavLink> </li>
            </ul>
          </div>
          <div className='flex flex-wrap justify-center items-center gap-4'>
            <img className='bg-[#FFFFFF] p-4 rounded-full ' src="/img/bel.png" alt="" />
            <img src="/img/Rectangle 5412.png" alt="" />
            <div>
              <h1>Goutam Adhikari Dipu</h1>
              <h3>gtm10322@gmail.com</h3>
            </div>  
          </div>

        </div>
         
        

      </div>
    </>
  )
}

export default Navbar;
