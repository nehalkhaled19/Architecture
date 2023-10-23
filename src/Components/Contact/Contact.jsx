import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div>
      {/* title */}
      <section className='h-50'>
        <div className="conatiner py-5 about-title">
          <div className='about-text-color h-100 d-flex  flex-column justify-content-center text-center' >
            <h1 className='main-font-weight'>Contact Us</h1>
            <p>We will keep in touch with you soon</p>
          </div>

        </div>
      </section>
      {/* body */}
      <section>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-7 About-Project ">
              <h4 >Contact Form
              </h4>
                  <form>
                    <div className='row justify-content-between'>
                      <div className="col-lg-6 mb-4">
                        <input className="form-control py-3  " type="text" placeholder='Name'  aria-label="default input example" />

                      </div>
                      <div className="col-lg-6 mb-4">
                        <input className="form-control py-3" type="email" placeholder='Email'  aria-label="default input example" />
                      </div>
                    </div>
                    <div className='mb-4'>
                      <input className="form-control py-3" type="text" placeholder='Subject'  aria-label="default input example" />
                    </div>
                    <div className='mb-4' >
                      <textarea className="form-control py-3" placeholder='Message' id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>
                    <div className='w-100 text-end'>
                      <button className='btn btn-send px-5 text-end'>Send</button>

                    </div>


                  </form>
                </div>
                <div className="col-lg-4 offset-lg-1  About-Project">
                  <div>
                    <h4 >Contact Information
                    </h4>
                    <p className='main-text-color About-Project-p'>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <p className='main-text-color About-Project-p my-4'>Our contact details:</p>
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
            </div>
          </div>
      </section>
      {/* map */}
      <div className='w-100 h-50'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988756678!2d0.0632084811207095!3d51.52873980478871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z2YTZhtiv2YbYjCDYp9mE2YXZhdmE2YPYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1697235415908!5m2!1sar!2seg" className='w-100 h-100 ' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </div>
  )
}
