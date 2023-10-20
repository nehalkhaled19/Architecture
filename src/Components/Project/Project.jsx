import React from 'react'
import './Project.css'
import { Outlet } from 'react-router-dom'

export default function Project() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}
