import React from 'react'
import Nav from '../Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div>
        <Nav></Nav>
        <Outlet/>
        <Footer></Footer>
    </div>
  )
}
