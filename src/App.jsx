import { Fragment } from 'react'
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Services from "./components/Services/Services"
import Information from "./components/Information/Information"
import Gallery from "./components/Gallery/Gallery"
import Contact from "./components/Contact/Contact"
function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Information />
      <Services />
      <Gallery />
      <Contact />
    </Fragment>
  )
}

export default App