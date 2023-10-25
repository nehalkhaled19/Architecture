import React, { useEffect } from 'react'
import $ from 'jquery'
import { Form, Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'



export default function Layout() {

  // at changing path
  const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  ScrollToTop()




  return (
    <div>
  
      <Outlet />
      <Footer></Footer>
    </div>
  )
}
