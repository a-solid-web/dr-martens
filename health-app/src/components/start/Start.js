import React, { Component } from "react"; 
import HeroSection from '../HeroSection/HeroSection';
import ModalNotificationView from '../ModalNotification/ModalNotificationView';
import {Container, Button, Row} from "react-bootstrap";


class Start extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modalShow: false
        };
      }    

    render() {

        let toggleModal = () => this.setState({ modalShow: !this.state.modalShow });

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
                        <Button variant="primary" onClick={toggleModal}>Give Permission</Button>
                    </Row>
                </div>
                <ModalNotificationView
                    show={this.state.modalShow}
                    onHide={toggleModal}
                />
            </Container>
        )
    }
    
}

export default Start; 