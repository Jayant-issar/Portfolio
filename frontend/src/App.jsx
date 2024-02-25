import { useState } from 'react'
import { TextRevealCard } from './components/ui/text-reveal-card'
import { Home } from './pages/home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {
  
  return(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeScreen/>} />
    </Routes>
  </BrowserRouter>
  )
  
}

function HomeScreen(){
  return(
    <div id=' the screen' className='h-screen bg-[#040D12] scroll-smooth'>
      <Home />
    </div>
  )
}
export default App
