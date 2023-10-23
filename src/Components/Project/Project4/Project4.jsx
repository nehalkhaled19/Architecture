import React from 'react'
import img1 from '../../../images/archi-12-900x.jpg'
import img2 from '../../../images/archi-11-900x.jpg'
import img3 from '../../../images/archi-6-900x.jpg'
import { Link } from 'react-router-dom'


export default function Project4() {
  return (
    <div>
         {/* title */}
         <section className=' h-50'>
        <div className="conatiner py-5 about-title">
          <div className='about-text-color h-100 d-flex flex-column justify-content-center text-center' >
            <h1 className='main-font-weight my-3'>Concrete House on Lake</h1>
            <div className='project-navbar'>
              <Link className='text-decoration-none mx-2 to-home' to={'/Architecture'}>
                Home
              </Link>

              <span className='project-name'>Concrete House on Lake</span>

            </div>

          </div>
        </div>
      </section>
        {/* body */}
        <div className="container">
        <div className="row">
          <div className="col-lg-8 d-flex flex-column align-items-center py-5">
            <img src={img1} className='imgs-project3' alt="project img" />
            <img src={img2} className='imgs-project3 my-5' alt="project img" />
            <img src={img3} className='imgs-project3' alt="project img" />


          </div>
          {/* About Project */}
          <div className='col-lg-4 py-4 About-Project '>
            <h4 >About Project</h4>
            <p className='About-Project-p'>
            Et quoniam mirari posse quosdam peregrinos existimo haec lecturos forsitan, si contigerit, quamobrem cum oratio ad ea monstranda deflexerit quae Romae gererentur, nihil praeter seditiones narratur et tabernas et vilitates harum similis alias, summatim causas perstringam nusquam a veritate sponte propria digressurus.
            </p>
            <p>
            Eius populus ab incunabulis primis ad usque pueritiae tempus extremum, quod annis circumcluditur fere trecentis, circummurana pertulit bella, deinde aetatem ingressus adultam post multiplices bellorum aerumnas Alpes transcendit et fretum, in iuvenem erectus et virum ex omni plaga quam orbis ambit inmensus, reportavit laureas et triumphos, iamque vergens in senium et nomine solo aliquotiens vincens ad tranquilliora vitae discessit.
            </p>
            <p>Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed eum in certamen alacriter consurgentem revocavere ductores rati intempestivum anceps subire certamen cum haut longe muri distarent, quorum tutela securitas poterat in solido locari cunctorum.</p>
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
          <Link to={'../co-working-design'} className='d-flex w-50 align-items-center text-decoration-none'>
          <div className='me-md-4 me-2' >
                <i className="fa-solid fa-angle-left" style={{ color: "#000000b3" }}></i>
              </div>
              <div >
                <span>Previuos Project</span>
                <p>Co-working Design</p>
              </div>
             
            </Link>
            <Link to={'../interior-design'} className='w-50 d-inline justify-content-end d-flex align-items-center text-decoration-none'>
              <div className='mx-md-4 mx-2 text-end'>
                <span>Next Project</span>
                <p>Interior Design</p>
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
