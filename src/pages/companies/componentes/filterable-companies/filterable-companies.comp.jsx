import React from 'react';
import './filterable-companies.style.css';
import CompanyTable from './company-table/company-table.com';
import Formvideogame from './forms/formvideogame.comp';
import Formcompany from './forms/formcompany.comp';
const FilterableCompanies = (props) => {
  
    return (
        
        <div className="filterable-companies-container">
  
            <CompanyTable videogameList={props.videogameList}/>
            <Formvideogame  onAddVideogame={props.onAddVideogame}/>
            <Formcompany onAddVideogame={props.onAddVideogame}/>
      </div>
     
    );
}
export default FilterableCompanies;