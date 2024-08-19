import { Container, Row, Col } from "react-bootstrap"
import './Footer.css'

export default function Footer() {

    return(
        <Container fluid className="footer" >
            <Row className="footerContent" >
                <Col>
                    <p>© 2024 PrayerFull, Inc.</p>
                </Col>
                <Col>
                    <p>Footer</p>
                </Col>
                <Col>
                    <p>Footer</p>
                </Col>
            </Row>
        </Container>
    )
}