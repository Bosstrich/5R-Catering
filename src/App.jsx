import { useState } from 'react'
import { Header, Testimonials, Menu, About, Contact, Footer }  from './sections'
import { FloatButton } from './components'

function App() {

  return (
    <>
      <Header/>
      <main className='relative overflow-hidden'>
        <Testimonials/>
        <Menu/>
        <About/>
        <Contact/>
        <Footer/>
        <FloatButton/>
      </main>
    </>
  )
}

export default App
