import React from "react";
import "../footer/footer.css";

const Footer = () => {
  return (
   <>
        <footer >
          <div className="footer">
              <div className="footer-top">
                <img src="https://globalhabitat.in/wp-content/uploads/2024/08/SFEFBG-300x77.png" alt="Misty Hills Logo" className="footer-logo" />
                <p>Global Habitat, 2nd Floor, Onyx,</p>
                <p>Golf Link Rd, Chevayoor, Kozhikode, Kerala</p>
              </div>
        
              <hr className="footer-divider" />
        
              <div className="footer-middle">
                <h3>GLOBAL HABITAT PVT LTD</h3>
                <p>Keeranatham Main Road, Saravanampatti, Coimbatore – 641035. Tamil Nadu</p>
              </div>
        
              <div className="footer-contacts">
                <div className="footer-contact">
                  <div className="icon-circle">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div>
                    <p><span>+91</span> – <strong>99468 30300</strong></p>
                    <p><span>+91</span> – <strong>95009 03100</strong></p>
                  </div>
                </div>
        
                <div className="footer-contact">
                  <div className="icon-circle">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <p>helpdesk.calicut@globalhabitat.co.in</p>
                </div>
              </div>
        
              <hr className="footer-divider" />
        
              <div className="footer-bottom">
                <p>Copyright © 2025 Techrootz. All Rights Reserved.</p>
              </div>
          </div>
          <div className="footer-end">
     <div className="footer-icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
     </div>

      </div>
        </footer>
       
   </>
    
  );
};

export default Footer;
