import { useState } from 'react'
//import './App.css'

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoMatchPage from './pages/NoMatchPage'
import NavBar from './components/NavBar'
/* import ToggleMode from './components/ToggleMode' */

function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <ToggleMode></ToggleMode> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/create' element={<CreatePage />} />
        <Route path='*' element={<NoMatchPage />}></Route>
      </Routes>
    </>
  )
}

export default App
