import './countries.css'
export default function Visited ({country,removeVisitedList}) {
    const {name,flags,capital} = country;

    return(
        <div>
            <h3>Name: {name.common}</h3>
            <img className='flags' src={flags.png} alt="" />
           
            <hr />
            <h4>Capital : {capital[0]}</h4>
            <button onClick={() => removeVisitedList(country)}>Remove From Visited list</button>
        </div>
    )
}