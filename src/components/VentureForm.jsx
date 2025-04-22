import React from 'react';
// import formImage from './form-side-image.jpg'; // Replace with your image
import '../styles/ventureform.css'
const VentureForm = () => {
  return (
    <div className="form-wrapper">
      <div className="form-card">
        <div className="form-image-container">
          <img src="https://globalhabitat.in/wp-content/uploads/2024/09/palm-springs.jpg" alt="Form visual" className="form-side-image" />
        </div>
        
        <div className="form-content">
          <h2 className="form-title">Contact Information</h2>
          
          <form className="form-fields">
            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="E.g. John Doe" />
            </div>
            
            <div className="input-group">
              <label>Phone</label>
              <input type="tel" placeholder="E.g. +1 300 400 5000" />
            </div>
            
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="E.g. john@doe.com" />
            </div>
            
            <div className="input-group">
              <label>Street Address</label>
              <input type="text" placeholder="E.g. 42 Wallaby Way" />
            </div>
            
            <button type="submit" className="submit-button">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VentureForm;