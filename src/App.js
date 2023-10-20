import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Works from './Components/Works/Works'
import Project1 from './Components/Project/Project1/Project1'
import Project2 from './Components/Project/Project2/Project2'
import Project3 from './Components/Project/Project3/Project3'
import Project4 from './Components/Project/Project4/Project4'
import Project5 from './Components/Project/Project5/Project5'




export default function App() {



  let routes = createBrowserRouter([
    {
      path: 'Architecture', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path:'about', element: <About></About> },
        { path:'services', element: <Services></Services> },
        { path:'works', element: <Works></Works> },
        { path:'project', element: <Project></Project>, children :[
          {path : '' ,element:<Project1></Project1>},
          {path : 'holyday-residence' ,element:<Project2></Project2>},
          {path : 'co-working-design' ,element:<Project3></Project3>},
          {path : 'concrete-house-on-lake' ,element:<Project4></Project4>},
          {path : 'interior-design'  ,element:<Project5></Project5>}
        ] },
        { path:'contactus', element: <Contact></Contact> },

      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}
