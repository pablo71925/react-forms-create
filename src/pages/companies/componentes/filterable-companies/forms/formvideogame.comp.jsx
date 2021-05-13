import React, { useState } from 'react';
import './formvideogame.style.css'

const Formvideogame = (props) => {
  
    const [typevideogames, setTypeVideogame] = useState('');
    const [name, setName] = useState('');
    const [average, setAverage] = useState(0);
    const addVideogame = (event) => {
        event.preventDefault();


        const newVideogame = {
            id: name,
            name: name,
            average: Number(average),
           };
           props.onAddVideogame(newVideogame,typevideogames);
       
     
        console.log('typevideogames ' + typevideogames);
        console.log('name ' + name);
        console.log('average ' + average);
    }
    return (
        <table className="form-videogame-container">
        <div >
       <th> Video-Games Rating </th>
        <form>
     
      
       <tr>
               <td>
             Type Video-Game <select value={typevideogames} onChange={(event)=>{
                   setTypeVideogame(event.target.value);
                    }}
       >
              <option value="t1">News</option>
              <option value="t2">Trends</option> 
              <option value="t3">Bests</option> 
       </select>
               </td>

       </tr>
                 
       <tr>
               <td>
                  Video-Game <input type="text"
                    value={name}
                    onChange={(event)=>{
                      setName(event.target.value);
                    }}
                   />
               </td>
       </tr>

           
 <tr>
       <td>
            Average <input type="number"  value={average} onChange={(event)=>{
                      setAverage(event.target.value);
                    }}
                   />
               </td>
       </tr>
           
          
     
          
           <tr>
                <td>
                     <button
                     onClick={addVideogame}
                     >
                         Añadir Videogame
                     </button>
               </td>
           </tr>
           </form>
    </div>
    </table>
);
    
}
export default Formvideogame;