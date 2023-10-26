import React, { useEffect } from 'react'
import logo from '../../images/logo-dark.png'
import logoLight from '../../images/logo-light.png'

import { NavLink } from 'react-router-dom'
import $ from 'jquery'

export default function Nav() {


  // to change navbar bgcolor
  window.addEventListener("scroll", function () {

    let scrollingTop = $(this.window).scrollTop()
    if (scrollingTop > 30) {
      $('nav').addClass('navbarHome-bg');
      $('#logo').attr('src',logoLight)
      $(':root').css("--dark-color", "white")
    }
    else {
      $('nav').removeClass('navbarHome-bg ')
      $(':root').css("--dark-color", "#262626")
      $('#logo').attr('src',logo)
    }
  })

  // on click on navbar button
  function navBg() {
    $('nav').addClass('navbarHome-bg ')
    $('#logo').attr('src',logoLight)
    $(':root').css("--dark-color", "white")
  }

  return <>
    <nav className="fixed-top py-4  navbar navbar-expand-lg bg-transparent ">
      <div className="container px-2">

        <NavLink className='navbar-brand d-inline' to={'../'}>
          <img id='logo' src={logo} alt="logo-white" />
        </NavLink>

        <button onClick={navBg} className="navbar-toggler ms-auto text-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "nav-link dark-nav activeLink px-2" : 'nav-link dark-nav px-2' } to={'../'}>Home</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "nav-link dark-nav activeLink px-2" : 'nav-link dark-nav px-2' } to={'../about'}>About</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "nav-link dark-nav activeLink px-2" : 'nav-link dark-nav px-2' } to={'../services'}>Services</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "nav-link dark-nav activeLink px-2" : 'nav-link dark-nav px-2' } to={'../works'}>Works</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "nav-link dark-nav activeLink px-2 " : 'nav-link dark-nav px-2 '} to={'../project'}>Single Project</NavLink>
            </li>
            <li className="nav-item mx-2">
              <NavLink className={({ isActive }) => isActive ? "nav-link dark-nav activeLink px-2 " : 'nav-link dark-nav px-2 '} to={'../contactus'}>Contact Us</NavLink>
            </li>

          </ul>
        </div>
      </div>

    </nav >
  </>

}
