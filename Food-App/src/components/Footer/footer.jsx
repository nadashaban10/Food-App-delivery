import React from 'react'
import "./footer.css"
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'> 
            <div className='footer-content-left'> 
            <img src={assets.logo} ></img>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquid est quas, nulla ex vitae? Quidem exercitationem atque numquam porro amet doloribus aut iure. Id voluptas voluptate nam quas enim?</p>
            <div className="footer-social-icons">
                <img src= {assets.facebook_icon}></img>
                <img src={assets.twitter_icon}></img>
                <img src={assets.linkedin_icon}></img>
            </div>
            </div>
            <div className='footer-content-center'> 
                <h2>COMAPNY</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>privacy policy</li>
                </ul>
        </div>
        <div className='footer-content-right'> 
            <h2>GET IN  TOUCH</h2>
            <ul>
                <li>Address: 1234 Street Name, City Name, United States</li>
                <li>Phone: +1234567890</li>
                <li>Email:Food-App@tomato.com</li>
                </ul>
            

        </div>
       

        </div>
        <hr />
       <div className='footer-copyright'>
            <p>&copy;July2024 Food App. All rights reserved ❤️</p>
        </div>
    </div>
  )
}

export default Footer
