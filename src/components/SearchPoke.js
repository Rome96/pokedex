import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import CardPoke from "./CardPoke";
import {getPoke} from '../redux/actions'

const SearchPoke = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('pikachu');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false)
  const {name, img} = useSelector(state => state.poke)

  const handleInputChange = (e) => {
    setErr(false)
    const texInput = e.target.value;
    setInput(texInput);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    if (input.trim() === '') {
      return;
    } {
      const res = await api.getPokeName(input);
      if (res !== undefined) {
        setLoading(false);
        setErr(false)
        const pokemon = {
          id: res.id,
          name: res.species.name,
          img: res.sprites.front_shiny,
        };
        dispatch(getPoke(pokemon));
      } else {
        setErr(true)
        setLoading(false);
        setInput('')
        const pokemon = {
          id: '',
          name: '',
          img: '',
        };
        dispatch(getPoke(pokemon));
      }
    }
  };

  return (
    <div>
      <p className="err">{err && "Se ha producido un error, vuelva a intentarlo!"}</p><br/>
      <form>
        <input
          type="value"
          placeholder="Search Pokemon..."
          value={input}
          onChange={handleInputChange}
        />
        <button className='btn-search' onClick={handleSubmit}>Search</button>
      </form>

      <CardPoke
        name={name}
        img={img}
      />
    </div>
  );
};

export default SearchPoke;