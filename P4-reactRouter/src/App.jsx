import React from 'react'
import Header from './Commponents/Header/Header'
import Footer from './Commponents/Footer/Footer'
import { Outlet } from 'react-router-dom'

const App = () => { 
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ) 
}

export default App  