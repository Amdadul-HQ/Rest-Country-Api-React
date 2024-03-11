import { useEffect, useState } from 'react';
import './countries.css'


export default function Country ({country,handleVisitedCountry,visitedlist}) {
    // console.log(country);
    // console.log(visitedlist);
    const {name,flags,capital} =country
    const isAvaliabe = visitedlist.find( list => list.name.common === name.common)
    console.log(isAvaliabe);
    const [visited,setVisited] =useState(false)
    console.log(visited);
    const handleAddToVisit = () => {
        setVisited(!visited)
    }
    useEffect( ( ) => {
        setVisited(isAvaliabe === undefined ? false : true)
    },[] )
    return(
        <div className={isAvaliabe ? `country visited` : 'country'}>
            <h3>Name: {name.common}</h3>
            <img className='flags' src={flags.png} alt="" />
           
            <hr />
            <h4>Capital : {capital}</h4>
            <button onClick={() => {
                handleAddToVisit();
                handleVisitedCountry(country);
            }} >{isAvaliabe ? 'Visited' : 'Add to Visit'}</button>
            
        </div>
    )
}