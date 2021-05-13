import React from 'react';
import'./company-table.style.css';
import TypeVideogame from './type-videogame/type-videogame.comp';
import Videogame from './videogame/videogame.comp';


const CompanyTable = (props) => {
    
 return (
             <table className="company-table-container">
      
                 <div>
             {props.videogameList.map((typevideogames,index) =>{
               return(
                <div key={(typevideogames.id)}>
                
              <TypeVideogame categoryName={typevideogames.name}/>
     <div className="lis1">Video-Game    Average      Company</div>
           {(typevideogames.videogames).map((datos, indexProduct)=>{
                   return(
                      <div>
                    <Videogame
                    key={datos.id} 
                    datos={datos}/>
                  </div>
                 );
                })}
                </div>
                );
              })}
              </div>
            </table>
         );

}
export default CompanyTable;