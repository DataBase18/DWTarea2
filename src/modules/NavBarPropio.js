import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavigationComponent from './NavigatorItem';


export function NavBarPropio(){
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Tarea 2</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Inicio </Nav.Link>
          <NavigationComponent courses={
            [
              { 
                title: 'Desarrollo Web', 
                description: 'Un curso integral que cubre los fundamentos del desarrollo web, incluyendo HTML, CSS y JavaScript, con un enfoque especial en la creación de aplicaciones interactivas utilizando React.',
                themes: [
                  "Uso de JS",
                  "Uso de React",
                  "Implementación de Bootsrap React"
                ]
              },
              { 
                title: 'Cálculo II', 
                description: 'Un curso avanzado de cálculo que profundiza en técnicas como integrales múltiples, series infinitas y ecuaciones diferenciales, con aplicaciones en ciencias e ingeniería.',
                themes: [
                  "Limites",
                  "Derivadas",
                  "Integrales",
                  "Continuidad",
                  "Solidos de revolución"
                ]
              }
            ]            
          }></NavigationComponent>
          <Nav.Link href="#home">Contacto </Nav.Link> 
        </Nav>
        <Nav className='ms-auto'>
          <Nav.Link href="#home"> GitHub </Nav.Link> 
        </Nav>
      </Container>
    </Navbar>
      );
} 