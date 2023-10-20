import React from 'react'
import './About.css'
import img1 from '../../images/archi-18-800x600.jpg'
import img2 from '../../images/archi-15-800x600.jpg'
import person1 from '../../images/person1-600x600.jpg'
import person2 from '../../images/person2-600x600.jpg'
import person3 from '../../images/person3-600x600.jpg'



export default function About() {

  return (
    <div className='about'>
      {/* title */}
      <div className=' h-50'>
        <div className="conatiner py-5 about-title">
          <div className='about-text-color h-100 d-flex  flex-column justify-content-center text-center' >
            <h1 className='main-font-weight'>Get to know us</h1>
            <p>Meet our team of expert</p>
          </div>

        </div>
      </div>
      {/* section 1 story */}
      <div className='py-5 our-story'>
        <div className="container ">
          <div className="row ">
            <div className="col-md-6 py-3 px-3 ">
              <div className='text-end '>
                <img src={img1} className='about-img rounded-2' alt="arch12" />

              </div>
            </div>
            <div className="col-md-6 py-3 px-5 d-flex flex-column justify-content-center edit">
              <div >
                <h2 className='main-font-weight main-h2 my-4'>Our Story</h2>
                <p className='max-width main-p'>Sed faucibus arcu. Donec semper risus arcu, nec tempor nisl vestibulum nec. Suspendisse tempor posuere sodales. Mauris molestie vestibulum sem id posuere. Aliquam interdum lacinia ante quis pharetra. Curabitur molestie ultrices consequat. Vivamus finibus ex vel fermentum ultricies. Mauris interdum eros sit amet eros commodo euismod. We have been operating for over 30 years and are Members of The Federation of Master Builders.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* section 2 goal*/}
      <div className='main-bg-color  py-5'>
        <div className="container">
          <div className="row our-story">
            <div className="col-md-6 py-3 px-5 d-flex flex-column justify-content-center edit">
              <div >
                <h2 className='main-font-weight main-h2 my-4'>Our Goal</h2>
                <p className='max-width main-p'>We have been operating for over 30 years and are Members of The Federation of Master Builders. We work on projects big and small from small residential extensions to full house and commercial builds and we are registered NHBC house builders.</p>
              </div>
            </div>
            <div className="col-md-6 py-3 px-3 ">
              <div className='text-start'>
                <img src={img2} className=' about-img rounded-2' alt="arch15" />
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* section 3 method */}
      <div className='our-methood py-5'>
        <div className='w-100 text-center py-3'>
          <i className="fa-solid fa-infinity fa-2xl mb-2 " style={{ color: '#d8b478' }}></i>
          <h3 className='my-4'>Our Methods</h3>
          <p className='text-muted'>Learn more about us.</p>
        </div>
        <div className='container'>
          <div >

            <ul className="nav nav-pills mb-3 justify-content-center tabs" id="pills-tab" role="tablist">
              <li className="nav-itemy" role="presentation">
                <button className="nav-link  active" id="goals-tab" data-bs-toggle="pill" data-bs-target="#goals" type="button" role="tab" aria-controls="goals" aria-selected="true">
                  <span>OUR GOAL</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="methods-tab" data-bs-toggle="pill" data-bs-target="#methods" type="button" role="tab" aria-controls="methods" aria-selected="false">
                  <span>OUR METHODS</span>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="results-tab" data-bs-toggle="pill" data-bs-target="#results" type="button" role="tab" aria-controls="results" aria-selected="false">
                  <span>OUR RESULTS</span>

                </button>
              </li>
            </ul>
            <div className="tab-content py-3" id="pills-tabContent">
              <div className="tab-pane   fade show active" id="goals" role="tabpanel" aria-labelledby="goals-tab" tabindex="0">
                <div className="row">
                  <div className="col-md-6 tabs-text-color">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nisl diam, vitae consequat massa lacinia consequat. Nullam cursus risus a sem pretium lacinia. Etiam facilisis laoreet justo. Morbi mattis, turpis quis volutpat fermentum, lacus ante sagittis eros, vitae imperdiet leo felis ut ligula. Nulla sollicitudin lorem quis tempor mattis. Maecenas tincidunt nibh a velit dapibus gravida. Aliquam nisi enim, viverra eu nulla sed, fermentum volutpat dui. Nulla sollicitudin lorem quis
                  </div>
                  <div className="col-md-6 tabs-text-color">
                    Phasellus mattis efficitur sollicitudin. Aliquam nisi enim, viverra eu nulla sed, fermentum volutpat dui. Proin nec dui congue neque cursus ullamcorper. Sed ipsum risus, ultrices a posuere ac, molestie sed tortor. Aenean gravida enim velit, ut auctor eros porttitor in. Phasellus consectetur a est dictum aliquet. Nulla et neque efficitur, auctor purus vel, ornare tellus. Aenean non tellus elementum purus feugiat ullamcorper a ut urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam fermentum tristique ante.
                  </div>
                </div>
              </div>
              <div className="tab-pane fade  tabs-text-color" id="methods" role="tabpanel" aria-labelledby="methods-tab" tabindex="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nisl diam, vitae consequat massa lacinia consequat. Nullam cursus risus a sem pretium lacinia. Etiam facilisis laoreet justo. Morbi mattis, turpis quis volutpat fermentum, lacus ante sagittis eros, vitae imperdiet leo felis ut ligula. Nulla sollicitudin lorem quis tempor mattis. Maecenas tincidunt nibh a velit dapibus gravida. Phasellus mattis efficitur sollicitudin. Aliquam nisi enim, viverra eu nulla sed, fermentum volutpat dui. Proin nec dui congue neque cursus ullamcorper. Sed ipsum risus, ultrices a posuere ac, molestie sed tortor. Aenean gravida enim velit, ut auctor eros porttitor in. Phasellus consectetur a est dictum aliquet. Nulla et neque efficitur, auctor purus vel, ornare tellus. Aenean non tellus elementum purus feugiat ullamcorper a ut urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam fermentum tristique ante.
              </div>
              <div className="tab-pane fade  tabs-text-color" id="results" role="tabpanel" aria-labelledby="results-tab" tabindex="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices nisl diam, vitae consequat massa lacinia consequat. Nullam cursus risus a sem pretium lacinia. Etiam facilisis laoreet justo. Morbi mattis, turpis quis volutpat fermentum, lacus ante sagittis eros, vitae imperdiet leo felis ut ligula. Nulla sollicitudin lorem quis tempor mattis. Maecenas tincidunt nibh a velit dapibus gravida. Phasellus mattis efficitur sollicitudin. Aliquam nisi enim, viverra eu nulla sed, fermentum volutpat dui. Proin nec dui congue neque cursus ullamcorper. Sed ipsum risus, ultrices a posuere ac, molestie sed tortor. Aenean gravida enim velit, ut auctor eros porttitor in. Phasellus consectetur a est dictum aliquet. Nulla et neque efficitur, auctor purus vel, ornare tellus. Aenean non tellus elementum purus feugiat ullamcorper a ut urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam fermentum tristique ante.
              </div>
            </div>




          </div>
        </div>

      </div>
      {/* section 4 team*/}
      <div className='main-bg-color our-methood  py-5'>
        <div className='w-100 text-center py-3 '>
          <i className="fa-solid fa-user fa-2xl" style={{ color: '#d8b478' }}></i>
          <h3 className='main-font-weight my-4'>Our Dedicated Team</h3>
          <p className='text-muted'>Learn more about our architecture experts.</p>
        </div>
        <div className="container p-4 team">
          <div className=" px-4 row">
            <div className="col-lg-4 col-md-6 my-3">
              <div className=' border border-1 item2 bg-white zoom overflow-hidden rounded-2 '>
              <div className='over-flow position-relative'>
              <img src={person3} alt="person1" className='w-100' />
              <div className="social d-flex align-items-center  justify-content-center">
                <div className="d-flex align-items-center position-absolute justify-content-center">
                <div className='icon-holder2 icon-facebook mx-1  d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-facebook-f '></i>
                        </div>
                        <div className='icon-holder2 icon-google mx-1 d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-google '></i>
                        </div>  <div className='icon-holder2 icon-tumblr mx-1  d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-tumblr '></i>
                        </div>  <div className='icon-holder2 icon-twitter mx-1  d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-twitter '></i>
                        </div>
            
                </div>
              </div>
                </div>
                <div className='p-4 pb-2'>
                      <h4 className='p-0'>John Doe</h4>
                      <span >Barista</span>
                   
                  <p className='text-muted mt-3'>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper accumsan lectus, a tempor turpis interdum sed. Donec ac faucibus nunc.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-3">
              <div className=' border border-1 item2 bg-white zoom overflow-hidden rounded-2 '>
              <div className='over-flow position-relative'>
              <img src={person2} alt="person2" className='w-100' />
              <div className="social d-flex align-items-center  justify-content-center">
                <div className="d-flex align-items-center position-absolute justify-content-center">
                <div className='icon-holder2 icon-facebook mx-1  d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-facebook-f '></i>
                        </div>
                        <div className='icon-holder2 icon-google mx-1 d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-google '></i>
                        </div>  <div className='icon-holder2 icon-tumblr mx-1  d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-tumblr '></i>
                        </div>  <div className='icon-holder2 icon-twitter mx-1  d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-twitter '></i>
                        </div>
            
                </div>
              </div>
                </div>
                <div className='p-4 pb-2'>
                      <h4 className='p-0'>Kevin Holmes</h4>
                      <span >Barista</span>
                   
                  <p className='text-muted mt-3'>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper accumsan lectus, a tempor turpis interdum sed. Donec ac faucibus nunc.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 my-3">
              <div className=' border border-1 item2 bg-white zoom overflow-hidden rounded-2 '>
              <div className='over-flow position-relative'>
              <img src={person1} alt="person3" className='w-100' />
              <div className="social d-flex align-items-center  justify-content-center">
                <div className="d-flex align-items-center position-absolute justify-content-center">
                <div className='icon-holder2 icon-facebook mx-1  d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-facebook-f '></i>
                        </div>
                        <div className='icon-holder2 icon-google mx-1 d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-google '></i>
                        </div>  <div className='icon-holder2 icon-tumblr mx-1  d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-tumblr '></i>
                        </div>  <div className='icon-holder2 icon-twitter mx-1  d-flex justify-content-center align-items-center '>
                            <i className='fa-brands fa-twitter '></i>
                        </div>
            
                </div>
              </div>
                </div>
                <div className='p-4 pb-2'>
                      <h4 className='p-0'>John Doe</h4>
                      <span >Barista</span>
                   
                  <p className='text-muted mt-3'>Ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies nisi at scelerisque pellentesque. Nunc feugiat felis vitae aliquet consequat. Aliquam ullamcorper accumsan lectus, a tempor turpis interdum sed. Donec ac faucibus nunc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
