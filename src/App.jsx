import React from 'react'
import Home from './components/pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './components/pages/Login/Login'
import Player from './components/pages/Player/Player'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
