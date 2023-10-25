import React, { useEffect, useState } from 'react'
import './Works.css'
import img1 from '../../images/archi-8-700x640.jpg'
import img2 from '../../images/archi-9-600x600.jpg'
import img3 from '../../images/archi16.jpg'
import img4 from '../../images/archi-7-700x600.jpg'
import img5 from '../../images/archi-4-700x640.jpg'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'

export default function Works() {

  let imgsSrc = []
  let targetTab = ''
  let currentIndex = 0
  let src = ''
  useEffect(() => {
    getimgs()
    // to get all imgs inside the tab
    $(".nav-link").on('click', (e) => {
      targetTab = e.target.getAttribute('data-bs-target')
    

      getimgs(targetTab)
    })
    // open modal
    $(".openModal").on('click', (e) => {
      $("#modal").fadeIn(500).addClass('d-flex').removeClass('d-none')
      src = e.target.getAttribute('imgsrc')
      $('.content').attr('src', src)
      currentIndex = imgsSrc.indexOf(src)
      console.log(currentIndex);
    })
    // close modal
    document.querySelector(".i-close").addEventListener('click', () => {
      $("#modal").fadeOut(500, function () {
        $("#modal").removeClass('d-flex').addClass('d-none')
      })
    })
    // next img
    $(".arrow-right").on('click', (e) => {
      currentIndex++
      console.log(currentIndex);

      if (currentIndex == imgsSrc.length) {
        currentIndex = 0
      }
      src = imgsSrc[currentIndex]
      $('.content').attr('src', src)
    })
    // prev img
    $(".arrow-left").on('click', () => {
      currentIndex--
      console.log(currentIndex);

      if (currentIndex < 0) {
        currentIndex = imgsSrc.length - 1
      }
      src = imgsSrc[currentIndex]
      $('.content').attr('src', src)
    })

  }, [])

  // get img src
  function getimgs(tab = '#goals') {
    imgsSrc = []
    currentIndex = 0
    let images = document.querySelectorAll(`${tab}Imgs`)
    let imgs = Array.from(images)
    imgs.forEach(e => {
      imgsSrc.push(e.getAttribute('src'))
    });
  }


  return <>
  <Nav></Nav>
    <div className='position-relative'>
      {/* title */}
      <section className=' h-50'>
        <div className="conatiner py-5 about-title">
          <div className='about-text-color h-100 d-flex flex-column justify-content-center text-center' >
            <h1 className='main-font-weight my-3'>Our Works</h1>
            <p>Discover our last projects</p>
          </div>
        </div>
      </section>
      {/* nav & tabs */}
      <div className='container pb-5 d-flex flex-column justify-content-center'>
        <ul className="nav nav-pills mb-3 justify-content-center works-tabs" id="pills-tab" role="tablist">
        <li className="nav-itemy" role="presentation">
            <button className="nav-link py-0  active" id="goals-tab" data-bs-toggle="pill" data-bs-target="#goals" type="button" role="tab" aria-controls="goals" aria-selected="true">
              <span data-bs-target="#goals">Show All</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link py-0" id="methods-tab" data-bs-toggle="pill" data-bs-target="#methods" type="button" role="tab" aria-controls="methods" aria-selected="false">
              <span data-bs-target="#methods">Interior Design</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link py-0" id="results-tab" data-bs-toggle="pill" data-bs-target="#results" type="button" role="tab" aria-controls="results" aria-selected="false">
              <span data-bs-target="#results">Open Space</span>

            </button>
          </li>
        </ul>
        <div className="tab-content py-3" id="pills-tabContent">
          <div className="tab-pane   active" id="goals" role="tabpanel" aria-labelledby="goals-tab" tabIndex="0">     
                 <div className='container'>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img id='goalsImgs' src={img1} className='w-100 h-100 object ' alt="Minimal Interior" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Minimal Interior</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                      <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                         <Link to={'../project/'}>
                         <i className="fa fa-chain-broken " style={{color:'#333'}}></i>

                         </Link>
                        </div>
                        <div className="openModal p-icon d-flex justify-content-center rounded-circle align-items-center" imgsrc={img1}
                        >
                          <i className="fa-solid fa-magnifying-glass-plus" imgsrc={img1}></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img id='goalsImgs' src={img2} className='w-100 h-100 object ' alt="Holyday Residence" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Holyday Residence</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                      <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                         <Link to={'../project/holyday-residence'}>
                         <i className="fa fa-chain-broken " style={{color:'#333'}}></i>

                         </Link>
                        </div>
                        <div className="openModal p-icon d-flex justify-content-center rounded-circle align-items-center" imgsrc={img2}
                        >
                          <i className="fa-solid fa-magnifying-glass-plus" imgsrc={img2}></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img id='goalsImgs' src={img3} className='w-100 h-100 object ' alt="Co-working Design" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Co-working Design</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                      <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                         <Link to={'../project/co-working-design'}>
                         <i className="fa fa-chain-broken " style={{color:'#333'}}></i>

                         </Link>
                        </div>
                        <div className="openModal p-icon d-flex justify-content-center rounded-circle align-items-center" imgsrc={img3}
                        >
                          <i className="fa-solid fa-magnifying-glass-plus" imgsrc={img3}></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img id='goalsImgs' src={img4} className='w-100 h-100 object ' alt="Concrete House on Lake" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Concrete House on Lake
                      </h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                      <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                         <Link to={'../project/concrete-house-on-lake'}>
                         <i className="fa fa-chain-broken " style={{color:'#333'}}></i>

                         </Link>
                        </div>
                        <div className="openModal p-icon d-flex justify-content-center rounded-circle align-items-center" imgsrc={img4}
                        >
                          <i className="fa-solid fa-magnifying-glass-plus" imgsrc={img4}></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img id='goalsImgs' src={img5} className='w-100 h-100 object ' alt="Interior Design" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Interior Design
                      </h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                        <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                         <Link to={'../project/interior-design'}>
                         <i className="fa fa-chain-broken " style={{color:'#333'}}></i>

                         </Link>
                        </div>
                        <div className="openModal p-icon d-flex justify-content-center rounded-circle align-items-center" imgsrc={img5}
                        >
                          <i className="fa-solid fa-magnifying-glass-plus" imgsrc={img5}></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="tab-pane  tabs-text-color" id="methods" role="tabpanel" aria-labelledby="methods-tab" tabIndex="0">
            <div className="container ">
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img id='methodsImgs' src={img1} className='w-100 h-100 object ' alt="Minimal Interior" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Minimal Interior</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                      <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                         <Link to={'../project/'}>
                         <i className="fa fa-chain-broken " style={{color:'#333'}}></i>

                         </Link>
                        </div>
                        <div className="openModal p-icon d-flex justify-content-center rounded-circle align-items-center" imgsrc={img1}
                        >
                          <i className="fa-solid fa-magnifying-glass-plus" imgsrc={img1}></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img id='methodsImgs' src={img5} className='w-100 h-100 object ' alt="Interior Design" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Interior Design</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                      <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                         <Link to={'../project/interior-design'}>
                         <i className="fa fa-chain-broken " style={{color:'#333'}}></i>

                         </Link>
                        </div>
                        <div className="openModal p-icon d-flex justify-content-center rounded-circle align-items-center" imgsrc={img5}
                        >
                          <i className="fa-solid fa-magnifying-glass-plus" imgsrc={img5}></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="tab-pane  tabs-text-color" id="results" role="tabpanel" aria-labelledby="results-tab" tabIndex="0">
            <div className="container">
              <div className="row g-4">

                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img id='resultsImgs' src={img2} className='w-100 h-100 object ' alt="Holyday Residence" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Holyday Residence</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                      <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                         <Link to={'../project/holyday-residence'}>
                         <i className="fa fa-chain-broken " style={{color:'#333'}}></i>

                         </Link>
                        </div>
                        <div className="openModal p-icon d-flex justify-content-center rounded-circle align-items-center" imgsrc={img2}
                        >
                          <i className="fa-solid fa-magnifying-glass-plus" imgsrc={img2}></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img id='resultsImgs' src={img3} className='w-100 h-100 object ' alt="Co-working Design" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Co-working Design</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                      <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                         <Link to={'../project/co-working-design'}>
                         <i className="fa fa-chain-broken " style={{color:'#333'}}></i>

                         </Link>
                        </div>
                        <div className="openModal p-icon d-flex justify-content-center rounded-circle align-items-center" imgsrc={img3}
                        >
                          <i className="fa-solid fa-magnifying-glass-plus" imgsrc={img3}></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img id='resultsImgs' src={img4} className='w-100 h-100 object ' alt="Concrete House on Lake" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Concrete House on Lake</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                         <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                         <Link to={'../project/concrete-house-on-lake'}>
                         <i className="fa fa-chain-broken " style={{color:'#333'}}></i>

                         </Link>
                        </div>
                        <div className="openModal p-icon d-flex justify-content-center rounded-circle align-items-center" imgsrc={img4}
                        >
                          <i className="fa-solid fa-magnifying-glass-plus" imgsrc={img4}></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* modal */}
      <div id='modal' className=' works-modal d-none '>
        <div className='w-50 content'>
          <div className='text-end mt-2'>
            <i className="fa-solid fa-xmark i-close my-3 fa-xl cursor-pointer " ></i>
          </div>
          <img src='' className='w-100 content object' alt="work-modal" />
        </div>
        <i className="fa-solid cursor-pointer fa-chevron-right fa-2xl arrow-right "></i>
        <i className="fa-solid fa-chevron-left fa-2xl cursor-pointer arrow-left "></i>
      </div>

   
    </div>
    </>
}
