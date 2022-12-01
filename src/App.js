import React, { useState } from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact'
import Resume from './components/Resume'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [contactSelected, setContactSelected] = useState(false)

  return (
    <div className="App">
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
        <main>
          {!contactSelected ? (
            <>
              <About></About>
              <Portfolio></Portfolio>
              <Resume></Resume>
            </>
          ) : (
            <ContactForm></ContactForm>
          )}
        </main>
      <Footer></Footer>
    </div>
  )
}

export default App
