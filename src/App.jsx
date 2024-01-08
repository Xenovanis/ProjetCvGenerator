// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Themes from './components/Themes';
import About from './components/About';
import GetStarted from './features/GetStarted';


const App = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/about" element={<About />} />
        <Route path="/getstarted" element={<GetStarted/>} />
       
      </Routes>
    </>
  );
};

export default App;

