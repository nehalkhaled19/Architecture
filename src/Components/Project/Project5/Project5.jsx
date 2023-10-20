import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../../images/home-1.jpg'
import img2 from '../../../images/home-2.jpg'
import img3 from '../../../images/home-3.jpg'
import $ from 'jquery'


export default function Project5() {
  
  return (
    <div>
      {/* title */}
       {/* title */}
       <section className=' h-50'>
        <div className="conatiner py-5 about-title">
          <div className='about-text-color h-100 d-flex flex-column justify-content-center text-center' >
            <h1 className='main-font-weight my-3'>Interior Design</h1>
            <div className='project-navbar'>
              <Link className='text-decoration-none mx-2 to-home' to={'/Architecture'}>
                Home
              </Link>

              <span className='project-name'>Interior Design</span>

            </div>

          </div>
        </div>
      </section>
      {/* body */}
      <div className="container pb-4 ">
        <div className="row">
          <div className="col-lg-8 py-4">

            {/* carousel */}
            <OwlCarousel className='owl-theme ' dots items={1} loop  >
              <div class='item w-100 '>
                <img src={img1} alt='home1' />
              </div>
              <div class='item w-100 '>
                <img src={img2} alt='home2' />
              </div>
              <div class='item w-100 '>
                <img src={img3} alt='home3' />
              </div>

            </OwlCarousel>

          </div>
          {/* About Project */}
          <div className='col-lg-4 py-4 About-Project'>
            <h4>About Project</h4>
            <p className='About-Project-p'>
              Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed eum in certamen alacriter consurgentem revocavere ductores rati intempestivum anceps subire certamen cum haut longe muri distarent, quorum tutela securitas poterat in solido locari cunctorum.
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
          <Link to={'../concrete-house-on-lake'} className='d-flex w-100 align-items-center text-decoration-none'>
          <div className='me-md-4 me-2' >
                <i class="fa-solid fa-angle-left" style={{ color: "#000000b3" }}></i>
              </div>
              <div >
                <span>Previuos Project</span>
                <p>Concrete House on Lake</p>
              </div>
             
            </Link>
           

          </div>
        </div>

      </section>
    </div>
  )
}
