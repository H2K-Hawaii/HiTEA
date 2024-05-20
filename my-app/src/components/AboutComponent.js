import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/AboutComponent.css";

const AboutComponent = () => {
    return (
        <Container id="about-container">
            <h2 className="title">ABOUT</h2>
            <Row>
                <Col>
                    <h3>History</h3>
                    <br/>
                    <h4 id="history-summary">
                        Since 2015, HiTEA Cafe has been delighting Honolulu with outstanding boba creations and authentic Asian fare. Our fresh smoothies, teas, and scratch-made meals keep customers coming back. Customize your dream drink and taste our passion for freshness.
                    </h4>
                    <br/>
                    <h4>
                        We look forward to meeting you!
                    </h4>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default AboutComponent;