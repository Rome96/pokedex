import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { api } from "../api";
import {getPoke} from '../redux/actions'

const SearchPoke = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState('pikachu');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false)
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
      const res = await api.getPoke(input);
      console.log(res)
      // return;
      if (res !== undefined) {
        setLoading(false);
        setErr(false)
        const pokemon = {
          name: res.species.name,
          img: res.sprites.front_shiny,
        };
        dispatch(getPoke(pokemon));
      } else {
        setErr(true)
        setLoading(false);
        setInput('')
        const pokemon = {
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
    </div>
  );
};

export default SearchPoke;