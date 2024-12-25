import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import DashBoard from './pages/DashBoard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LandingPage/>
     <DashBoard/>
    </>
  )
}

export default App
