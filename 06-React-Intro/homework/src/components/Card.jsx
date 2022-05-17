import React from 'react';

export default function Card(props) {
  const URL =  `http://openweathermap.org/img/wn/${props.img}@2x.png`
  // acá va tu código
  return(
    <div id='mycard'>
      <div class='boton'>
        <button class='btn-danger' onClick={props.onClick}>X</button>
      </div>
        <h5>{props.name}</h5>
        <div class='bottom-date'>
          <div class='maxmin'>
        <span>Max</span> 
        <span>Min</span>  
        <span>{props.max}</span> 
        <span>{props.min}</span>
          </div>
        <img src= {URL} alt="" />
        </div>
    </div> 
    ); 
};