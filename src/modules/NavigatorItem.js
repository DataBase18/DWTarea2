
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavigationComponent(props) {
  const navigate = useNavigate();  
  const courses = props.courses;
  const goToCourses = () => {
    navigate('/CoursesScreen', { state: { courses } });
  };

  return (
    <Nav.Link onClick={()=>goToCourses()}>Cursos</Nav.Link>
  );
}

export default NavigationComponent;
