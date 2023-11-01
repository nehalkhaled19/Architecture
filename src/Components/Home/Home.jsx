import React, { useEffect, useState } from 'react';
import './Home.css'
import img1 from '../../images/home-1.jpg'
import img2 from '../../images/home-2.jpg'
import img3 from '../../images/home-3.jpg'
import arhi1 from '../../images/archi-8-700x640.jpg'
import arhi2 from '../../images/archi-4-700x640.jpg'
import arhi3 from '../../images/archi-17.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import NavHome from '../NavHome/NavHome';
import $ from 'jquery'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

  let [counterSection, setCounterSection] = useState(0)
  let scrollingTop;
  let starting = false;

  useEffect(() => {
    $("html,body").animate({ scrollTop: 0 }, { duration: 0, queue: false })
    // loading
    $('.loading').fadeOut(3000)
    if ($(document).width() > 480) {
      AOS.init();
    }
    if ($(document).width() < 767) {
      $('.aos').attr('data-aos', '')
    }
    setCounterSection($('#counterSection').offset().top - $('#carouselExampleSlidesOnly').outerHeight(true))
  }, [])

  // --------------------------------scrolling
  window.addEventListener("scroll", function () {
    scrollingTop = $(this.window).scrollTop()
    // counter
    if (scrollingTop >= counterSection) {
      if (!starting) {
        handleCounter()
      }
      starting = true;
    }

  })



  //counter function
  function handleCounter() {
    const counters = document.querySelectorAll('.counter-num');

    counters.forEach(counter => {
      // Set the initial value of the counter to 0
      counter.innerText = '0';

      // Function to update 
      const updateCounter = () => {
        // Get the target value from the 'data-target' attribute of the counter element
        const target = +counter.getAttribute('data-target');

        // Get the current value of the counter
        const current = +counter.innerText;

        // Calculate the increment value
        const increment = target / 100;

        // Check if the current value is less than the target value
        if (current < target) {
          // Increment the counter value and update the display
          counter.innerText = `${Math.ceil(current + increment)}`;
          // Call the updateCounter function again after a short delay (1 millisecond)
          setTimeout(updateCounter, 20);
        } else {
          // If the current value is greater than or equal to the target value, set the counter to the target value
          counter.innerText = target;
        }
      }

      // Call the updateCounter function to start the counter animation
      updateCounter();
    });

  }

  return <>
    <div className='loading position-fixed top-0 end-0 start-0 bottom-0 '>
      <i className="fa-solid fa-spinner fa-spin fa-5x" style={{ color: '#1a1a1a' }}></i>
    </div>
    <NavHome></NavHome>
    {/* carousel */}
    <div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img3} className="d-block home-bg w-100" alt="home1" />
        </div>
        <div className="carousel-item ">
          <img src={img2} className="d-block home-bg w-100" alt="home2" />
        </div>
        <div className="carousel-item ">
          <img src={img1} className="d-block home-bg w-100" alt="home3" />
        </div>
      </div>
      {/* body*/}
      <div className="home-main container d-flex flex-column text-center text-white justify-content-center align-items-center position-absolute top-0 bottom-0 end-0 start-0">
        <p className='p1'>Architect house</p>
        <h1>Creativity & Contemporary</h1>
        <p className='p2'>Whatever good things we build end up building us.</p>
        <div >
          <button className='btn my-2 btn-outline-light p-3 px-4 mx-2'>Learn More</button>
          <Link to={'about'}>
            <button className='btn my-2 btn-light p-3 px-4'>About us</button>
          </Link>
        </div>
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
    <div id='sec1' className='third-section py-4 my-5 '>
      <div className="container">
        <div className="row ">
          <div className="col-md-6 text-center d-flex align-items-center  ">
            <div className='over-flow'>
              <img data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                src={arhi1} className='aos imgs-width ' id='nono' alt="arhi1" />
            </div>
          </div>
          <div className="col-md-6 pt-4 d-flex flex-column justify-content-center">
            <div data-aos="fade-left"
              data-aos-duration="1000" className='aos' >
              <h2 className='home-title main-h2 pb-3'>Less is more.
              </h2>
              <p className='main-p'>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better.</p>
              <ul className='list-unstyled'>
                <li className='my-2'>
                  <i className=" py-3 me-2 fa-solid fa-lg fa-check" ></i>
                  <span className='main-text-color'>  Aliquam fermentum lorem quis posuere mattis.</span>
                </li>
                <li className='my-2'>
                  <i className=" py-3 me-2 fa-solid fa-lg fa-check" ></i>
                  <span className='main-text-color'> Sed mollis sapien erat id pellentesque libero.</span>
                </li>
                <li className='mt-2'>
                  <i className=" py-3 me-2 fa-solid fa-lg fa-check" ></i>
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
    <div className='third-section py-4  my-5   '>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 pb-4 d-flex flex-column justify-content-center">
            <div className='aos' data-aos="fade-right" data-aos-duration="500">
              <h2 className='home-title main-h2 pb-3'>Architecture is a visual art.
              </h2>
              <p className='main-p'>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house. We are so happy with this theme. Everyday it make our lives better.</p>
              <ul className='list-unstyled'>
                <li className='my-2'>
                  <i className=" py-3 me-2 fa-solid fa-lg fa-check" ></i>
                  <span className='main-text-color'>  Aliquam fermentum lorem quis posuere mattis.</span>
                </li>
                <li className='my-2'>
                  <i className=" py-3 me-2 fa-solid fa-lg fa-check" ></i>
                  <span className='main-text-color'> Sed mollis sapien erat id pellentesque libero.</span>
                </li>
                <li className='mt-2'>
                  <i className=" py-3 me-2 fa-solid fa-lg fa-check" ></i>
                  <span className='main-text-color'>Pellentesque nisl id semper bibendum.
                  </span>
                </li>
              </ul>
            </div>

          </div>
          <div id='sec2' className="col-md-6 text-center d-flex  align-items-center ">
            <div className='over-flow'>
              <img data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000" src={arhi2} className='imgs-width aos ' alt="arhi2" />
            </div>
          </div>

        </div>
      </div>

    </div>
    {/*counter-section*/}
    <div id='counterSection' className='home-counter py-5  py-3'>
      <div className="container ">
        <div className="row justify-content-center align-items-center">
          <div className=" my-5 col-lg-3 col-md-6 ">
            <div className='text-white text-center'>
              <i className=" fa-regular fa-2xl fa-thumbs-up"></i>
              <p className='counter-num my-3' data-target="1200"></p>
              <p className='counter-title'>Page Likes</p>
            </div>
          </div>
          <div className=" my-5 col-lg-3 col-md-6 ">
            <div className='text-white text-center'>
              <i className=" fa-solid fa-lg fa-shop"></i>
              <p className='counter-num my-3' data-target="790"></p>
              <p className='counter-title'>Clients</p>
            </div>
          </div>
          <div className=" my-5 col-lg-3 col-md-6 ">
            <div className='text-white text-center'>
              <i className=" fa-regular fa-lg fa-lightbulb"></i>
              <p className='counter-num my-3' data-target="960"></p>
              <p className='counter-title'>Great Ideas</p>
            </div>
          </div>
          <div className=" my-5 col-lg-3 col-md-6 ">
            <div className='text-white text-center'>
              <i className=" fa-regular fa-lg fa-comment"></i>
              <p className='counter-num my-3' data-target="420"></p>
              <p className='counter-title'>Comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* fifth section */}
    <div className='fifth-section my-5   '>
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 my-4 d-flex flex-column justify-content-center">
            <div >
              <h3>Buildings should serve people, not the other way around.</h3>
              <p className='main-text-color'>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna, eget commodo leo velit sit amet velit. Aliquam fermentum, lorem quis posuere mattis, est justo porttitor magna.</p>
            </div>
          </div>
          <div className="col-md-6 my-4 d-flex align-items-center ">
            <div className='over-flow'>
              <img data-aos="fade-up"
                data-aos-anchor-placement="center-bottom" src={arhi3} className='w-100 aos' alt="arhi2" />
            </div>
          </div>

        </div>
        <div className='row py-4'>
          <div className="col-lg-3 col-md-6">
            <div className='d-flex align-items-baseline '>
              <i className="mb-2 fa-regular fa-lg fa-lightbulb me-3"></i>
              <div>
                <h5>Creativity</h5>
                <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='d-flex align-items-baseline '>
              <i className="mb-2 fa-solid fa-lg fa-pencil me-3"></i>
              <div>
                <h5>Unique Design</h5>
                <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='d-flex align-items-baseline '>
              <i className="mb-2 fa-regular fa-lg fa-heart me-3"></i>
              <div>
                <h5>Satisfied Clients</h5>
                <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className='d-flex align-items-baseline '>
              <i className="mb-2 fa-regular fa-lg fa-newspaper me-3"></i>
              <div>
                <h5>Portfolios</h5>
                <p>Morbi pellentesque, nisl id semper bibendum, nibh sem fermentum magna.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Testimonials */}
    <div className='my-5 testimonials'>
      <div className='py-5 text-center layer  text-white'>
        <h3 className='mt-4'>Testimonials</h3>
        <p className='my-4'>What our awesome clients say about us.</p>

        <div className='mt-4  container d-flex justify-content-center align-items-center'>

          <OwlCarousel className='owl-theme  my-5' loop dots items={2} responsive={{ 0: { items: 1 }, 979: { items: 2 } }}>
            <div className='item text-start mx-2'>
              <div className='testimonials-item rounded-2 my-4'>
                <p className='p-4'>Humanitatis per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima.</p>
              </div>
              <p className='client m-0  '>Michael Moore</p>
              <p className='company m-0'>Apple</p>
            </div>
            <div className='item text-start mx-2'>
              <div className='testimonials-item rounded-2 my-4'>
                <p className='p-4'>Humanitatis per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima.</p>
              </div>
              <p className='client m-0  '>Michael Moore</p>
              <p className='company m-0'>FaceBook</p>
            </div>
            <div className='item text-start mx-2'>
              <div className='testimonials-item rounded-2 my-4'>
                <p className='p-4'>Humanitatis per seacula quarta decima et quinta decima. Modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum quarta decima.</p>
              </div>
              <p className='client m-0  '>Michael Moore</p>
              <p className='company m-0'>Google</p>
            </div>

          </OwlCarousel>

        </div>

      </div >
    </div >
    {/* location */}
    <div className='third-section my-5 py-2  '>
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 py-4">
            <div>
              <h3 className='home-title contact-title pb-3'>Contact Information
              </h3>
              <p className='main-text-color'>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              <p className='main-text-color my-4'>Our contact details:</p>
              <ul className='list-unstyled my-3 text-start'>
                <li className='d-flex mx-0  my-3 align-items-baseline' >

                  <div className='icon-holder me-3 bg-white border contact-icon border-1 d-flex justify-content-center align-items-center '>
                    <i className='fa-solid fa-map main-text-color '></i>
                  </div>
                  <span className='main-text-color'>  Manchester St 123-78B, UK</span>
                </li>

                <li className='d-flex mx-0  my-3 align-items-baseline' >

                  <div className='icon-holder me-3 bg-white contact-icon border border-1 d-flex justify-content-center align-items-center '>
                    <i className='fa-solid fa-phone main-text-color '></i>
                  </div>
                  <span className='main-text-color'> +46 123 456 789</span>
                </li>
                <li className='d-flex mx-0  my-3 align-items-baseline' >

                  <div className='icon-holder me-3 bg-white contact-icon border border-1 d-flex justify-content-center align-items-center '>
                    <i className='fa-solid fa-headphones main-text-color '></i>
                  </div>
                  <span className='main-text-color'>  +37 431 456 789</span>
                </li>
                <li className='d-flex mx-0  my-3 align-items-baseline' >

                  <div className='icon-holder me-3 bg-white contact-icon border border-1 d-flex justify-content-center align-items-center '>
                    <i className='fa-solid fa-envelope main-text-color '></i>
                  </div>
                  <span className='main-text-color'>hello@sitename.com</span>
                </li>
              </ul>
            </div>

          </div>
          <div className="col-md-6 text-center map ">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988756678!2d0.0632084811207095!3d51.52873980478871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z2YTZhtiv2YbYjCDYp9mE2YXZhdmE2YPYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1697235415908!5m2!1sar!2seg" className='w-100 h-100 ' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>

        </div>
      </div>

    </div>

  </ >


}
