import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './detail.css'

const Detail = () => {
    const { name } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(response => response.json())
            .then(data => setDetails(data))
    }, [name])
    return (
        <>
            {
                details.map(detail => {
                    const { name, capital, flag, population, region} = detail;
                    return (
                        <div className="detail-container">
                            <div className="detail-image">
                                <img src={flag} alt="" />
                            </div>
                            <div className="container-info">
                                <h3>{name}</h3>
                                <p>Capital: {capital}</p>
                                <p>Population: {population}</p>
                                <p>Region: {region}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default Detail;