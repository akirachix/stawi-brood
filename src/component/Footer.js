import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

// import {Container} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{faFacebook, faTwitter ,faInstagram,faLinkedin, faTiktok ,faYoutube} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
      <div className="footer">



    <div id="contact">
      <h1>Contact us</h1>

      <p> Get in touch. We are looking forward to hearing from you.</p>
      <p>You can now contact us when you visit our social media handles.</p>
      <p>We excel at the satisfaction of our customers.</p>
    
      </div>

              <div className="social-media-icons">
                  <a href="https://facebook.com">
                  {/* <p>StawiBrood</p>  */}
                      <FontAwesomeIcon className="icon" icon={faFacebook}/>
                  </a>
                  
                  <a href="https://twitter.com">
                      <FontAwesomeIcon className="icontwo" icon={faTwitter}/>

                  </a>
                  <a href="https://instagram.com">
                      <FontAwesomeIcon className="iconthree" icon={faInstagram}/>

                  </a>
                  {/* <p>Stawi_Brood</p>  */}

                  <a href="https://tiktok.com">
                      <FontAwesomeIcon className="iconfour" icon={faTiktok}/>

                  </a>
                  {/* <p>@StawiBrood</p>  */}

                  <a href="https://youtube.com">
                      <FontAwesomeIcon className="iconfive" icon={faYoutube}/>

                  </a>
                  {/* <p>StawiBrood</p>  */}

              </div>
    
    </div>
    
  );
}

export default Footer;
