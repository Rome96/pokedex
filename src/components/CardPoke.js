import React, {useState} from 'react'
import { useSelector } from 'react-redux';


const CardPoke = ({name, img}) => {

  return (
    <div className="card  animate__animated animate__backInDown animate__delay-6s">
      <h4>{name}</h4>
      <img
        src={img}
        className="animate__animated animate__backInDown animate__delay-6s"
      />
    </div>
  );
};

export default CardPoke;
