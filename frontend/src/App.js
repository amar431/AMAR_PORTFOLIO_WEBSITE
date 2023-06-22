import React from 'react'
import {About,Footer,Header,Skills,Projects} from './container/index'
import {Navbar} from './components/'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Projects  />
      <Skills  />
      <Footer  />
    </div>
  )
}

export default App