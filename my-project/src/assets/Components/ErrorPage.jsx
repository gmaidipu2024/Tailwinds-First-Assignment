import React from 'react'

function ErrorPage() {
  return (
    <>
      <img src="/public/img/Error.png" alt="" />
      
      <div className='flex flex-wrap justify-between content-center py-3 bg-[#E4E4E780] ml-4 mr-4'>
           {/* First Part */}
          <div>
            <h3 className='text-[#71717A] '>Home-Incident</h3>
            <h1 className='font-bold text-3xl '>Incident</h1>
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
    </>
  )
}

export default ErrorPage;
