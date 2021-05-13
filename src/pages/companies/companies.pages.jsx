import React, {useState} from 'react';
 import FilterableCompanies from './componentes/filterable-companies/filterable-companies.comp';
 
const CompaniesPages = () => {
  let videogameList = [
    {   
        
        id:"t1",
        name:'News',
      
        videogames:[
            {              
                id:"t1v1",
                name:"Splinter Cell",
                average:'4.8',
                company: 'Ubisoft',
              
            },
            {
                id:"t1v2",
                name:"GTA VI",
                average:'4.9',
                company : 'RockStar',
            },
            {
                id:"t1v3",
                name:"Pes 2022",
                average:'4.6',
                company : 'Konami',
            },
            {
                id:"t1v4",
                name:"Assasins Creed",
                average:'4.7',
                company : 'Ubisoft',
            },
            {
                id:"t1v5",
                name:"Resident Evil",
                average:'4.4',
                company : 'Capcom',
            }
        ]
    },
    {
     
        id:"t2",
        name:'Trends',

        videogames:[
            {
                id:"t2v1",
                name:"Halo Infinite",
                average:'4.9',
                company : 'Microsoft',
            },
            {
                id:"t2v2",
                name:"Fortnite",
                average:'4.5',
                company : 'Epic Games',
            },
            {
                id:"t2v3",
                name:"Metal Gear",
                average:'4.4',
                company : 'Konami',
            },
            {
                id:"t2v4",
                name:"Call Of Duty",
                average:'4.6',
                company : 'Infinite Ward',
            },
            {
                id:"t2v5",
                name:"Battlefield V",
                average:'4.3',
                company : 'Electronic Arts',
            }
        ]
    },
    {
      
        id:"t3",
        name:'Best',

        videogames:[
            {
                id:"t3v1",
                name:"God of War",
                average:'5.0',
                company : 'Sony',
            },
            {
                id:"t3v2",
                name:"Black",
                average:'5.0',
                company : 'Criterion Games',
            },
            {
                id:"t3v3",
                name:"Gta San Andreas",
                average:'4.9',
                company : 'Rockstar',
            },
            {
                id:"t3v4",
                name:"Pac-Man",
                average:'5.0',
                company : 'Namco',
            },
            {
                id:"t3v5",
                name:"Mario Bros",
                average:'5.0',
                company : 'Nintendo',
            }
        ]
    }
   
];
const [videogames, setVideogames] = useState (videogameList);  
return (
    
    <div>
         <> 
         <FilterableCompanies
           videogameList={videogames}

           onAddVideogame={(newVideogamesObj, TypeId)=>{
     
               const newVideogames = [];
               for(let i=0; i<videogames.length; i++){
                   if(videogames[i].id !== TypeId){
                      newVideogames.push(videogames[i]);
                   }
                   else{
                      newVideogames.push(
                          {
                              ...videogames[i],
                              videogames:[...videogames[i].videogames, newVideogamesObj]
                          }
                          );
                   }
               }
             
               setVideogames(newVideogames);
               console.log(newVideogames);
            
           }}
       
        
         /> 
         </>
   <div />
       
    </div>
      );
}
export default CompaniesPages;