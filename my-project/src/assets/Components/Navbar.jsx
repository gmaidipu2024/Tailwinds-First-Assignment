import React from 'react'
import { Link } from 'react-router-dom'

// Navbar
function Navbar(Props) {
  return (
    <>
    {/* Main Div */}
      <div className='bg-[#E4E4E780] p-5 content-center ml-4 mr-4   '>
        {/* Upper Navbar */}
        <div className=' flex justify-between content-center flex-wrap  '>
          <img className='mb-2 text-center' src="./public/img/logo.png" alt="" />

          <div className=' grid grid-cols-12 md:grid-cols-1 justify-between items-center ' >
            <ul className='flex flex-wrap flex-row gap-4 text-[#71717A] font-semibold '>
              <li> <Link to="/" >Dashboard</Link></li>
              <li> <Link to="/Incidents">Incidents </Link> </li>
              <li> <Link to="/Locations">Locations</Link> </li>
              <li> <Link to="/Error">Activities</Link> </li>
              <li> <Link to="/Error">Documents </Link> </li>
              <li> <Link to="/Error">Cypher AI </Link> </li>
            </ul>
          </div>
          <div className='flex flex-wrap items-center gap-4'>
            <img className='bg-[#FFFFFF] p-4 rounded-full ' src="./public/img/bel.png" alt="" />
            <img src="./public/img/Rectangle 5412.png" alt="" />
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
