import React from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Commponents/Login'
import Profile from './Commponents/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <h1>React Context Api Undersatading</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App