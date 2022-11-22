import React from 'react';
import cars from '../cars.json';
import {useParams} from "react-router-dom";
import '../App.css';
import { Card, CardContent, CardActions, Divider } from '@mui/material'

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const {id} = useParams();

    const car = cars.find((car) => car.id === +id);
    console.log(car);

    return (
        <div className='car-info'>
            <Card className="card-info">
                <CardContent className='car-card'>
                    <div>
                        <h1>{car.Name}</h1>
                    </div>
                    <div>
                        <p>Id: {car.id}</p>
                        <p>Name: {car.Name}</p>
                        <p>Miles_per_Gallon: {car.Miles_per_Gallon}</p>
                        <p>Cylinders: {car.Cylinders}</p>
                        <p>Displacement: {car.Displacement}</p>
                        <p>Horsepower: {car.Horsepower}</p>
                        <p>Weight: {car.Weight_in_lbs}</p>
                        <p>Acceleration: {car.Acceleration}</p>
                        <p>Year: {car.Year}</p>
                        <p>Origin: {car.Origin}</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Car