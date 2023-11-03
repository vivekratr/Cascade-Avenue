import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainpage from './components/Mainpage'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
      <div className='m-0 p-0'>
  

        <Routes>
          <Route path="/" element={<Mainpage /*state = {state}*/ />} />
          
        </Routes>
      
     
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
