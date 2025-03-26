
import './App.css'
import './index.css'
import LoadingScreen from './components/LoadingScreen'
import { useState } from 'react';
import Navbar from './components/personal/Navbar';
import MobileMenu from './components/personal/MobileMenu';
import Home from './components/personal/sections/home';
import About from './components/personal/sections/About';
import Projects from './components/personal/sections/Projects';
import Contact from './components/personal/sections/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  return (
    <>
     {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>}{""}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-0"} bg-black text-gray-100`} >
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
