import React from 'react'
import { useNavigate } from 'react-router-dom'

//  Last Incident Page 
function Hero7() {
  const Navigate = useNavigate();
  return (
    <>
      <div className='bg-[#E4E4E780] p-5 mx-auto'>
        
        
         {/* Lower Navbar */}
         <div className='flex flex-wrap justify-between content-center mt-6'>
           {/* First Part */}
          <div>
            <h3 className='text-[#71717A] '>Home - Incidents - New Incident</h3>
            <h1 className='font-bold text-3xl text-other  mt-4 mb-4 '> New Incident</h1>
          </div>
           {/* Last part */}
          <div className='flex flex-wrap gap-4 justify-center content-center'>
                         
          <button onClick={()=>Navigate ('/Incidents3')} className='bg-[white] px-20 rounded-lg text-other font-Onest font-bold w-full md:w-fit p-4 '> Go Back</button>
              <button onClick={()=>Navigate ('/')}  className='bg-primary p-4 rounded-lg text-white font-Onest font-bold w-full md:w-fit'> Finished</button>

          </div>
        </div>

    </div>

    <div className='mt-10  flex flex-col flex-wrap  justify-center content-center ml-4 mr-4 '>
      
        <h1 className='text-4xl font-Onest font-bold mb-5'>Where’s the incident?</h1>
        <h3 className=' font-Onest text-[14px] text-secondary font-medium mb-5  '>Enter a GPS, address. or pin point on the map. Try to be as accurate as <br/> possible, or click:Jurisdiction Wide</h3>

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
