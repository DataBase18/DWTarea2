import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { NavBarPropio } from "./NavBarPropio";
import {TableCourse} from "./TableCourse";

export function CourseInfo(){

    const location  = useLocation();
    const courseInfo = location.state?.courseInfo ?? {}; 
    return(
        <Container>
            <NavBarPropio></NavBarPropio>
            <h1>{courseInfo.title}</h1>
            <br></br>
            <p>{courseInfo.description}</p>
            <br></br>
            <TableCourse themes={courseInfo.themes}></TableCourse>
        </Container>
    );
}