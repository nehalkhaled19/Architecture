import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../../images/archi16.jpg'

export default function Project3() {
  return (
    <div>
      {/* title */}
      <section className=' h-50'>
        <div className="conatiner py-5 about-title">
          <div className='about-text-color h-100 d-flex flex-column justify-content-center text-center' >
            <h1 className='main-font-weight my-3'>Co-working Design</h1>
            <div className='project-navbar'>
              <Link className='text-decoration-none mx-2 to-home' to={'/Architecture'}>
                Home
              </Link>

              <span className='project-name'>Co-working Design</span>

            </div>

          </div>
        </div>
      </section>
      {/* body */}
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-center">
            <img src={img1} className='imgs-project3' alt="project img" />

          </div>
          {/* About Project */}
          <div className='col-lg-4 py-4 About-Project'>
            <h4>About Project</h4>
            <p className='About-Project-p'>
              Eius populus ab incunabulis primis ad usque pueritiae tempus extremum, quod annis circumcluditur fere trecentis, circummurana pertulit bella, deinde aetatem ingressus adultam post multiplices bellorum aerumnas Alpes transcendit et fretum, in iuvenem erectus et virum ex omni plaga quam orbis ambit inmensus, reportavit laureas et triumphos, iamque vergens in senium et nomine solo aliquotiens vincens ad tranquilliora vitae discessit.
            </p>
            <ul className='list-unstyled'>
              <li className=' py-2  About-Project-border  '>
                <div className="row">
                  <div className="col-lg-5 col-md-4 col-sm-3">
                    <span className='About-Project-p n'>Categories:</span>
                  </div>
                  <div className="col-lg-7 col-md-8 col-sm-9 ">
                    <span>Open Space</span>
                  </div>
                </div>
              </li>
              <li className=' py-2  About-Project-border '>
                <div className="row">
                  <div className="col-lg-5 col-md-4 col-sm-3">
                    <span className='About-Project-p n'>Project URL:</span>
                  </div>
                  <div className="col-lg-7 col-md-8 col-sm-9 ">
                    <span>http://www.project-link.com</span>
                  </div>
                </div>
              </li>
              <li className=' py-2  About-Project-border '>
                <div className="row">
                  <div className="col-lg-5 col-md-4 col-sm-3">
                    <span className='About-Project-p n'>Client:</span>
                  </div>
                  <div className="col-lg-7 col-md-8 col-sm-9">
                    <span >Coffee shop & restaurant</span>
                  </div>
                </div>
              </li>
              <li className=' py-2' >
                <div className="row">
                  <div className="col-lg-5 col-md-4 col-sm-3">
                    <span className='About-Project-p n'>Date:</span>
                  </div>
                  <div className="col-lg-7 col-md-8 col-sm-9">
                    <span>10/20/2023</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

       {/* project footer */}
       <section className='project-footer py-4' >
        <div className="container">
          <div className='d-flex'>
          <Link to={'../holyday-residence'} className='d-flex w-50 align-items-center text-decoration-none'>
          <div className='me-md-4 me-2' >
                <i className="fa-solid fa-angle-left" style={{ color: "#000000b3" }}></i>
              </div>
              <div >
                <span>Previuos Project</span>
                <p>Holyday Residence</p>
              </div>
             
            </Link>
            <Link to={'../concrete-house-on-lake'} className='w-50 d-inline justify-content-end d-flex align-items-center text-decoration-none'>
              <div className='mx-md-4 mx-2 text-end'>
                <span>Next Project</span>
                <p>Concrete House on Lake</p>
              </div>
              <div >
                <i className="fa-solid fa-angle-right" style={{ color: "#000000b3" }}></i>
              </div>
            </Link>

          </div>
        </div>

      </section>
    </div>
  )
}
