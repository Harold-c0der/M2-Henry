import React from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import Image from '../a41d84a485d960.png'





export default function SearchBar(props) {
  // acá va tu código
  return (
    <>
  <nav className='form-Container'>
    <div className='from'>
    <span><a href="#s"> <i>By HarolDev</i> </a></span>
    <form>
        <input type="text" autoComplete='off' name='clima' placeholder='Ciudad...'/>
        <button onClick={()=> props.onSearch('Denver')}><FaSearchLocation/></button>
    </form>
    </div>
    <div className='Text'>
      <p> <i> Consulta <br />el clima  desde donde <br /> quieras cuando quieras</i></p>
      <img src={Image} alt="" />
    </div>
  </nav>
  </>
  );
};



