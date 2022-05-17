import React from 'react';
import cities from '../data';
import Card from './Card';



export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return ( 
  <div>
    {
      cities.map(p => <Card name={p.name} max={p.main.temp_max} min={p.main.temp_min} img={p.weather[0].icon}/>)
    }
  </div>
  )
};