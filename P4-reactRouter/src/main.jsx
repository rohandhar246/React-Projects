import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Commponents/Home/Home.jsx'
import About from './Commponents/About/About.jsx'
import User from './Commponents/User/User.jsx'
import Github from './Commponents/User/Github.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="user" element={<User />} />
            <Route path="user/:uid" element={<User />} />
            <Route path='github' element={<Github />} />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
