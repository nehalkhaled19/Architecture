import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Works from './Components/Works/Works'


export default function App() {



  let routes = createBrowserRouter([
    {
      path: 'Architecture', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path:'about', element: <About></About> },
        { path:'services', element: <Services></Services> },
        { path:'works', element: <Works></Works> },
        { path:'project', element: <Project></Project> },
        { path:'contactUs', element: <Contact></Contact> },

      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}
