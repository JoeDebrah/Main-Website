import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Linkedin from "../assets/linkedin.svg";
import Github from "../assets/github.svg";

function NavBar() {
    return (
        <>
            <Navbar className='sticky-top' bg="light" data-bs-theme="light">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="https://www.linkedin.com/in/joe-debrah-953972264/"> <Image width={35} src={Linkedin} rounded /> LinkedIn</Nav.Link>
                        <Nav.Link className='mx-5' href="https://github.com/JoeDebrah"><Image width={35} src={Github} rounded /> GitHub</Nav.Link>

                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href="#project">Portfolio Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact Me</Nav.Link>

                    </Nav>



                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;