


import React from 'react'
import "../styles/footer.css"
import InstagramIcon from "../assets/instagramicon.png";
import TwitterIcon from "../assets/twittericon.png";
import FacebookIcon from "../assets/facebookicon.png";
import LinkedInIcon from "../assets/linkednicon.png";

function footer() {
  return (
    <div className='footer'>
        <div className='topside'> 
        <img src={InstagramIcon} alt="Instagram Icon" />
        <img src={TwitterIcon} alt="Twitter Icon" />
        <img src={FacebookIcon} alt="Facebook Icon" />
        <img src={LinkedInIcon} alt="LinkedInI con" />
        
        
        </div>
        <div className='bottomside'>
            <p>&copy; 2021 carvearchitects.com</p>
        </div>
      
    </div>
  )
}

export default footer
