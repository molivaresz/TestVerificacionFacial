//import { useState } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import FacialSovosContextProvider from './context/FacialSovosContextProvider'
import Home from './views/home';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <FacialSovosContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </FacialSovosContextProvider>
    </>
  )
}

export default App
