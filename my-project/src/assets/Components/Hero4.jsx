
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Hero5 from './Hero5';

// incident Page 1
function Hero4() {
    const Navigate = useNavigate();
  return (
    <>
      
      <div className='flex flex-wrap flex-col justify-center content-center items-center'>
        <div className=''>
          <h1 className='text-center mt-5 mb-3 text-other font-Onest text-2xl font-bold '>Let’s get started</h1>
          <p  className='text-secondary w-fit text-justify text-wrap text-xl line-clamp-6 mb-5 ml-4 mr-4'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum  dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
        </div>

        <div className=''>

          <div className='flex flex-wrap justify-between '>
            <img src="/img/Ellipse 688.png" alt="" />
            <img src="/img/Ellipse 688.png" alt="" />
            <img src="/img/Ellipse 688.png" alt="" />
          </div>
          <img className='mt-[-18px]' src="/img/Rectanglel.png" alt="" />

        </div>
      </div>
      {/* Last Part */} 
      <div className='flex flex-wrap justify-around  '>

        <div className='bg-[#E4E4E7] ml-4 mr-4 mt-10 p-8 rounded-lg mb-5 border: 1px solid #E4E4E7'>
          <div>
            <img className='w-[54px] mb-10 mt-10' src="/img/Frame.png" alt="" />
          </div>
          <div>
            <h1 className='text-other text-2xl font-bold mt-5 mb-4 font-Onest '>Where did the <br/> incident occur?</h1>
            <p className='text-secondary text-xl leading-10 font-Onest '>Lorem ipsum dolar sit general <br/> sac mascho werho</p>
          </div>
        </div>
        <div className='bg-[#E4E4E7] ml-4 mr-4 mt-10 p-8 rounded-lg mb-5 border: 1px solid #E4E4E7'>
          <div>
            <img className='w-[54px] mb-10 mt-10' src="/img/Frame.png" alt="" />
          </div>
          <div>
            <h1 className='text-other text-2xl font-bold mt-5 mb-4 font-Onest '>Tell us about the <br/> incident?</h1>
            <p className='text-secondary text-xl leading-10 font-Onest '>Let’s connect the dots and <br/> see where to start.</p>
          </div>
        </div>

        <div className='bg-[#E4E4E7] ml-4 mr-4 mt-10 p-8 rounded-lg mb-5 border: 1px solid #E4E4E7'>
          <div>
            <img className='w-[54px] mb-10 mt-10' src="/img/Frame (1).png" alt="" />
          </div>
          <div>
            <h1 className='text-other text-2xl font-bold mt-5 mb-4 font-Onest '>Where did the 
            <br/> incident occur?</h1>
            <p className='text-secondary text-xl leading-10 font-Onest '>Lorem ipsum dolar sit general <br/> sac mascho werhof</p>
          </div>
        </div>
        

      </div>
      <div className='text-center'>
      <button onClick={()=> Navigate( '/Incidents2' ) } className='bg-primary p-5 mb-5 mt-5 rounded-lg text-white font-Onest font-bold text-2xl '> Get Start </button>
      
      </div>
      
    </>
  )
}

export default Hero4;
