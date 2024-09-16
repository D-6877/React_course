import React, { useEffect, useState, createContext } from 'react'
import './App.css'
import './index.css'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Dashboard from './Components/Dashboard'
import Navbar from './Components/Navbar'
import ParamCom from './Components/ParamCom'
import Courses from './Components/Courses'
import MockTest from './Components/MockTest'
import Report from './Components/Report'
import Notfound from './Components/Notfound'

const router = createBrowserRouter([
  {
      path:"/",
      element: <div>
        <Navbar />
        <Home />
      </div>
  },
  {
      path:"/about",
      element: <div>
         <Navbar />
         <About />
    </div>
  },
  {
      path:"/dashboard",
      element:<div>
        <Navbar />
        <Dashboard />
    </div>,

    children: [
      {
        path:"courses",
        element: <Courses />
      },
      {
        path:"mocktest",
        element:  <MockTest />
      },
      {
        path:"reports",
        element:  <Report />
      }
    ]
  },
  {
    path:"/student/:id",
    element:<div>
        <Navbar />
        <ParamCom /> 
    </div>

  },
  {
    path:"*",
    element: <Notfound />
  }
])

function App(){
  return(
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App;
