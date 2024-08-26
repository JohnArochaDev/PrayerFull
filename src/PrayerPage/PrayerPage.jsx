import { Container, Row, Col, Button } from "react-bootstrap";
import './PrayerPage.css'

export default function PrayerPage() {
    
    return (
        <>
            <Container>
                <Row className="rowe" >
                    <Col className="column" >
                        <Button variant="dark" className="bttn" >
                            Large button
                        </Button>
                    </Col>
                    <Col className="column" >
                        <Button variant="dark" className="bttn" >
                            Large button
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}