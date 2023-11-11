import { Fragment } from 'react'
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Information from "./components/Information/Information"
function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Information />
    </Fragment>
  )
}

export default App