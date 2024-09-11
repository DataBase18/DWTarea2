import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { NavBarPropio } from "./NavBarPropio";


export function CourseInfo(){

    const location  = useLocation();
    const courseInfo = location.state?.courseInfo ?? {};
    return(
        <Container>
            <NavBarPropio></NavBarPropio>
            <h1>{courseInfo.title}</h1>
        </Container>
    );
}