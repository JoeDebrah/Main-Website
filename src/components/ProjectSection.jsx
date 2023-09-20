import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Nav } from 'react-bootstrap';

function ProjectSection() {
    return (
        // <Container className='mx-5' style={{ backgroundColor: 'orange' }}>
        <div id='project'>
            <h3 className='text-center text-dark'>My Featured Portfolio Projects</h3>
            <Row xs={1} md={2} className="g-4 px-5 mt-3 mb-3 pb-5">

                <Col className='px-3'>
                    <Card>
                    <Nav>
                            <Nav.Link href='https://github.com/JoeDebrah/React-DataFetch-Project'>
                                <Card.Img variant="top" src="https://raw.githubusercontent.com/JoeDebrah/React-DataFetch-Project/main/preview_screenshots/DataFetch.png" />
                            </Nav.Link>
                        </Nav>
                        <Card.Body>
                            <Card.Title>Data Fetch Website</Card.Title>
                            <Card.Text>
                                🛠️ This is an interesting project i built with the help of the resources available of the React.dev website. It is a simple website to display a bunch of users fetched from an external dummy api and was largely built with React.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='px-3'>
                    <Card>
                       <Nav>
                            <Nav.Link href='https://github.com/JoeDebrah/Bootstrap-Website-Project'>
                                <Card.Img variant="top" src="https://github.com/JoeDebrah/Main-Website/blob/main/src/assets/bootstrap-site-image.png?raw=true" />
                            </Nav.Link>
                        </Nav>
                        <Card.Body>
                            <Card.Title>Order An E-Book Online</Card.Title>
                            <Card.Text>
                                🛠️ This is an interesting project i built with the help of the resources available of the bootstrap website and @Net Ninja on Youtube. It is a simple website to order a published E-book and was largely built with bootstrap.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='px-3'>
                    <Card>
                        <Nav>
                            <Nav.Link href='https://github.com/JoeDebrah/React-Hook-Form-Project'>                                
                        <Card.Img variant="top" src="https://github.com/JoeDebrah/Main-Website/blob/main/src/assets/login-initial.png?raw=true" />
                            </Nav.Link>
                        </Nav>
                        <Card.Body>
                            <Card.Title>React-Hook-Form</Card.Title>
                            <Card.Text>
                                🛠️ This is an interesting project i built with the help of the resources available of the react-hook-form website. It is a simple website to mimic a user login portal/page and was largely built with react-hook-form. Zod validation will be implemented in the future.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='px-3'>
                    <Card>
                        <Nav>
                            <Nav.Link href='https://github.com/JoeDebrah/Next.js-Tickets-Page-Project'>
                                <Card.Img variant="top" src="https://raw.githubusercontent.com/JoeDebrah/Main-Website/main/src/assets/Home-Page.png" />
                            </Nav.Link>
                        </Nav>
                        <Card.Body>
                            <Card.Title>Tickets Page</Card.Title>
                            <Card.Text>
                                🛠️ This is an interesting project i built with the help of the resources avilable of the Next.js website. It is a simple ebsite to request assistance by creating tickets. You can also add a severity to your tickets. This was largely built with Next.js and styled with tailwind.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
        // </Container>
    );
}

export default ProjectSection;
