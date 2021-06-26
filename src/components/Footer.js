import React from 'react'
import Button from 'react-bootstrap/Button'
import Logo from '../assests/logo.svg'
import Facebook from '../assests/icon-facebook.svg'
import Twitter from '../assests/icon-twitter.svg'
import Pinterset from '../assests/icon-pinterest.svg'
import Instagram from '../assests/icon-instagram.svg'
function Footer() {
    return (
        <footer>
        <div className='d-flex flex-column justify-content-center align-items-center' style={{backgroundColor:'#3A3053', paddingTop:'2rem',paddingBottom:'2rem'}}>
        <h4 style={{color:'white',fontWeight:'500',paddingBottom:'1rem'}}>Boost your links today</h4>
           <Button variant="default"
        style={{ color: "white", background: "#2acfcf" , borderRadius:'40px'}}
       >Get Started</Button>
        </div>
        <div className='d-flex justify-content-between' style={{backgroundColor:'#232027',color:'white',paddingTop:'2rem'}}>
            <div>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='d-flex'>
                <div>
                    <ul>
                        <li>Features</li>
                        <li>Link Shortening</li>
                        <li>Branded Links</li> 
                        <li>Analytics</li>
                  
                    </ul>
                   

                </div>
                <div>
                    <ul>
                        <li>Resources</li>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                  
                </div>
                <div>
                    <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Our Team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center'>
                <img src={Facebook} alt='facebook'/>
                <img src={Twitter} alt='twitter'/>
                <img src={Pinterset} alt='pinterest'/>
                <img src={Instagram} alt='instagram'/>

            </div>
        </div>
        </footer>
       
          
    )
}

export default Footer
