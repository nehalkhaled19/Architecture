import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            {/* first section */}
            <div className='footer1'>
            <div className="container py-5 ">
                <div className="row">
                    <div className="col-md-4">
                        <div>
                            <h4 className='mb-3'>About us</h4>
                            <p className='footer-text' >I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur. I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur.
                            </p>
                            <p className='footer-text'>
                                We are the champions! We are the most amazing theme of all time, yeah.
                            </p>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            <h4 className='mb-3'>Opening Hours</h4>
                            <ul className='list-unstyled'>
                                <li className=' footer-border '>
                                    <i class=" py-3 fa-solid fa-angle-right" ></i>
                                    <span> Monday 10AM – 9PM</span>
                                </li>
                                <li className=' footer-border '>
                                    <i class=" py-3 fa-solid fa-angle-right" ></i>
                                    <span> Tuesday 10AM - 9PM</span>
                                </li>
                                <li className=' footer-border '>
                                    <i class=" py-3 fa-solid fa-angle-right" ></i>
                                    <span> Wednesday 10AM - 9PM</span>
                                </li>
                                <li className=' footer-border '>
                                    <i class=" py-3 fa-solid fa-angle-right" ></i>
                                    <span> Thursday 10AM - 10PM</span>
                                </li>
                                <li className=' footer-border '>
                                    <i class=" py-3 fa-solid fa-angle-right" ></i>
                                    <span> Friday 10AM - 10PM</span>
                                </li>
                                <li >
                                    <i class=" py-3 fa-solid fa-angle-right" ></i>
                                    <span> Weekends 10AM - 11PM
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-md-4 footer-contact">
                        <div className='footer-layer'>
                            <h4 className='mb-3 '>Contact Details </h4>
                            <ul className='list-unstyled'>
                                <li className=' py-3 footer-border '>
                                    <i class=" me-2 fa-solid fa-location-dot" ></i>
                                    <span>Manchester Road 123-78B, Silictown 7854MD, Great Country</span>
                                </li>
                                <li className=' py-3 footer-border '>
                                    <i class=" me-2 fa-solid fa-phone" ></i>
                                    <span> 123 456 7893</span>
                                </li>
                                <li className=' py-3 footer-border '>
                                    <i class=" me-2 fa-solid fa-envelope" ></i>
                                    <span> hello@sitename.com</span>
                                </li>
                                <li className=' py-3' >
                                    <i class="fa-solid me-2 fa-earth-americas"></i>
                                    <span> http://www.sitename.com</span>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>

            </div>
            </div>
            {/* second section */}
            <div className=' footer2 py-4'>
                <div className="conatiner text-center">
                    <p className='m-auto my-2' >Copyright 2017 All rights reserved.</p>
                    <div className='d-flex my-3 justify-content-center '>
                        <div className='icon-holder icon-facebook mx-1 d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-facebook-f '></i>
                        </div>
                        <div className='icon-holder icon-google mx-1 d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-google '></i>
                        </div>  <div className='icon-holder icon-tumblr mx-1 d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-tumblr '></i>
                        </div>  <div className='icon-holder icon-twitter mx-1 d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-twitter '></i>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}
