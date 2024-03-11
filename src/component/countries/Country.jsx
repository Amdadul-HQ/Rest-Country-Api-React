import { useState } from 'react';
import './countries.css'


export default function Country ({country,handleVisitedCountry}) {
    // console.log(country);
    const {name,flags,capital} =country
    const [visited,setVisited] =useState(false)
    const handleAddToVisit = () => {
        setVisited(!visited)
    }
    return(
        <div className={visited ? `country visited` : 'country'}>
            <h3>Name: {name.common}</h3>
            <img className='flags' src={flags.png} alt="" />
           
            <hr />
            <h4>Capital : {capital}</h4>
            <button onClick={() => {
                handleAddToVisit()
                handleVisitedCountry(country)
            }} >{visited ? 'Visited' : 'Add to Visit'}</button>
            
        </div>
    )
}