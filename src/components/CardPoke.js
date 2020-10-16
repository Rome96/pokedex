import React, {useState} from 'react'
import { useSelector } from 'react-redux';


const CardPoke = ({name, img}) => {
  return (
    <div className="card  animate__animated animate__bounceInDown">
      <h4>{name}</h4>
      <img src={img}/>
    </div>
  );
};

export default CardPoke;
