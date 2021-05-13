import React from 'react';
import'./videogame.style.css';

const Videogame = (props) => {
    return (
        <table className="videogame-container">
            
            <tr>
       <td className="izq">{props.datos.name}</td>
       <td className="center">{props.datos.average}</td>
       <td className="derecha">{props.datos.company}</td>
   </tr> 
         
        
         
        </table>
    
 );
}
export default Videogame ;  