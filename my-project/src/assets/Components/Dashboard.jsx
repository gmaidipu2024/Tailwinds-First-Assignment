import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Hero4 from './Hero4';
import Hero from './Hero';
import ErrorPage from './ErrorPage';
import Navbar from './Navbar';
import Hero8 from './Hero8';

function Dashboard() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Hero/> } />
        <Route path='/Incidents' element={<Hero4/>} />
        <Route path='/Locations' element={ <Hero8/> } />  
        <Route path='/Error' element ={ <ErrorPage/> } />
          
      </Routes>
    </BrowserRouter>
  )
}

export default Dashboard
