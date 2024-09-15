
import { NavBarPropio } from "./NavBarPropio";
import {  Container } from 'react-bootstrap';

export function TareaHome(props) {
    return (
        <Container className="mt-4">
            <NavBarPropio />
            <br></br>
            <h1>Desarrollo Web - Tarea 2</h1>
            <p>Esta página corresponde a la Tarea 2 de la materia de Desarrollo Web, donde aprendimos a implementar Bootstrap en un proyecto React. El objetivo principal es mostrar un breve resumen sobre el propósito del sitio web, acompañado de un listado de los cursos disponibles.

Utilizamos componentes de Bootstrap React como el Carrusel para resaltar contenido destacado, el Navbar para facilitar la navegación, y las Cards para mostrar la información de los cursos. El pie de página (Footer) incluye los nombres y carnets de los integrantes del equipo, asegurando una presentación completa y estructurada de la página.</p>
            <br />
            
        </Container>
    );
}
 