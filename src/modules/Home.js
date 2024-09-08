
import { CursoItem } from "./CursoItem"
import { NavBarPropio } from "./NavBarPropio"

export function TareaHome(props){
    return ( 
        <div className="center"> 
            <NavBarPropio></NavBarPropio>
            <h1>Desarrollo Web - Tarea 2</h1>
            <p>Este documento presenta la implementacio0n e bootstrap con React</p>
            <br> 
            </br>
            <ul>
                {props.courses.map((course, index) => (
                    <li>{course}</li>
                ))}
            </ul>
        </div> 
    )
} 