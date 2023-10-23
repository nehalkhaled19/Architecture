import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '../../../images/archi-8-700x640.jpg'
import img2 from '../../../images/archi-3.jpg'



export default function Project1() {
  return (
    <div>
      {/* title */}
      <section className=' h-50'>
        <div className="conatiner py-5 about-title">
          <div className='about-text-color h-100 d-flex flex-column justify-content-center text-center' >
            <h1 className='main-font-weight my-3'>Minimal Interior</h1>
            <div className='project-navbar'>
              <Link className='text-decoration-none mx-2 to-home' to={'/Architecture'}>
                Home
              </Link>

              <span className='project-name'>Minimal Interior</span>

            </div>

          </div>
        </div>
      </section>
      {/* body */}
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-8">

            {/* carousel */}
            <OwlCarousel className='owl-theme ' dots={false} items={1} loop  >
              <div className='item w-100 h-100 d-flex justify-content-center align-items-center'>
                <img src={img1} className='imgs-width-project' alt='img1' />
              </div>
              <div className='item w-100 h-100 d-flex justify-content-center align-items-center'>
                <img src={img2} className='imgs-width-project' alt='img2' />
              </div>

            </OwlCarousel>

          </div>
          {/* About Project */}
          <div className='col-lg-4 py-4 About-Project'>
            <h4>About Project</h4>
            <p className='About-Project-p'>
              Eius populus ab incunabulis primis ad usque pueritiae tempus extremum, quod annis circumcluditur fere trecentis, circummurana pertulit bella, deinde aetatem ingressus adultam post multiplices bellorum aerumnas Alpes transcendit et fretum, in iuvenem erectus et virum ex omni plaga quam orbis ambit inmensus, reportavit laureas et triumphos, iamque vergens in senium et nomine solo aliquotiens vincens ad tranquilliora vitae discessit.
            </p>
            <p className='About-Project-p'>
              Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed eum.
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
          <div className=''>
            <Link to={'holyday-residence'} className='justify-content-end d-flex align-items-center text-decoration-none'>
              <div className='mx-4 text-end'>
                <span>Next Project</span>
                <p>Holyday Residence</p>
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
