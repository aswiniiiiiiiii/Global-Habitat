import React from "react";
import "../styles/contact.css";
import Header from "../components/header/Header";
import MapSection from "../components/MapSection";
import SecondFooter from "../components/footer/SecondFooter";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  return (
   <>
   <Header/>
      <div>
        {/* logo */}
         <div className="logo-section">
           <div className="logo">
            <img src={"logo-global-habitat.png"} alt="" /></div>
         </div> 
         {/* conatact heading */}
         <h2 className="section-title">Contact <span>Us</span></h2>

        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-image">
              <img
                src="https://globalhabitat.in/wp-content/uploads/2024/08/STREET-VIEW.jpg"
                alt="Contact"
              />
            </div>
            <div className="contact-form-container">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </section>
        {/* CONTACT info section */}
      {/* <div className="contact-info-section">
          <div class="info-section">
    <div class="info-box">
      <div class="info-item">
        <div class="icon">
          <i class="fas fa-phone"></i>
        </div>
        <h4>Call Us</h4>
        <p>+91 -99468 30300</p>
      </div>
  
      <div class="info-item">
        <div class="icon">
          <i class="fas fa-envelope"></i>
        </div>
        <h4>Email Us</h4>
        <p>marketing@globalhabitat.in</p>
      </div>
  
      <div class="info-item">
        <div class="icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <h4>Address</h4>
        <p>
          Global Habitat, 2nd Floor, Onyx,<br />
          Golf Link Rd, Chevayoor, Kozhikode, Kerala
        </p>
      </div>
    </div>
  </div>
      </div> */}
      <ContactCard/>
      {/* map section */}
      <div>
        <MapSection/>
      </div>
      {/* footer */}
      <div>
        <SecondFooter/>
      </div>
      </div>
   </>
  );
};

export default Contact;
