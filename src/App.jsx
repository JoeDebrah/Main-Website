import NavBar from "./components/NavBar";
import LandingSection from "./components/LandingSection";
import ProjectSection from "./components/ProjectSection";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import "./App.css";
import Container from "react-bootstrap/Container";

function App() {
  // 
  return (
    <div className="app">
      <Container style={{ width: '80%' }} fluid="md" className="bg-white">
        <NavBar />
        <LandingSection />
        <ProjectSection />
        <ContactMe />
        <Footer />
      </Container>
    </div>
  )
}

export default App
