import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience,  Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Resume from './components/Resume';




const App = () => {
  return (
    <BrowserRouter>
    <div className = "relative z-0 bg-primary">
      <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-0">
        <About />
        <Experience />
        <Tech />
        <Resume /> 
        <Works />
        {/* <Feedbacks /> later add this */}
        <Contact />
        <StarsCanvas />
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
