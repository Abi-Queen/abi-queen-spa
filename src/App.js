import React from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact'
import Resume from './component/Resume'
import './App.css'

function App() {
  return (
    <div>
      <Nav>
      </Nav>
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
    </div>
  )
}

export default App
