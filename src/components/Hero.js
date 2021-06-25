import React from 'react'
import Working from '../assests/illustration-working.svg'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Container, Row , Col} from 'react-bootstrap'
function Hero() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 style={{fontWeight:'900'}}>More than just shorter links</h1>
                    <p style={{color:'grey'}}>Build your brand's recognition and get detailed insights on how your links are performing</p>
                    
                    <Button variant="default" style={{ color: "white", background: "#2acfcf" , borderRadius:'40px'}}>
                    Get Started</Button>
                </Col>
                <Col>
                    <Image src ={Working} alt='working' fluid/>
                </Col>
            </Row>
            
           
           
          
        </Container>
    )
}

export default Hero
