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
        <h6 style={{color:'white',fontWeight:'500',paddingBottom:'1rem'}}>Boost your links today</h6>
           <Button variant="default"
        style={{ color: "white", background: "#2acfcf" , borderRadius:'40px'}}
       >Get Started</Button>
        </div>
        <div className='d-flex justify-content-between' style={{backgroundColor:'#232027',color:'white',paddingTop:'2rem'}}>
            <div>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='d-flex'>
                <div >
                    <p>Features</p>
                    <p>Link Shortening</p>
                    <p>Branded Links</p>
                    <p>Analytics</p>

                </div>
                <div>
                    <p>Resources</p>
                    <p>Blog</p>
                    <p>Developers</p>
                    <p>Support</p>
                </div>
                <div>
                    <p>Company</p>
                    <p>About</p>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className='d-flex'>
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
