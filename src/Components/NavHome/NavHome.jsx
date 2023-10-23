import React, { useEffect } from 'react'
import logo from '../../images/logo-light.png'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

export default function NavHome() {


  // to change navbar bgcolor
  window.addEventListener("scroll", function () {

    let scrollingTop = $(this.window).scrollTop()
    console.log(scrollingTop);
    scrollingTop > 30 ? $('nav').addClass('navbar-bg') : $('nav').removeClass('navbar-bg')
  })

  // on click on navbar button
  function navBg() {
    $('nav').toggleClass('navbar-bg')
  }
  //
  // $('nav .container').css('padding' , '0px')
  return <>
    <nav className="fixed-top py-4  navbar navbar-expand-lg bg-transparent ">
      <div className="container px-2">

        <NavLink className='navbar-brand d-inline' to={''}>
          <img src={logo} alt="logo-white" />
        </NavLink>

        <button onClick={navBg} className="navbar-toggler ms-auto text-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "nav-link activeLink px-2" : 'nav-link px-2 '} to={''}>Home</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "nav-link activeLink px-2" : 'nav-link px-2 '} to={'about'}>About</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "nav-link activeLink px-2" : 'nav-link px-2 '} to={'services'}>Services</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "nav-link activeLink px-2" : 'nav-link px-2 '} to={'works'}>Works</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "nav-link activeLink px-2" : 'nav-link px-2 '} to={'project'}>Single Project</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "nav-link activeLink px-2" : 'nav-link px-2 '} to={'contactus'}>Contact Us</NavLink>
            </li>

          </ul>
        </div>
      </div>

    </nav >
  </>

}
