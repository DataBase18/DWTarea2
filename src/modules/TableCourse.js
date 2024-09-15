

import Table from 'react-bootstrap/Table';

export function TableCourse(props) {

    console.log(props.themes);
  return (
    <Table striped bordered hover>
      <thead>
        <tr> 
          <th>No #</th>
          <th>Descripción</th> 
        </tr>
      </thead>
      <tbody>
        {
            props.themes.map((theme, index) => (
                
                <tr key={index}> 
                    <td>{(index+1)}</td>
                    <td>{theme}</td>
                </tr>
                
            ))
        }
      </tbody> 
    </Table>
  );
} 