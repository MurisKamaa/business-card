import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import About from './components/About'
import Interests from './components/Interests'
import Socials from './components/Socials'

function App() {
  return (
    <div className='container'>
        <Header />
        <About />
        <Interests />
        <Socials />
    </div>
)
}

export default App
