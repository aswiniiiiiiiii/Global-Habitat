import React, { useEffect } from 'react'
import Header from '../components/header/Header'
import '../styles/project.css'
import AutoCarousel from '../components/AutoCarousel'
import Gallery from '../components/Gallery'
import SecondFooter from "../components/footer/SecondFooter";


const projects = [
  {
  img:"https://globalhabitat.in/wp-content/uploads/2024/09/misty-hills.png",heading:"Misty Hills",place:"Off Moozhikkal, Calicut"
  },
  {
  img:"https://globalhabitat.in/wp-content/uploads/2024/09/bella-casa-upcoming.jpg",heading:"Bella Casa",place:"Avinashi Road, Coimbatore"
  },
  {
  img:"https://globalhabitat.in/wp-content/uploads/2024/09/palm-springs.jpg",heading:"Palm Springs",place:"Off Moozhikkal, Coimbatore "
  },
  {
    img:"https://globalhabitat.in/wp-content/uploads/2024/09/carnation-ready-to-occupy.jpg",heading:"Carnation ",place:"Saravanampatti, Coimbatore "
  },
  {
     img:"https://globalhabitat.in/wp-content/uploads/2024/09/magnolia-ready-to-occupy.jpg",heading:"Mangolia ",place:"Ganapathy, Coimbatore, Calicut"
  },
  {
    img:"https://globalhabitat.in/wp-content/uploads/2024/09/daffodil-sold-out.jpg.png  ",heading:"Daffodil ",place:"Vadavalli, Coimbatore, Calicut"
 }
  
]

// console.log(projects)
const Projects = () => {
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
    <div>
      <Header/>
       <div>
        <h1 className='project-head'>Our Projects</h1>
        {/* project first section */}
       <div className='project-carousel'> 
        <div  className="carousel-text">
          <h1 data-aos="fade-right">SUCCESS</h1>
          <p data-aos="fade-right">we don’t just build structures — we build dreams, trust, and long-lasting relationships. With a vision to redefine urban living, we specialize in creating thoughtfully designed residential and commercial spaces that reflect both quality and comfort.</p>
        </div>
       <div className='auto-carousl'> <AutoCarousel/></div>
      
      </div>
      {/* project second section */}
      <div className="project-second-section">
        <div className="project-second-section-container">
        {projects.map((data, index) => (
              <div key={index} className="project-card">
                <div className='project-img'>
                  <img src={data.img} alt={data.heading} />
                </div>
                <div className="project-card-text">
                  <h4>{data.heading}</h4>
                  <p>{data.place}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* project gallery */} 
      <h1 className='gallery'>Gallery</h1>
      <div className="project-gallery">
        <Gallery/>
      </div>
      {/* project-last */}
      <div className="project-last">
        <div data-aos="fade-right" className="project-last-container">
          <div className="project-last-left">
            <h1>Get in Touch</h1>
            <p>We’re here to help. Call us at <span>+91 – 99468 30300</span></p>
            <div ><button className='project-btn'>BOOK NOW</button></div>
          </div>
          <div data-aos="fade-left"className="project-last-right">
             <img src="	https://globalhabitat.in/wp-content/uploads/2024/08/home-rental-31.jpg" alt="" />
          </div>
        </div>
      </div>
      {/* footer */}
      <SecondFooter/>
       </div>
    </div>
  )
}

export default Projects
