import { useEffect } from "react"
import { useState } from "react"
import Country from "./Country"
import './countries.css'
import Visited from "./Visited"

export default function Countries() {
    const [countries, setCountries] = useState([])

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const[listOfVisitedCountry,setListOfVisitedCountry] = useState([]);

    const handleVisitedCountry = (country) =>{
        console.log(country);
        const newListOfVisitedCountry = [...listOfVisitedCountry,country];
        if(!(listOfVisitedCountry.includes(country))){
            setListOfVisitedCountry(newListOfVisitedCountry)
        }
    }
    const removeVisitedList = (country) =>{
        console.log('click remove visited list');
        console.log(country);
        const filterCountry = listOfVisitedCountry.filter( singleCountry => singleCountry.name.common !== country.name.common)
        setListOfVisitedCountry(filterCountry)
    }

    return(
        <div>
            <div>
                <h1>Country List what i visited</h1>
                <div className="grid">
                {
                    listOfVisitedCountry.map( visitedCountry => <Visited key={visitedCountry.population+visitedCountry.area} country={visitedCountry} removeVisitedList={removeVisitedList}></Visited> )
                }
                </div>
            </div>
            <h3>Countries: {countries.length}</h3>
            <div className="grid">
            {
                countries.map(country => <Country key={country.population+country.area} country ={country} handleVisitedCountry={handleVisitedCountry}></Country>)
            }
            </div>
        </div>
    )
}