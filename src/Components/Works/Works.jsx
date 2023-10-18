import React from 'react'
import './Works.css'
import img1 from '../../images/archi-8-700x640.jpg'
import img2 from '../../images/archi-9-600x600.jpg'
import img3 from '../../images/archi16.jpg'
import img4 from '../../images/archi-17.png'
import img5 from '../../images/archi-7-700x600.jpg'

export default function Works() {
  return (
    <div>
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
      <div className='container mb-5 d-flex flex-column justify-content-center'>
        <ul className="nav nav-pills mb-3 justify-content-center works-tabs" id="pills-tab" role="tablist">
          <li className="nav-itemy" role="presentation">
            <button className="nav-link py-0  active" id="goals-tab" data-bs-toggle="pill" data-bs-target="#goals" type="button" role="tab" aria-controls="goals" aria-selected="true">
              <span>Show All</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link py-0" id="methods-tab" data-bs-toggle="pill" data-bs-target="#methods" type="button" role="tab" aria-controls="methods" aria-selected="false">
              <span>Interior Design</span>
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link py-0" id="results-tab" data-bs-toggle="pill" data-bs-target="#results" type="button" role="tab" aria-controls="results" aria-selected="false">
              <span>Open Space</span>

            </button>
          </li>
        </ul>
        <div className="tab-content py-3" id="pills-tabContent">
          <div className="tab-pane fade show active" id="goals" role="tabpanel" aria-labelledby="goals-tab" tabindex="0">
            <div className='container'>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img src={img1} className='w-100 h-100 object ' alt="Minimal Interior" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Minimal Interior</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                        <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                          <i className="fa fa-chain-broken "></i>
                        </div>
                        <div className="p-icon d-flex justify-content-center rounded-circle align-items-center"
                          data-bs-toggle="modal" data-bs-target="#exampleModal1">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img src={img2} className='w-100 h-100 object ' alt="Holyday Residence" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Holyday Residence</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                        <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                          <i className="fa fa-chain-broken "></i>
                        </div>
                        <div className="p-icon d-flex justify-content-center rounded-circle align-items-center"
                          data-bs-toggle="modal" data-bs-target="#exampleModal2">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img src={img3} className='w-100 h-100 object ' alt="Co-working Design" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Co-working Design</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                        <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                          <i className="fa fa-chain-broken "></i>
                        </div>
                        <div className="p-icon d-flex justify-content-center rounded-circle align-items-center"
                          data-bs-toggle="modal" data-bs-target="#exampleModal3">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img src={img4} className='w-100 h-100 object ' alt="Interior Design" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Interior Design</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                        <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                          <i className="fa fa-chain-broken "></i>
                        </div>
                        <div className="p-icon d-flex justify-content-center rounded-circle align-items-center"
                          data-bs-toggle="modal" data-bs-target="#exampleModal4">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img src={img5} className='w-100 h-100 object ' alt="Concrete House on Lake" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Concrete House on Lake</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                        <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                          <i className="fa fa-chain-broken "></i>
                        </div>
                        <div className="p-icon d-flex justify-content-center rounded-circle align-items-center"
                          data-bs-toggle="modal" data-bs-target="#exampleModal5">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="tab-pane fade  tabs-text-color" id="methods" role="tabpanel" aria-labelledby="methods-tab" tabindex="0">
            <div className="container ">
              <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img src={img1} className='w-100 h-100 object ' alt="Minimal Interior" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Minimal Interior</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                        <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                          <i className="fa fa-chain-broken "></i>
                        </div>
                        <div className="p-icon d-flex justify-content-center rounded-circle align-items-center"
                          data-bs-toggle="modal" data-bs-target="#exampleModal1">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img src={img4} className='w-100 h-100 object ' alt="Interior Design" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Interior Design</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                        <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                          <i className="fa fa-chain-broken "></i>
                        </div>
                        <div className="p-icon d-flex justify-content-center rounded-circle align-items-center"
                          data-bs-toggle="modal" data-bs-target="#exampleModal4">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="tab-pane fade  tabs-text-color" id="results" role="tabpanel" aria-labelledby="results-tab" tabindex="0">
            <div className="container">
            <div className="row g-4">
               
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img src={img2} className='w-100 h-100 object ' alt="Holyday Residence" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Holyday Residence</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                        <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                          <i className="fa fa-chain-broken "></i>
                        </div>
                        <div className="p-icon d-flex justify-content-center rounded-circle align-items-center"
                          data-bs-toggle="modal" data-bs-target="#exampleModal2">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img src={img3} className='w-100 h-100 object ' alt="Co-working Design" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Co-working Design</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                        <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                          <i className="fa fa-chain-broken "></i>
                        </div>
                        <div className="p-icon d-flex justify-content-center rounded-circle align-items-center"
                          data-bs-toggle="modal" data-bs-target="#exampleModal3">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className='work position-relative  cursor-pointer'>
                    <img src={img5} className='w-100 h-100 object ' alt="Concrete House on Lake" />
                    <div className='portfolio-layer d-flex flex-column justify-content-center align-items-center'>
                      <h4>Concrete House on Lake</h4>
                      <div className="portfolio-icons justify-content-center d-flex">
                        <div className="p-icon me-2 d-flex justify-content-center  rounded-circle align-items-center">
                          <i className="fa fa-chain-broken "></i>
                        </div>
                        <div className="p-icon d-flex justify-content-center rounded-circle align-items-center"
                          data-bs-toggle="modal" data-bs-target="#exampleModal5">
                          <i className="fa-solid fa-magnifying-glass-plus"></i>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
        </div>
      </div>
      {/* modal img 1 */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog w-100 modal-dialog-centered justify-content-center ">
          <div class="row p-0  flex-column justify-content-start">
            <div class="col-md-12  px-0 text-end ">
              <i class="fa-solid fa-xmark i-close fa-xl cursor-pointer" ></i>
            </div>
            <div class="col-md-12  px-0  my-2">
              <img src={img1} className='object w-100 h-100' alt="Minimal Interior" />
            </div>
          </div>
        </div>
      </div>
      {/* modal img 2 */}
      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog w-100 modal-dialog-centered justify-content-center ">
          <div class="row p-0  flex-column justify-content-start">
            <div class="col-md-12  px-0 text-end ">
              <i class="fa-solid fa-xmark i-close fa-xl cursor-pointer" ></i>
            </div>
            <div class="col-md-12  px-0  my-2">
              <img src={img2} className='object w-100 h-100' alt="Holyday Residence" />
            </div>
          </div>
        </div>
      </div>
      {/* modal img 3 */}
      <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog w-100 modal-dialog-centered justify-content-center ">
          <div class="row p-0  flex-column justify-content-start">
            <div class="col-md-12  px-0 text-end ">
              <i class="fa-solid fa-xmark i-close fa-xl cursor-pointer" ></i>
            </div>
            <div class="col-md-12  px-0  my-2">
              <img src={img3} className='object w-100 h-100' alt="Co-working Design" />
            </div>
          </div>
        </div>
      </div>
      {/* modal img 4 */}
      <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog w-100 modal-dialog-centered justify-content-center ">
          <div class="row p-0  flex-column justify-content-start">
            <div class="col-md-12  px-0 text-end ">
              <i class="fa-solid fa-xmark i-close fa-xl cursor-pointer" ></i>
            </div>
            <div class="col-md-12  px-0  my-2">
              <img src={img4} className='object w-100 h-100' alt="Interior Design" />
            </div>
          </div>
        </div>
      </div>
      {/* modal img 5 */}
      <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog  modal-dialog-centered justify-content-center ">
          <div class="row p-0  flex-column justify-content-start">
            <div class="col-md-12  px-0 text-end">
              <i class="fa-solid fa-xmark i-close fa-xl cursor-pointer" ></i>
            </div>
            <div class="col-md-12 px-0  my-2">
              <img src={img5} className='object w-100 h-100' alt="Concrete House on Lake" />
            </div>
          </div>
        </div>
      </div>

    </div>
    </div >

  )
}
