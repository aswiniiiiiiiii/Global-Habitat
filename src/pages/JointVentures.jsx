import React from 'react'
import Header from '../components/header/Header'
import '../styles/jointventures.css'
import VentureForm from '../components/VentureForm'
import ContactCard from '../components/ContactCard'
import SecondFooter from "../components/footer/SecondFooter";
import MapSection from '../components/MapSection'

const JointVentures = () => {
  return (
    <div>
      <Header/>
      {/* venture headinging */}
      <div className='joint-logo-container'>
          <div className="joint-logo">
            <img src={"logo-global-habitat.png"} alt="" />
          </div>
       </div>
       {/* venture text part */}
       <div className='joint-text'>
          <h1>Joint Ventures (JV)</h1>
          <div className='joint-para'>
            <p>GLOBAL HABITAT IS ALWAYS OPEN FOR NEW BUSINESS OPPORTUNITIES AND WE WELCOME LAND OWNERS FOR JOINT VENTURE DEVELOPMENTS</p></div>
           
        </div>
         {/* form */}
        <VentureForm/>
            {/* contact us */}
            <ContactCard/>
            {/* map */}
            <MapSection/>
            {/* footer */}
            <SecondFooter/>
    </div>
  )
}

export default JointVentures
