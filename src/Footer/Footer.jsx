import { Container, Row, Col } from "react-bootstrap"
import './Footer.css'

export default function Footer() {

    return(
        <Container fluid className="footer" >
            <div className="innerFooter" > 
                <Row className="footerContent" >
                    <Col xs={6} md={2} className="footerCol">
                        <p>© 2022 PrayerFull, Inc.</p>
                    </Col>
                    <Col xs={6} md={2} className="footerCol">
                        <p>Privacy</p>
                    </Col>
                    <Col xs={6} md={2} className="footerCol">
                        <p>Terms</p>
                    </Col>
                    <Col xs={6} md={2} className="footerCol">
                        <p>Security</p>
                    </Col>
                    <Col xs={6} md={2} className="footerCol">
                        <p>Contact Us</p>
                    </Col>
                    <Col xs={6} md={2} className="footerCol">
                        <p>Do not share my information</p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}