import React from 'react'
import "../styles/footer.css"
import InstagramIcon from "../assets/instagramicon.png";
import TwitterIcon from "../assets/twittericon.png";
import FacebookIcon from "../assets/facebookicon.png";
import LinkedInIcon from "../assets/linkednicon.png";
import Logo from "../assets/CarveNew.jpg"
import { Link } from 'react-router-dom'









function footer() {
  return (
    <div className='footer'>
        <div className='firstSection'>
          <img src={Logo} alt="Instagram Icon" />
          <p>Transforming visions into architectural masterpieces, blending creativity and precision for timeless spaces. Elevating design excellence with a commitment to client-centric innovation.</p>
          <div className='iconimages'>
          <a href="https://www.instagram.com/carve_architect/" target="_blank" rel="noopener noreferrer">
        <img src={InstagramIcon} alt="Instagram" className="icon" />
      </a>
          
          <img src={TwitterIcon} alt="Twitter" className='icon'/>
          <img src={FacebookIcon} alt="Facebook" className='icon'/>
          <img src={LinkedInIcon} alt="Linkedin" className='icon'/>
          </div>
        </div>
        <div className='secondSection'>
          <h4>Quick Links</h4>
          <div className='linkContainer'>
          <Link to="/" className='footerLink'>Home</Link>
          <Link to="/about" className='footerLink'>About</Link>
          <Link to="/projects" className='footerLink'>Projects</Link>
          <Link to="/contact" className='footerLink'>Contact</Link>
          </div>
        </div>
        <div className='thirdSection'>
          <h4>Contact Info</h4>
          <h5>Address:</h5>
          <p>carve architects manjeri kacheripadi</p>
          <h5>Email:</h5>
          <p>carvearchitects@gmail.com</p>
          <h5>Phone:</h5>
          <p>+91 9745700108</p>
        </div>
        <div className='fourthSection'>
          <h4>Newsletter</h4>
          <p>stay connected for latest updates</p>
        </div>
        
    </div>
  )
}

export default footer