import React from 'react';
import'./type-videogame.style.css';


const TypeVideogame = (props) => {
    return (
       <div className="type-videogame-container">
          {props.categoryName}
       </div> 
           
    );
}
export default TypeVideogame;     
