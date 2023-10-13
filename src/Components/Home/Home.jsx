import React from 'react';
import './Home.css'
import img1 from '../../images/home-1.jpg'
import img2 from '../../images/home-2.jpg'
import img3 from '../../images/home-3.jpg'
import arhi1 from '../../images/archi-8-700x640.jpg'
import arhi2 from '../../images/archi-4-700x640.jpg'
import arhi3 from '../../images/archi-17.png'


import { Link } from 'react-router-dom';

export default function Home() {
  return <div>
    {/* carousel */}
    <div id="carouselExampleRide" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner ">
        <div class="carousel-item active">
          <img src={img3} class="d-block home-bg w-100" alt="home1" />
        </div>
        <div class="carousel-item">
          <img src={img2} class="d-block home-bg w-100" alt="home2" />
        </div>
        <div class="carousel-item">
          <img src={img1} class="d-block home-bg w-100" alt="home3" />
        </div>
      </div>
      <button class="carousel-control-prev carousel-width" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <div className='control d-flex rounded-circle justify-content-center align-items-center'>
          <span class="carousel-control-prev-icon " aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </div>
      </button>
      <button class="carousel-control-next carousel-width" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <div className='control d-flex rounded-circle  justify-content-center align-items-center'>
          <span class="carousel-control-next-icon " aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </div>
      </button>
    </div>
    {/* body*/}
    <div className="home-main  container d-flex flex-column text-white justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0 mb-5">
      <p className='p1'>Architect house</p>
      <h1>Creativity & Contemporary</h1>
      <p className='p2'>Whatever good things we build end up building us.</p>
      <div >
        <button className='btn btn-outline-light p-3 px-4 mx-2'>Learn More</button>
        <Link to={'about'}>
          <button className='btn btn-light p-3 px-4'>About us</button>
        </Link>
      </div>
    </div>
    {/*second-section*/}
    <div className='second-section py-4 my-5 text-center d-flex '>
      <div className="container">
        <h2 className='home-title'>Architecture is the thoughtful making of space.</h2>
        <p className='main-text-color'>Vivamus justo sem, vulputate at mi ut, maximus consequat augue. Curabitur in tortor et libero tincidunt vulputate nec vehicula nunc. Donec mollis non lectus eu vestibulum. Nunc elementum justo nec iaculis egestas. Fusce eleifend nibh non libero interdum.</p>
      </div>

    </div>
    {/*third-section*/}
    <div className='third-section  my-5   '>
      <div className="container">
        <div className="row ">
          <div className="col-md-6 px-5">
            <div>
              <img src={arhi1} className='w-100' alt="arhi1" />
            </div>
          </div>
          <div className="col-md-6 pt-4">
            <div>
              <h2 className='home-title pb-3'>Less is more.
              </h2>
              <p>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better.</p>
              <ul className='list-unstyled'>
                <li>
                  <i class=" py-3 me-2 fa-solid fa-lg fa-check" ></i>
                  <span className='main-text-color'>  Aliquam fermentum lorem quis posuere mattis.</span>
                </li>
                <li>
                  <i class=" py-3 me-2 fa-solid fa-lg fa-check" ></i>
                  <span className='main-text-color'> Sed mollis sapien erat id pellentesque libero.</span>
                </li>
                <li>
                  <i class=" py-3 me-2 fa-solid fa-lg fa-check" ></i>
                  <span className='main-text-color'>Pellentesque nisl id semper bibendum.
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>

    </div>
    {/*forth-section*/}
    <div className='third-section  my-5   '>
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 px-5 py-4">
            <div>
              <h2 className='home-title pb-3'>Architecture is a visual art.
              </h2>
              <p>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better.</p>
              <ul className='list-unstyled'>
                <li>
                  <i class=" py-3 me-2 fa-solid fa-lg fa-check" ></i>
                  <span className='main-text-color'>  Aliquam fermentum lorem quis posuere mattis.</span>
                </li>
                <li>
                  <i class=" py-3 me-2 fa-solid fa-lg fa-check" ></i>
                  <span className='main-text-color'> Sed mollis sapien erat id pellentesque libero.</span>
                </li>
                <li>
                  <i class=" py-3 me-2 fa-solid fa-lg fa-check" ></i>
                  <span className='main-text-color'>Pellentesque nisl id semper bibendum.
                  </span>
                </li>
              </ul>
            </div>

          </div>
          <div className="col-md-6 px-5">
            <div>
              <img src={arhi2} className='w-100' alt="arhi2" />
            </div>
          </div>

        </div>
      </div>

    </div>
    {/*counter-section*/}
    <div className='home-counter py-5  py-3'>
      <div className="container ">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-3 col-md-6 ">
            <div className='text-white text-center'>
              <i class="mb-2 fa-regular fa-2xl fa-thumbs-up"></i>
              <p className='counter-num my-3'>1400</p>
              <p className='counter-title'>Page Likes</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className='text-white text-center'>
              <i class="mb-2 fa-solid fa-lg fa-shop"></i>
              <p className='counter-num my-3'>64</p>
              <p className='counter-title'>Locations</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className='text-white text-center'>
              <i class="mb-2 fa-regular fa-lg fa-lightbulb"></i>
              <p className='counter-num my-3'>960</p>
              <p className='counter-title'>Great Ideas</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 ">
            <div className='text-white text-center'>
              <i class="mb-2 fa-regular fa-lg fa-comment"></i>
              <p className='counter-num my-3'>420</p>
              <p className='counter-title'>Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* fifth section */}
    <div className='fifth-section  my-5   '>
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className='px-5'>
              <h3>Buildings should serve people, not the other way around.</h3>
              <p className='main-text-color'>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo leo velit sit amet velit. Aliquam fermentum, lorem quis posuere mattis, est justo porttitor magna.</p>
            </div>
          </div>
          <div className="col-md-6 ">
            <div>
              <img src={arhi3} className='w-100' alt="arhi2" />
            </div>
          </div>

        </div>
        <div className='row py-4'>
          <div className="col-lg-3 col-md-6">
            <div className='d-flex align-items-baseline '>
              <i class="mb-2 fa-regular fa-lg fa-lightbulb me-3"></i>
              <div>
                <h5>Creativity</h5>
                <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='d-flex align-items-baseline '>
              <i class="mb-2 fa-solid fa-lg fa-pencil me-3"></i>
              <div>
                <h5>Unique Design</h5>
                <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='d-flex align-items-baseline '>
              <i class="mb-2 fa-regular fa-lg fa-heart me-3"></i>
              <div>
                <h5>Satisfied Clients</h5>
                <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='d-flex align-items-baseline '>
              <i class="mb-2 fa-regular fa-lg fa-newspaper me-3"></i>
              <div>
                <h5>Portfolios</h5>
                <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>



  </div>

}
