import React from 'react'
import '../styles/contactcard.css'
const ContactCard = () => {
  return (
    <div>
      <div className="contact-info-section">
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
      </div> 
    </div>
  )
}

export default ContactCard
