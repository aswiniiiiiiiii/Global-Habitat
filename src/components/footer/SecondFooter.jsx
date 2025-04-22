import React from "react";
import "../footer/secondfooter.css";

const Footer = () => {
  return (
   <>
        <footer >
          <div className="second-footer">
              <div className="second-footer-top">
                <h1>Global Habitat</h1>
                <p> 2nd Floor, Onyx,</p>
                <p>Golf Link Rd, Chevayoor, Kozhikode, Kerala</p>
              </div>
        
            
        
              <div className="second-footer-contacts">
                <div className="second-footer-contact">
                  <div className="icon-circle">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div>
                    <p><span>+91</span> – <strong>99468 30300</strong></p>
                  </div>
                </div>
        
                <div className="second-footer-contact">
                  <div className="icon-circle">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <p>helpdesk.calicut@globalhabitat.co.in</p>
                </div>
              </div>
        
              <hr className="footer-divider" />
        
              <div className="second-footer-bottom">
                <p>Copyright © 2025 Techrootz. All Rights Reserved.</p>
              </div>
          </div>
          <div className="second-footer-end">
     <div className="second-footer-icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
     </div>

      </div>
        </footer>
       
   </>
    
  );
};

export default Footer;
