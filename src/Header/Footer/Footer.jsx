import { Container, Row, Col } from "react-bootstrap"
import './Footer.css'

export default function Footer() {

    return(
        <Container fluid className="footer" >
            <div className="innerFooter" > 
                <Row className="footerContent" >
                    <Col xs={6} md={2} className="footerCol">
                        <a href="" className="links" >© 2022 PrayerFull, Inc.</a>
                    </Col>
                    <Col xs={6} md={2} className="footerCol">
                        <a href="" className="links" >Privacy</a>
                    </Col>
                    <Col xs={6} md={2} className="footerCol">
                        <a href="" className="links" >Terms</a>
                    </Col>
                    <Col xs={6} md={2} className="footerCol">
                        <a href="" className="links" >Security</a>
                    </Col>
                    <Col xs={6} md={2} className="footerCol">
                        <a href="" className="links" >Contact Us</a>
                    </Col>
                    <Col xs={6} md={2} className="footerCol">
                        <a href="" className="links" >Do not share my information</a>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}