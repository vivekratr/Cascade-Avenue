import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <div>
  <CrowdfundingProvider>

        <Routes>
          <Route path="/" element={<Mainpage /*state = {state}*/ />} />
          
        </Routes>
        {/* {<RegisterPage/>}  */}
        </CrowdfundingProvider>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
