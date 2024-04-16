import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Resume from './components/Resume';




const App = () => {
  return (
    <BrowserRouter>
    <div className = "relative z-0 bg-primary">
      <div className = "bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-0 bg-center">
        <About />
        <Experience />
        <Tech />
        <Resume /> 
        <Works />
      </div>
        <Contact />
        <StarsCanvas />
    </div>
    </BrowserRouter>
  )
}

export default App
