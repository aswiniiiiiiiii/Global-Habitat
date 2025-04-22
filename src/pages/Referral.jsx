import React from 'react'
import Header from '../components/header/Header'
import '../styles/referral.css'
import ReferralForm from '../components/ReferralForm'
import ContactCard from '../components/ContactCard'
import SecondFooter from "../components/footer/SecondFooter";
import MapSection from '../components/MapSection'

const Referral = () => {
  return (
    <div>
      <Header/>
      <div>
        {/* refrral heading */}
       <div className='refrerral-logo-container'>
          <div className="referral-logo">
            <img src={"logo-global-habitat.png"} alt="" />
          </div>
       </div>
       {/* refferal text part */}
        <div className='referral-text'>
          <h1>Referral Benefits</h1>
          <div className='referrral-para'>
            <p>WE HAVE SPECIALLY DESIGNED AMAZING BENEFITS FOR GLOBAL HABITAT RESIDENTS. DO REFER YOUR FRIENDS FAMILY TO GLOBAL HABITAT AND EXPERIENCE THE LIFE OF LUXURY WITH AN ARRAY OF PREMIUM BRANDS.</p></div>
        </div>
        {/* referral form */}
        <ReferralForm/>
        {/* contact card */}
        <div className='referral-conatc-info'>
          <ContactCard/>
        </div>
        {/* map */}
        <MapSection/>
        {/* footer */}
        <SecondFooter/>
      </div>
    </div>
  )
}

export default Referral
