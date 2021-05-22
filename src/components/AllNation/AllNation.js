import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './AllNation.css'

const AllNation = () => {
    const [nations, setNations] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then(response => response.json())
            .then(data => setNations(data))
    }, [])
    return (
        <div className="main">
            {
                nations.map(nation => {
                    const { name, capital, flag } = nation;
                    
                    const handleDetail = () => {
                        console.log("clicked");
                        history.push(`/nation/detail/${name}`)
                    }
                    return (
                        <div className="container">
                            <div className="image">
                                <img src={flag} alt="" />
                            </div>

                            <div className="container-info">
                                <h3>{name}</h3>
                                <p>Capital: {capital}</p>
                                <Button onClick={handleDetail} variant="contained" color="primary">Details</Button>
                            </div>
                        </div>
                    );
                })
            }
        </div>

    );
};

export default AllNation;