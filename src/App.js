import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
    <Router>
      <div className="App">
        <Nav
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Nav>
          <main>
            {!contactSelected ? (
              <>
                <Routes>
                  <Route path='/About' element={<About />} />
                  <Route path='/Portfolio' element={<Portfolio />} />
                  <Route path= '/Resume' element={<Resume /> } />
                  <Route path= '*' element={<About />} />
                </Routes>
              </>
            ) : (
              <ContactForm></ContactForm>
            )}
          </main>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App
