import React from 'react'
import Header from './Components/Header'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './Components/LandingPage/LandingPage'
import CartPage from './Components/CartPage/CartPage'
import DetailPage from './Components/DetailPage/DetailPage'
import LogIn from './Components/Registration/LogIn'
import SignUp from './Components/Registration/SignUp'


function App() {
  return (
    <>
      <Router>
      <Header />
         <Routes>
            <Route path='/' element ={<LandingPage />} />
            <Route path='/cartpage' element ={<CartPage />} />
            <Route path='/detailpage' element ={<DetailPage />} />
            <Route path='/login' element ={<LogIn />} />
            <Route path='/signup' element ={<SignUp />} />
         </Routes>
      </Router>
    </>
  )
}

export default App