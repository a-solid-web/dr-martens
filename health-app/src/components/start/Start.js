import React from "react"; 
import HeroSection from '../HeroSection/HeroSection';
import {Container, Button, Row} from "react-bootstrap";


const Start = () => {
    return (
        <Container>
            <HeroSection/> 
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Row>
                    <h1>
                        Send me your X-Ray Data!
                    </h1>
                </Row>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> 
                <Row>
                    <Button variant="primary">Give Permission</Button>
                </Row>
            </div>
        </Container>
    )
}

export default Start; 