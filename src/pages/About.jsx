import React from 'react'
import Header from '../components/header/Header'
import SecondFooter from "../components/footer/SecondFooter";
import '../styles/about.css'
import Testmonial from '../components/Testmonial'
// import Sample from '../pages/Sample';

const About = () => {
  return (
    <>
      {/* header */}
      <Header/>
      {/* about*/}
      <div>
        {/* about-section-one */}
        <div className="about-section-one">
         <div className='about-section-one-container'>
          <div className="bg-blue"></div>
            <img src="https://globalhabitat.in/wp-content/uploads/2024/08/home-rental-31.jpg" alt="" />
            <div className="about-text-overlay">
              <p>OUR STORY</p>
              <h1>About Us</h1>
         </div>
          </div>
        </div>
        {/* about-sevtion-two */}
        <div className="about-section-two">
          <div className="about-logo">
            <img src={"logo-global-habitat.png"} alt="" />
          </div>
          <div className='about-section-two-text'>
            <h1>AT GLOBAL HABITAT, ITS ALWAYS ABOUT MAKING LIFE BEAUTIFUL.</h1>
            <p>We are a new age real estate company with a vision to change the landscape of emerging Metropolises. Having considerable experience in the construction and real estate industry, we have acquired the best from every project we worked on. With over 2,00,000+ sq. Ft. of construction and 100+ happy customers. This has helped us evolve our own work philosophy: one that creates a harmony of quality and affordability. Our approach to the industry is honed by an innate understanding of individual customer markets. We model our projects on these needs; we believe that every home ambiance must be in complete harmony with its social, physical and psychological environment.</p>
          </div>
        </div>
        {/* about-section-three */}
        {/* <div className="about-section-three">
          <div className="section-three-container">
               <div className="section-three-left">
                <img src="https://globalhabitat.in/wp-content/uploads/2024/09/pikaso_embed.jpeg" alt="" />
               </div>
               <div className="section-three-right">
                  <div className='section-three-right-text'>
                    <h1>Our Values</h1>
                    <p><span>LOYALTY</span>: We understand that a home’s relationship with our customer is lifelong. We stand by that commitment and ensure that we always be loyal to faith you put in us.</p>
  
                  <p> <span>INTEGRITY</span>: Our people are bound by thread of value that travel beyond the work place. Our actions always reflect our core attribute of integrity and unity and its naturally translates the sound business practice.</p>
  
                  <p><span>FUNCTIONALITY</span>: We understand that functionality most compliment beauty. You’ll find that homes built by Global Habitat reflect just that: Maximum utilization of space perfectly functional homes.</p>
  
                  <p><span>EXCELLENCY</span>: Our pursuit excellency is reflected in everything we do.</p>
                  </div>
               </div>
          </div>
          
        </div> */}
          {/*about-section-four */}
        {/* <div className="about-section-four">
            <div className="section-four-container">
              <div className="four-container-two-left">
                <img src="https://globalhabitat.in/wp-content/uploads/2024/09/pikaso_embed-1.jpeg" alt="" />
              </div>
              <div className="four-container-two-right">
                <div className="section-four-right-text">
                  <h1>Vision</h1>
                  <p>To create real estate solution that resonates with our values and reflect our customer’s demands for perfection</p>
                </div>
              </div>
            </div>
          </div> */}
        {/* <div className='sample'>  <Sample/></div> */}
          {/* testmonial */}
          <div className="about-testmonial">
          <Testmonial/>
          </div>
          {/* about-last-container */}
         <div className='about-last'>
            <div className="about-last-container">
              <div className="about-last-text">
                <h1>Stay With Us</h1>
                <p>Discover your ideal home with Global Habitat—where quality meets comfort and every detail is crafted for <br /> your lifestyle.</p>
                <div className='about-last-btn'>BOOK US TODAY</div>
              </div>
            </div>
         </div>
      </div>
      {/* footer */}
      <SecondFooter/>
    </>
  )
}

export default About
