import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Hero4 from './Hero4';
import Hero from './Hero';
import ErrorPage from './ErrorPage';
import Navbar from './Navbar';
import Hero8 from './Hero8';
import Hero5 from './Hero5';
import Hero6 from './Hero6';
import Hero7 from './Hero7';
import Hero3 from './Hero3';

function Dashboard() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Hero/> } />
        <Route path='/Incidents1' element={<Hero4/>} />
        <Route path='/Incidents2' element={<Hero5/> }/>
        <Route path='/Incidents3' element={ <Hero6/> } />
        <Route path='/Incidents4' element={ <Hero7/> } />
        <Route path='/Locations' element={ <Hero8/> } />
        <Route path='/Error' element ={ <ErrorPage/> } />
        <Route path='/Incidents' element ={ <Hero3/> } /> 
          
      </Routes>
    </BrowserRouter>
  )
}

export default Dashboard
