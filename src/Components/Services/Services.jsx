import React, { useEffect } from 'react'
import img1 from '../../images/archi-14-700x600.jpg'
import img2 from '../../images/archi-11-700x600.jpg'
import img3 from '../../images/archi-7-700x600.jpg'
import img4 from '../../images/archi-15-800x600.jpg'
import $ from 'jquery'
import '../About/About.css'
import './Services.css'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'


export default function Services() {
  let skillSection;
  let starting = false;
  let bars;


  // video
  useEffect(() => {
    document.querySelector("#videoIcon").addEventListener("click", () => {
      $('#videoImg').addClass("d-none");
      $('#videoIcon').addClass("d-none");
      $('#videoo').removeClass("d-none").attr('src', 'https://www.youtube-nocookie.com/embed/MKXACbkRaNM?autoplay=1')
    })
    // skillSection
    skillSection = $('#skills').offset().top
    bars = document.querySelectorAll('.progress-bar')
  }, [])

  // --------------------------------scrolling
  window.addEventListener("scroll", function () {
    let scrollingTop = $(this.window).scrollTop()
    console.log(scrollingTop);
    if (scrollingTop >= skillSection) {
      if (!starting) {
        skillsBars()
      }
      starting = true;
    }
  })

  function skillsBars() {
    bars.forEach(el => {
      let target = $(el).attr('target')
      $(el).css('width', target)
    });
  }

  return <>
    <Nav></Nav>

    <div className='services'>
      {/* title */}
      <section className='page-header'>
        <div className="conatiner py-5 about-title">
          <div className='about-text-color h-100 d-flex flex-column justify-content-center text-center' >
            <h1 className='main-font-weight'>Services</h1>
          </div>
        </div>
      </section>
      {/* section 1  */}
      <section className="unique">
        <div className="container">
          <h2 className='text-center'>We are truly unique. Wanna know why?</h2>
          <div className="row py-5">
            <div className="col-md-6">
              <div className='px-2'>
                <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo leo velit sit amet velit. Aliquam fermentum, lorem quis posuere mattis, est justo porttitor magna, in commodo risus justo vitae nibh. Sed mollis sapien erat, id pellentesque libero interdum at.Mauris sodales felis luctus purus hendreri. Vivamus finibus laoreet tristique. Quisque pharetra, urna.</p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className='px-2'>
                <p>Nunc id ante quis tellus faucibus dictum in eget metus. Duis suscipit elit sem, sed mattis tellus accumsan eget. Quisque consequat venenatis rutrum. Quisque posuere enim augue, in rhoncus diam dictum non. Etiam mollis pulvinar nisl, sed pharetra nunc elementum non. Mauris sodales felis luctus purus hendrerit, vel cursus odio pulvinar. In ullamcorper ultrices purus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 2  design*/}
      <section className='py-5 design '>
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 py-3 ">
              <div className='overflow-hidden zoom rounded-2 d-flex align-items-center h-100 justify-content-center'>
                <img src={img1} className='about-img rounded-2 img-transform' alt="arch1" />

              </div>
            </div>
            <div className="col-md-6 py-3 d-flex flex-column justify-content-center edit">
              <div >
                <h3 className='main-font-weight main-h2 my-4'>Interior Design</h3>
                <p className='max-width main-p'>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house and commercial builds and we are registered NHBC house builders.</p>
                <div className='line'></div>
                <p className='max-width main-p '>
                  I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* section 3  design*/}
      <section className='py-5 design main-bg-color'>
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 py-3 d-flex flex-column justify-content-center edit">
              <div >
                <h3 className='main-font-weight main-h2 my-4'>Interior Design</h3>
                <p className='max-width main-p'>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house and commercial builds and we are registered NHBC house builders.</p>
                <div className='line'></div>
                <p className='max-width main-p none'>
                  I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <div className='overflow-hidden zoom rounded-2 d-flex align-items-center h-100 justify-content-center'>
                <img src={img2} className='about-img rounded-2 img-transform' alt="arch2" />

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* section 4  design*/}
      <section  id='skills' className='py-5 design '>
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 py-3 ">
              <div className='overflow-hidden zoom rounded-2 d-flex align-items-center h-100 justify-content-center'>
                <img src={img3} className='about-img rounded-2 img-transform' alt="arch1" />

              </div>
            </div>
            <div className="col-md-6 py-3 d-flex flex-column justify-content-center edit">
              <div >
                <h3 className='main-font-weight main-h2 my-4'>Interior Design</h3>
                <p className='max-width main-p'>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house and commercial builds and we are registered NHBC house builders.</p>
                <div className='line'></div>
                <p className='max-width main-p none'>
                  I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* skills */}
      <section className='my-5 main-bg-color'>
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-3">
              <div>
                <h3 className='main-font-weight main-h2 my-4'>Our Skills</h3>
                <p className='max-width main-p'>
                  Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo leo velit sit amet velit. Aliquam fermentum, lorem quis posuere mattis, est justo porttitor magna, in commodo risus justo vitae nibh. Sed mollis sapien erat, id pellentesque libero interdum at. Mauris sodales felis luctus purus hendreri. Vivamus baram sapien era.
                </p>
              </div>
            </div>
            <div className="col-md-6 py-3">
              <div className='h-100 d-flex flex-column justify-content-center '>
                <div>
                  <div className=" d-flex mt-4">
                    <span >Architecture</span>
                    <span className='ms-auto'>94%</span>
                  </div>
                  <div className="progress my-1" role="progressbar" aria-label="Basic example" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100" style={{ height: "11px" }}>
                    <div className="progress-bar" target='94%' style={{ backgroundColor: '#d8b478', width: '0%' }}></div>
                  </div>
                </div>
                <div>
                  <div className=" d-flex mt-4">
                    <span>Design</span>
                    <span className='ms-auto'>86%</span>
                  </div>

                  <div className="progress my-1" role="progressbar" aria-label="Basic example" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{ height: "11px" }}>
                    <div className="progress-bar" target='86%' style={{ backgroundColor: '#d8b478', width: '0%' }}></div>
                  </div>
                </div>

                <div>
                  <div className=" d-flex mt-4">
                    <span>Space Optimization</span>
                    <span className='ms-auto'>78%</span>
                  </div>

                  <div className="progress my-1" role="progressbar" aria-label="Basic example" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={{ height: "11px" }}>
                    <div className="progress-bar" target='78%' style={{ backgroundColor: '#d8b478', width: '0%' }}></div>
                  </div>
                </div>

                <div>
                  <div className=" d-flex mt-4">
                    <span>Unique Furniture</span>
                    <span className='ms-auto'>65%</span>
                  </div>

                  <div className="progress my-1" role="progressbar" aria-label="Basic example" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{ height: "11px" }}>
                    <div className="progress-bar" target='65%' style={{ backgroundColor: '#d8b478', width: '0%' }}></div>
                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center  py-5">

            <div className='video rounded-3' >
              <div className="d-flex position-absolute top-0 end-0 start-0  bottom-0 align-items-center justify-content-center">
                <i id='videoIcon' className="fa-regular fa-circle-play cursor-pointer" ></i>
              </div>
              <img id='videoImg' className='w-100 h-100 rounded-3' src={img4} alt="arch4" />

              <iframe id='videoo' className='w-100 h-100 rounded-3 position-absolute top-0 d-none' src="" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>



            </div>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section className=' h-50 '>
        <div className="conatiner about-title">
          <div className='h-100 d-flex flex-column justify-content-center text-center px-5' >
            <h1 id='Architecture' className='main-h2 main-h1'>“Architecture is basically the design of interiors, the art of organizing interior space.”</h1>
          </div>
        </div>
      </section>
      {/* section 7 hire us*/}
      <section className='hire-us'>
        <div className="overlayer w-100 h-100 d-flex flex-column align-items-center justify-content-center text-white text-center px-2">
          <span className='my-4'>Feeling convinced?</span>
          <p >Our team of expert will make your project real</p>
          <Link to={'/Architecture/contactus'}>
            <button className='btn my-2 btn-outline-light p-3 px-4 btn-hire '>Hire Us!</button>
          </Link>
        </div>

      </section>

    </div>
  </>
}
