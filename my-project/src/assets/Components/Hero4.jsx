
import React from 'react'

// incident Page
function Hero4() {
  return (
    <>
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
      <div className='flex flex-wrap flex-col justify-center content-center items-center'>
        <div className=''>
          <h1 className='text-center mt-5 mb-3 text-other font-Onest text-4xl font-bold '>Let’s get started</h1>
          <p  className='text-secondary text-2xl line-clamp-6 mb-5'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br/> dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
        </div>

        <div className=''>

          <div className='flex flex-wrap justify-between '>
            <img src="/public/img/Ellipse 688.png" alt="" />
            <img src="/public/img/Ellipse 688.png" alt="" />
            <img src="/public/img/Ellipse 688.png" alt="" />
          </div>
          <img className='mt-[-18px]' src="/public/img/Rectanglel.png" alt="" />

        </div>
      </div>
      {/* Last Part */}
      <div className='flex flex-wrap justify-around  '>

        <div className='bg-[#E4E4E7] mt-10 p-8 rounded-lg mb-5 border: 1px solid #E4E4E7'>
          <div>
            <img className='w-[54px] mb-10 mt-10' src="/public/img/Frame.png" alt="" />
          </div>
          <div>
            <h1 className='text-other text-4xl font-bold mt-5 mb-4 font-Onest '>Where did the <br/> incident occur?</h1>
            <p className='text-secondary text-2xl leading-10 font-Onest '>Lorem ipsum dolar sit general <br/> sac mascho werho</p>
          </div>
        </div>
        <div className='bg-[#E4E4E7] mt-10 p-8 rounded-lg mb-5 border: 1px solid #E4E4E7'>
          <div>
            <img className='w-[54px] mb-10 mt-10' src="/public/img/Frame.png" alt="" />
          </div>
          <div>
            <h1 className='text-other text-4xl font-bold mt-5 mb-4 font-Onest '>Tell us about the <br/> incident?</h1>
            <p className='text-secondary text-2xl leading-10 font-Onest '>Let’s connect the dots and <br/> see where to start.</p>
          </div>
        </div>

        <div className='bg-[#E4E4E7] mt-10 p-8 rounded-lg mb-5 border: 1px solid #E4E4E7'>
          <div>
            <img className='w-[54px] mb-10 mt-10' src="/public/img/Frame (1).png" alt="" />
          </div>
          <div>
            <h1 className='text-other text-4xl font-bold mt-5 mb-4 font-Onest '>Where did the 
            <br/> incident occur?</h1>
            <p className='text-secondary text-2xl leading-10 font-Onest '>Lorem ipsum dolar sit general <br/> sac mascho werhof</p>
          </div>
        </div>
        

      </div>
      <div className='text-center'>
      <button className='bg-primary p-5 mb-5 mt-5 rounded-lg text-white font-Onest font-bold text-2xl '> Get started</button>
      
      </div>
      
    </>
  )
}

export default Hero4
