import React from 'react'
import { useNavigate } from 'react-router-dom'

// Incident Page -4
function Hero6() {
  const Navigate =  useNavigate();
  return (
    <>
    <div className='bg-[#E4E4E780] p-5 mx-auto'>
       
         {/* Lower Navbar */}
         <div className='flex justify-between content-center mt-6'>
           {/* First Part */}
          <div>
            <h3 className='text-[#71717A] text-xl'>Home - Incidents - New Incident</h3>
            <h1 className='font-bold text-3xl text-other  mt-4 '> New Incident</h1>
          </div>
           {/* Last part */}
          <div className='flex flex-wrap gap-4 justify-center content-center'>
                         
          <button onClick={()=>Navigate ('/Incidents2')} className='bg-[white] px-20 rounded-lg text-other font-Onest font-bold '> Go Back</button>
              <button onClick={()=>Navigate ('/Incidents4')}  className='bg-primary p-4 rounded-lg text-white font-Onest font-bold '> + New Incident</button>

          </div>
        </div>

    </div>

    <div className='mt-10 mr-0 flex flex-col flex-wrap  justify-center content-center '>
      
        <h1 className='text-3xl font-Onest font-bold mb-5'>Let’s give the incident a title?</h1>
        <h3 className='text-[14px] text-secondary font-medium mb-5 text-xl '>Make a title that will easily identify the incidents</h3>

        <input className='bg-[#F4F4F5] p-5 outline-none mb-5 ' type="text" placeholder='Add title here' />  
      

      
      <h1 className='text-3xl font-Onest font-bold mb-5'>Describe what happened during the incident?</h1>
      <p  className='text-[14px] text-secondary font-medium mb-10 text-xl '>Share some information about the incident. The when, where, how. </p>
      
    </div>
    
    </>
  )
}

export default Hero6
