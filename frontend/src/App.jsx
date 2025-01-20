import { useState } from 'react'
//import './App.css'

import { Routes, Route } from 'react-router-dom'
import UserList from './components/UserList'
import AddUser from './components/AddUser'
import NoMatchPage from './pages/NoMatchPage'
import NavBar from './components/NavBar'
/* import ToggleMode from './components/ToggleMode' */

function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <ToggleMode></ToggleMode> */}
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/create' element={<AddUser />} />
        <Route path='*' element={<NoMatchPage />}></Route>
      </Routes>
    </>
  )
}

export default App
