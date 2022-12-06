import React from 'react'
import './index.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './home/home';
import Sinopse from './sinopse/sinopse';
import Sinopse2 from './sinopse/sinopse2/sinopse-box';
import Sinopse3 from './sinopse/sinopse3/sinopse3';
import Sinopse4 from './sinopse/sinopse4/sinopse4';


function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FilipeRet' element={<Sinopse />} />
        <Route path='/Djonga' element={<Sinopse2 />} />
        <Route path='/Sidoka' element={<Sinopse3 />} />
        <Route path='/Orochi' element={<Sinopse4 />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
