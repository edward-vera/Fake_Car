import React from 'react';
import cars from '../cars.json';
import {useParams} from "react-router-dom";
import '../App.css';
import { Container, Paper, Chip} from '@mui/material'

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const {id} = useParams();

    const car = cars.find((car) => car.id === +id);
    console.log(car);

    return (
      <div className='car-info'>
          <Container>
            <Paper>
                <h2>{car.Name}</h2>
                {/* map through the array and use the Chip
                    component to show all the car's data*/}
                {Object.keys(car).map((key) => {
                    return <Chip label={`${key}: ${car[key]}`}/>
                })
                }
            </Paper>
          </Container>
      </div>
  )
}

export default Car