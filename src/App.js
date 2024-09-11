import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TareaHome } from './modules/Home';
import { CoursesScreen } from './modules/CoursesScreen';
import { CourseInfo } from './modules/CourseInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TareaHome />} /> 
        <Route path="/CoursesScreen" element={<CoursesScreen />} /> 
        <Route path="/CourseInfo" element={<CourseInfo />} /> 
      </Routes>
    </Router>
  );
}

export default App;
  