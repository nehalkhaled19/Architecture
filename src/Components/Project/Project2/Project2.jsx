import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../../images/archi-9-x.jpg'


export default function Project2() {
  return (
    <div>
         {/* title */}
         <section className=' h-50'>
        <div className="conatiner py-5 about-title">
          <div className='about-text-color h-100 d-flex flex-column justify-content-center text-center' >
            <h1 className='main-font-weight my-3'>Holyday Residence</h1>
            <div className='project-navbar'>
              <Link className='text-decoration-none mx-2 to-home' to={'/Architecture'}>
                Home
              </Link>

              <span className='project-name'>Holyday Residence</span>

            </div>

          </div>
        </div>
      </section>
      {/* body */}
      <div className="container text-center py-4">
      <img src={img1} className='w-100' alt="project2" />
      <div className="row py-5 text-start ">
        <div className="col-lg-7 ">
        <h4>About Project</h4>
            <p className='About-Project-p'>
              Eius populus ab incunabulis primis ad usque pueritiae tempus extremum, quod annis circumcluditur fere trecentis, circummurana pertulit bella, deinde aetatem ingressus adultam post multiplices bellorum aerumnas Alpes transcendit et fretum, in iuvenem erectus et virum ex omni plaga quam orbis ambit inmensus, reportavit laureas et triumphos, iamque vergens in senium et nomine solo aliquotiens vincens ad tranquilliora vitae discessit.
            </p>
        </div>
        <div className="col-lg-4 offset-lg-1  px-4">
        <ul className='list-unstyled'>
              <li className=' py-2  About-Project-border  '>
                <div className="row ">
                  <div className=" col-lg-5 col-md-4 col-sm-3">
                    <span className='About-Project-p n'>Categories:</span>
                  </div>
                  <div className="col-lg-7 col-md-8 col-sm-9 ">
                    <span>Open Space</span>
                  </div>
                </div>
              </li>
              <li className=' py-2  About-Project-border '>
                <div className="row ">
                  <div className=" col-lg-5 col-md-4 col-sm-3">
                    <span className='About-Project-p '>Project URL:</span>
                  </div>
                  <div className="col-lg-7 col-md-8 col-sm-9 ">
                    <span>http://www.project-link.com</span>
                  </div>
                </div>
              </li>
              <li className=' py-2 About-Project-border '>
              <div className="row ">
                  <div className="col-lg-5  col-md-4 col-sm-3">
                  <span className='About-Project-p'>Client:</span>
                  </div>
                  <div className="col-lg-7 col-md-8 col-sm-9">
                      <span >Coffee shop & restaurant</span>
                  </div>
                </div>
              </li>
              <li className=' py-2 ' >
              <div className="row">
                  <div className=" col-lg-5 col-md-4 col-sm-3">
                  <span className='About-Project-p'>Date:</span>
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
          <Link to={'..'} className='d-flex w-50 align-items-center text-decoration-none'>
          <div className='me-md-4 me-2' >
                <i class="fa-solid fa-angle-left" style={{ color: "#000000b3" }}></i>
              </div>
              <div className='F'>
                <span>Previuos Project</span>
                <p>Minimal Interior</p>
              </div>
             
            </Link>
            <Link to={'../co-working-design'} className='w-50 d-inline justify-content-end d-flex align-items-center text-decoration-none'>
              <div className='mx-md-4 mx-2 text-end'>
                <span>Next Project</span>
                <p>Co-working Design</p>
              </div>
              <div >
                <i class="fa-solid fa-angle-right" style={{ color: "#000000b3" }}></i>
              </div>
            </Link>

          </div>
        </div>

      </section>
    </div>
  )
}
