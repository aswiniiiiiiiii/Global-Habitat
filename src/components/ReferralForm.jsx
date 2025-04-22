import React from 'react';
import '../styles/referralform.css';
// import formImage from './form-image.jpg'; // Replace with your image path

const ReferralForm = () => {
  return (
    <div className="form-container">
      <div className="form-image">
        <img src="https://globalhabitat.in/wp-content/uploads/2024/09/real-estate-market-conceptual-image-scaled.jpg" alt="Decorative background" />
      </div>
      
      <div className="form-content">
        <h2>Customer Information</h2>
        
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="E.g. John Doe" />
          </div>
          
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="E.g. +1 300 400 5000" />
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="E.g. john@doe.com" />
          </div>
          
          <h3>References Info</h3>
          
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="E.g. John Doe" />
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="E.g. john@doe.com" />
          </div>
          
          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="E.g. +1 300 400 5000" />
          </div>
          
          <div className="form-group">
            <label>Preferred Project</label>
            <select>
              <option>Misty Hills</option>
              <option>Project 2</option>
              <option>Project 3</option>
            </select>
          </div>
          
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default ReferralForm;