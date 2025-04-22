import React from 'react';
import { useNavigate } from 'react-router-dom';
import  '../styles/pagenotfound.css'
const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <>
     <div className="pnf-main-container">
        <div className="pnf-container">
            <h1>Page Not Found</h1>
                <div onClick={()=>{navigate('/')}} className='pnf-back-to-home'>Back to Home <span><i class="fa-solid fa-arrow-right"></i></span></div>
            <div className='pnf-image'>
                <img src="https://assets-v2.lottiefiles.com/a/f0470cd6-117f-11ee-a4ed-1b2d7fb6aaaf/i83iUdPISg.gif" alt="" />
            </div>
        </div>
     </div>
    </>
  );
};

export default PageNotFound;
