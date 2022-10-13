import React from 'react';
import './style.css';

function Footer(){
    return(
        
        <div className='introduction'>
            
            {/* <div className='intoduction'>
            <h2>Contact us on the following social media platforms</h2>
            </div> */}
            <div className='Socials'>
            <div className='Linkedin'>
            <h2>Contact us on the following social media platforms</h2>
            <div className='paragraph'>
            <p>Get in touch with us. We are looking forward to getting your feedback.<br>Feel free to give your feedback after interacting with our product.</br> </p>
            </div>
            <i className="fa-brands fa-linkedin-in"></i>     
                   <p>StawiBrood</p>
            </div>
            <div className='Facebook'>
            <i className="fa-brands fa-facebook-f"></i>
            <p>StawiBrood</p>            </div>
            <div className='Twitter'>
            <i className="fa-brands fa-twitter"></i> 
            
            <p>@StawiBrood</p>    
            </div>
            </div>
            {/* <div className='information'>
            <p >Keep in touch with us , feel free to give feedback <br>on your experience while interacting with our</br>
            product.</p> */}

            {/* </div> */}
            
        </div>

    );

}
export default Footer;







// function Navbar() {
//     return (
//       <div>
//         <nav>
//           <Link to="main" className="logo">
//             <img src={stawibrood} alt="logo" />
//           </Link>
//           <input className="menu-btn" type='check-box' id='menu-btn'/>
//           <label className="menu-icon" for='menu-btn'></label>
//           <span className="nav-icon"></span>
//           <ul>
//               <li> <Link to="main" className="active">Home</Link> </li>
//               <li> <Link to="main" className="active"></Link> </li>
//               <li> <Link to="main" className="active"></Link> </li>
//               <li> <Link to="main" className="active"></Link> </li>
//               <li> <Link to="main" className="active"></Link> </li>
//               <li> <Link to="main" className="active"></Link> </li>
  
  
//           </ul>
//         </nav>
//       </div>
//     );
//   }
//   export default Navbar;
  