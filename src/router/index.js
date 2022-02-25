import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from '../views/About'
import Home from '../views/Home'
import NotFound from '../views/error/NotFound'
import Navbar from '../components/Navbar'
import Login from '../views/auth/Login'
import Contact from '../views/Contact'

function Router(props) {
  return (
    <Routes>
        <Route path="/" element={<Navbar />}>
            <Route path="" element={<Home />} />
        </Route>

        <Route path="/contact" element={<Navbar />}>
            <Route path="" element={<Contact />} />
        </Route>

        <Route path="/about"  element={<Navbar />}>
            <Route path="" element={<About />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound /> } />
    </Routes>
  )
}

export default Router