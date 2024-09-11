
import { NavBarPropio } from "./NavBarPropio";
import { Card, Container, Col } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

export function CoursesScreen(){
    const location = useLocation();
    const courses = location.state?.courses ?? [];

    const navigator = useNavigate();
    const goToCourse = (courseInfo) => { 
        navigator("/CourseInfo", { state: {courseInfo} });
    };

    return (
        <Container className="mt-4">
            <NavBarPropio />
            <br></br>
            <h1>Cursos</h1>
            <Col   ms={4} className="mb-4">
                {courses.map((course, index) => ( 
                        <Card onClick={() => goToCourse(
                            {
                                title: course.title,
                                description: course.description, 
                                themes: [
                                    "Item a",
                                    "Item b"
                                ]
                            }
                        )} key={index} className="mb-4 cursor-pointer">
                            <Card.Body className="mb-4 cursor-pointer">
                                <Card.Title>{course.title}</Card.Title>
                                <Card.Text>{course.description}</Card.Text>
                            </Card.Body>
                        </Card> 
                ))}
            </Col>
            
        </Container> 
    );
}