import React, { useEffect } from 'react'
import Header from '../components/header/Header'
import '../styles/home.css'
import AutoCarousel from '../components/AutoCarousel'
import Testmonial from '../components/Testmonial'
import Gallery from '../components/Gallery'
import Footer from '../components/footer/Footer'

const Home = () => {
  // aos animation
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: false, // <- allow re-trigger on scroll
      });
    }
  }, []);
  return (
    <>
        <Header/>
       <div id='home' className="home-container">
        {/* home section one */}
         <div className="home-section-one">
            {/* left section */}
             <div className="home-section-one-left">
               <div>
                  <p data-aos="zoom-in-right">Welcome to global habitat</p>
                  <h1 data-aos="zoom-in-right">New Home</h1>
                  <h1 data-aos="zoom-in-left">New Adventures </h1>
                  <h1 data-aos="zoom-in-right">New Memories</h1>
               </div>
                <div>
                  <button className='left-button'>BOOK YOUR APPOINTMNET</button>
               </div>
             </div>
               {/* right section */}
               <div className="home-section-one-right">
                <div className='home-section-one-right-container'>
                  
                  <AutoCarousel/>
                </div>
             </div>
         </div>
         {/* home section two */}
         <div className="home-sectiom-two">
         <div className='home-section-two-container'>
            <div className="home-section-two-top">
              <h1 data-aos="zoom-in">WELCOME TO GLOBAL HABITAT</h1>
              <p data-aos="zoom-in">We are a new age real estate company with a vision to change the landscape of emerging metropolises. Having considerable experience in the construction and real estate industry, we have accrued the best from every project we work on. This has helped us evolve our own work philosophy: one that creates harmony of quality and affordability.</p>
            </div>
            {/* icons with text */}
            <div className="home-section-two-bottom">
            <div  data-aos="flip-right" className="section-two-bottom">
              <div className="circle-icon">
                <i className="fa-solid fa-sheet-plastic"></i>
              </div>
              <p>Transparency</p>
            </div>
            <div  data-aos="flip-right" className="section-two-bottom">
              <div className="circle-icon">
              <i class="fa-solid fa-certificate"></i>              </div>
              <p>Expertise</p>
            </div>
            <div  data-aos="flip-right" className="section-two-bottom">
              <div className="circle-icon">
              <i class="fa-solid fa-hands-holding-circle"></i>
              </div>
              <p>Reliability</p>
            </div>
            <div  data-aos="flip-right" className="section-two-bottom">
              <div className="circle-icon">
              <i class="fa-regular fa-circle-check"></i>
              </div>
              <p>Quality</p>
            </div>
            <div  data-aos="flip-right" className="section-two-bottom">
              <div className="circle-icon">
              <i class="fa-solid fa-network-wired"></i>     
                       </div>
              <p>Technologies</p>
            </div>
          </div>
          {/* btn */}
          <div>
          <button className="project-button">
          OUR PROJECTS
          <span className="second-arrow">→</span>
        </button>
          </div>
         </div>
         </div>
         {/* home section three */}
         <div className="home-section-three">
  <div className="image-wrapper">
    <img src="https://globalhabitat.in/wp-content/uploads/2024/08/STREET-VIEW.jpg" alt="" />
    <div className="hover-text">Street View</div>
  </div>
        </div>
        {/* home section four */}
        <div className="home-section-four">
  <div className=" home-section-four-property-card">
    <div className="bg-overlay"></div>
    <img src="https://globalhabitat.in/wp-content/uploads/2024/08/STREET-VIEW.jpg" alt="Misty Hills" />
    <div className="property-info">
      <h2>Misty Hills</h2>
      <p>Moozhikkal, Calicut</p>
    </div>
  </div>

  <div className="home-section-four-property-card">
  <div className="bg-overlay"></div>
    <img src="https://globalhabitat.in/wp-content/uploads/2024/08/bella-casa-upcoming.jpg" alt="Bella Casa" />
    <div className="property-info">
      <h2>Launching Soon – Bella Casa</h2>
      <p>Avinashi Road, Coimbatore</p>
    </div>
  </div>
        </div>
        {/* home section fifth */}
        <div className="home-section-fifth">
         <div className='home-fifth-container'>
            <h1 data-aos="zoom-in">OUR PROMISE</h1>
            <div className='section-fifth-bottom'>
              <div data-aos="zoom-in" className="section-fifth-one">
              <i class="fa-solid fa-circle-check fifth-icon"></i>
              <div className="fifth-text">
                <h3>SAFETY</h3>
                <p>Safety is the most important of our core values. It is our first priority</p>
              </div>
              </div>
              <div data-aos="zoom-in" className="section-fifth-one">
              <i class="fa-solid fa-handshake  fifth-icon"></i>           
                 <div className="fifth-text">
                <h3>COMMUNITY</h3>
                <p>involvement and support of the community are at the heart of us</p>
              </div>
              </div>
              <div data-aos="zoom-in" className="section-fifth-one">
              <i class="fa-solid fa-hands-holding-circle fifth-icon"></i>
              <div className="fifth-text">
                
                <h3>SUSTAINABILITY</h3>
                <p>Structure’s communitment to green building and sustainability</p>
              </div>
              </div>
            </div>
         </div>
        </div>
        {/* home sixth section */}
        <div className="home-sixth-section">
          <div className="home-sixth-section-container">
            <div  data-aos="fade-right" className="sixth-one">
            <img src="	https://globalhabitat.in/wp-content/uploads/2024/08/home-rental-6.jpg" alt="" />
            </div>
          <div data-aos="fade-left" className="sixth-two">
            <div  className="sixth-text-overlay">
              <h2>Stay With Us</h2>
              <p>Partner with us to create and acquire your ideal apartment.</p>
              <div><span className="sixth-btn">BOOK NOW <span class="sixth-arrow">→</span></span></div>
              </div>
          </div>
          </div>
        </div>
        {/* testmonial part */}
        <div data-aos="zoom-in" className="testmonial-part">
          <Testmonial/>
        </div>
        {/* gallery */}
        <div className="gallery">
          <Gallery/>
        </div>
        {/* footer */}
        <Footer/>
       </div>
    </>
  )
}

export default Home
