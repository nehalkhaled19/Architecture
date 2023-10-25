import React from 'react'
import './Project.css'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'

export default function Project() {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  )
}
