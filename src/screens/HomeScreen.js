import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import CardPoke from '../components/CardPoke';
import SearchPoke  from '../components/SearchPoke';
import { getPoke } from "../redux/actions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const poke = useSelector((state) => state.poke);
  const [image, setImage] = useState({})

  const getPokeAll = async () => {
    const res = await api.getPokeAll();
    const data = res.results;
    data.forEach(async ({url}) => {
      // console.log(url)
      getPokeUrl(url)
    });
  }

  const getPokeUrl = async (url) => {
    const res = await api.getPoke(url)
    const id = res.id;
    const pokemon = {
      id: res.id,
      name: res.species.name,
      img: res.sprites.front_shiny,
    };

    dispatch(getPoke(pokemon));
    // await getPokeImg(id)
  }

  // const getPokeImg = async (id) => {
  //   // const res = await api.getPokeImg(id)
  //   const res = await fetch(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`)
  //   const rome = {...image, res};
  //   setImage({image, ...rome})
    
  // }

  console.log(image);

  useEffect(() => {
    getPokeAll()
  }, [])

  return <>
    <SearchPoke />
    <div className="card-grid">
      {poke.map(({ name, img, id }) => (
        <div>
          <CardPoke key={id} img={img} name={name} />
        </div>
      ))}
    </div>
  </>
};

export default HomeScreen;
