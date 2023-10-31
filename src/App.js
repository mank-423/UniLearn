import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Subject from './Pages/Subject'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function App() {

  return (
    <div>

      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/subjects' element={<Subject />} />
          </Routes>
        </BrowserRouter>
      </>



    </div>
  )
}
