import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function LandingSection() {
    return (
        <Container id='home' className='mt-5 mb-5 pt-5 pb-5'>
            <Row className='mt-5 mb-5 pt-5 pb-5'>

                <Col xs={6} md={4} className='mx-auto mb-5 mt-5'>
                    <Image className='mx-auto d-block mb-4' width={150} height={150} src="https://media.licdn.com/dms/image/D4E35AQHv-FHuER5fJA/profile-framedphoto-shrink_400_400/0/1693350769983?e=1695308400&v=beta&t=9b-1fhQFWDOoy7zlTf69BXTdQioskJG-LsU4IIBxKbw" roundedCircle />
                    <div className='text-center text-dark'>
                        <h5>Hello there, I'm Joe</h5>
                        <h2>A Junior Front-End Developer Specialized In React</h2>
                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default LandingSection;