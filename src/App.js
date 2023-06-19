

import './App.css';
import Main from './components/Main';
import About from './components/About';
import Projects from './components/Projects';
import MyNavbar from './components/MyNavbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import { useState, useEffect } from 'react';



export default function App() {
  const [mousePos, setMousePos] = useState({});
  const color = ""+mousePos.y+", "+mousePos.y+", "+mousePos.y+"";

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className='main-div'>
      <MyNavbar/>
      <BrowserRouter>
      <div>
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color={color}
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={0}
        />
      </div>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}