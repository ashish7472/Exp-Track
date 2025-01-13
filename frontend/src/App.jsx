import { useState } from 'react'
import { BrowserRouter as Router} from "react-router-dom";
import './App.css'
import LandingPage from './pages/LandingPage'
import DashBoard from './pages/DashBoard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LandingPage/>
     <Router>
      <DashBoard/>
     </Router>
    </>
  )
}

export default App
