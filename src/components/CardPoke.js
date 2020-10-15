import React from 'react'
import { useSelector } from "react-redux";

const CardPoke = () => {
  const {name, img} = useSelector((state) => state.poke);
  return (
    <div className="card animate__animated animate__backInDown animate__delay-6s">
      <h2>{name}</h2>
      <img src={img} className='avatar animate__animated animate__backInDown animate__delay-6s' />
    </div>
  );
};

export default CardPoke;
