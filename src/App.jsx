
import React from 'react'
import Nav from './Components/nav/nav'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Galerie from './Components/Galerie/Galerie'
import Footer from './Components/Footer/Footer'
import Drepturi from './Components/Drepturi/Drepturi'
import ObiectiveTuristice from './Components/ObiectiveTuristice/ObiectiveTuristice'


const App = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Galerie/>
      <ObiectiveTuristice/>
      <Footer/>
      
      <Drepturi/>
    </div>
  )
}

export default App
