import React from 'react'
import logo from '../../images/logo-light.png'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  //bg-transparent 
  return <>
    <nav className="fixed-top  navbar navbar-expand-lg   bg-black">
      <div className="container  px-5">
        <div className=" py-3 d-flex w-100 m-auto">
          <NavLink className='navbar-brand' to={''}>
            <img src={logo} className='w-50' alt="logo-white" />
          </NavLink>

          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className='nav-link text-white mx-2' to={''}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link mx-2' to={'about'}>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link mx-2' to={'services'}>Services</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link mx-2' to={'works'}>Works</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link mx-2' to={'project'}>Single Project</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className='nav-link mx-2' to={'contactUs'}>Contact Us</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </div >
    </nav >
  </>

}
