import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './PrayerPage.css'

export default function PrayerPage() {

    const navigate = useNavigate()

    function handleButtonClick (path) {
        navigate(path)
    }
    
    return (
        <>
            <Container>
                <Row className="rowe" >
                    <Col className="column" >
                        <Button 
                            variant="dark" 
                            className="bttn"
                            onClick={() => handleButtonClick('/prayer-request')}
                        >
                            Large button
                        </Button>
                    </Col>
                    <Col className="column" >
                        <Button 
                            variant="dark" 
                            className="bttn" 
                            onClick={() => handleButtonClick('/prayer-feed')}
                        >
                            Large button
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}