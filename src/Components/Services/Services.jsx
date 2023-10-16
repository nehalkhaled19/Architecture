import React from 'react'
import img1 from '../../images/archi-14-700x600.jpg'
import img2 from '../../images/archi-11-700x600.jpg'
import img3 from '../../images/archi-7-700x600.jpg'
import img4 from '../../images/archi-15-800x600.jpg'
import '../About/About.css'
import './Services.css'

export default function Services() {
  return (
    <div className='services'>
      {/* title */}
      <div className=' h-50'>
        <div className="conatiner py-5 about-title">
          <div className='about-text-color h-100 d-flex flex-column justify-content-center text-center' >
            <h1>Services</h1>
          </div>
        </div>
      </div>
      {/* section 1  */}
      <div className="unique">
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
      </div>
      {/* section 2  design*/}
      <div className='py-5 design '>
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 py-3 ">
              <div>
                <img src={img1} className='about-img rounded-2' alt="arch1" />

              </div>
            </div>
            <div className="col-md-6 py-3 d-flex flex-column justify-content-center edit">
              <div >
                <h3 className='main-font-weight main-h2 my-4'>Interior Design</h3>
                <p className='max-width main-p'>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house and commercial builds and we are registered NHBC house builders.</p>
                <div className='line'></div>
                <p className='max-width main-p'>
                  I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* section 3  design*/}
      <div className='py-5 design main-bg-color'>
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 py-3 d-flex flex-column justify-content-center edit">
              <div >
                <h3 className='main-font-weight main-h2 my-4'>Interior Design</h3>
                <p className='max-width main-p'>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house and commercial builds and we are registered NHBC house builders.</p>
                <div className='line'></div>
                <p className='max-width main-p'>
                  I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>
            <div className="col-md-6 py-3 ">
              <div>
                <img src={img2} className='about-img rounded-2' alt="arch2" />

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* section 4  design*/}
      <div className='py-5 design '>
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 py-3 ">
              <div>
                <img src={img3} className='about-img rounded-2' alt="arch1" />

              </div>
            </div>
            <div className="col-md-6 py-3 d-flex flex-column justify-content-center edit">
              <div >
                <h3 className='main-font-weight main-h2 my-4'>Interior Design</h3>
                <p className='max-width main-p'>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house and commercial builds and we are registered NHBC house builders.</p>
                <div className='line'></div>
                <p className='max-width main-p'>
                  I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* skills */}
      <div className='py-5 main-bg-color'>
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
              <div>
                <div className=" d-flex mt-4">
                  <span >Architecture</span>
                  <span className='ms-auto'>94%</span>
                </div>
                <div className="progress my-1" role="progressbar" aria-label="Basic example" aria-valuenow="94" aria-valuemin="0" aria-valuemax="100" style={{ height: "11px" }}>
                  <div className="progress-bar" style={{ backgroundColor: '#d8b478', width: '94%' }}></div>
                </div>
                <div className=" d-flex mt-4">
                  <span>Design</span>
                  <span className='ms-auto'>86%</span>
                </div>

                <div className="progress my-1" role="progressbar" aria-label="Basic example" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100" style={{ height: "11px" }}>
                  <div className="progress-bar" style={{ backgroundColor: '#d8b478', width: '86%' }}></div>
                </div>
                <div className=" d-flex mt-4">
                  <span>Space Optimization</span>
                  <span className='ms-auto'>78%</span>
                </div>

                <div className="progress my-1" role="progressbar" aria-label="Basic example" aria-valuenow="78" aria-valuemin="0" aria-valuemax="100" style={{ height: "11px" }}>
                  <div className="progress-bar" style={{ backgroundColor: '#d8b478', width: '78%' }}></div>
                </div>
                <div className=" d-flex mt-4">
                  <span>Unique Furniture</span>
                  <span className='ms-auto'>65%</span>
                </div>

                <div className="progress my-1" role="progressbar" aria-label="Basic example" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100" style={{ height: "11px" }}>
                  <div className="progress-bar" style={{ backgroundColor: '#d8b478', width: '72%' }}></div>
                </div>

              </div>
            </div>
          </div>
          <div className="row justify-content-center  py-5">
            {/* <video controls poster={img4}>
              <source src="https://www.youtube.com/embed/rEmYmu6jxz0?si=H32Gicxbf-NN1bFI" type="video/mp4" />
            </video> */}
            {/* <iframe width="400px" poster={img4} height="315px" src="https://www.youtube.com/embed/rEmYmu6jxz0?si=H32Gicxbf-NN1bFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          </div>
        </div>
      </div>

    </div>

  )
}
