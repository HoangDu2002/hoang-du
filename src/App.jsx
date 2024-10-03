import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Project/Projects';
import Skills from './sections/Skills/Skills';
import Clock from './sections/Clock/Clock';
import Navbar from './sections/Navbar/Navbar';
import BackgdLight from './assets/backgr_white.jpg'; 
import BackgdDark from './assets/backgr_b.jpg';  
import { useTheme } from './common/ThemeContext';

function App() {
  const { theme } = useTheme(); 

  return (
    <>
      <Navbar />
      <div className='background'
        style={{
          backgroundImage: `url(${theme === 'light' ? BackgdLight : BackgdDark})`,
          height: '100vh',
          width: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      ></div>
      <div className='h-[600px] flex items-center justify-end'></div>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Clock />
      <Footer />
    </>
  );
}

export default App;
