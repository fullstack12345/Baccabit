
import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Baccarat from "./Components/Baccarat";
import { GifLoader } from './Components/Baccarat/GifLoader';
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleGifEnd = () => {
    setIsLoading(false);
  }

  return (
    <div className='app'>
      {
        isLoading ?
        <div className='loader-wrap'>
          <GifLoader src="vedios/bbs_anim.gif" onEnded={handleGifEnd} />
        </div> :
        <Baccarat />
      }
      {/* <Router>
        <Routes>
          <Route path='/game' element={<Baccarat />} />
        </Routes>
      </Router> */}
      
    </div>
  );
};
export default App;
