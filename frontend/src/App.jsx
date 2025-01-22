import { useState } from 'react'
//import './App.css'

import { Routes, Route } from 'react-router-dom'
import UsersList from './components/UsersList'
import AddUser from './components/AddUser'
import NoMatchPage from './pages/NoMatchPage'
import NavBar from './components/NavBar'
import UpdateUser from './components/UpdateUser'
/* import ToggleMode from './components/ToggleMode' */

function App() {

  return (
    <>
      <NavBar></NavBar>
      {/* <ToggleMode></ToggleMode> */}
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/user' element={<AddUser />} />
        <Route path='/user/:id' element={<UpdateUser />} />
        <Route path='*' element={<NoMatchPage />}></Route>
      </Routes>
    </>
  )
}

export default App
