import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Subject from './Pages/Subject'
import Navbar from './components/Navbar'
import About from './Pages/About'
import Admin from './Pages/Admin'

export default function App() {

  return (
    <div>

      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/subjects' element={<Subject />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </>



    </div>
  )
}
