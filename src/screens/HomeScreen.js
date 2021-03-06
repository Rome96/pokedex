import React, {useState, useEffect, useCallback, useMemo} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { api } from "../api";
import CardPoke from '../components/CardPoke';
import SearchPoke  from '../components/SearchPoke';
import { getPokeAll } from "../redux/actions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const pokeList = useSelector((state) => state.pokeList);
  const [data, setData] = useState([])


  const _getPokeAll = async () => {
    const res = await api.getPokeAll();
    const data = res.results;
    setData(data)
    data.forEach(async ({url}) => {
      // console.log(url)
      getPokeUrl(url)
    });
  };

  const getPokeUrl = async (url) => {
    const res = await api.getPoke(url)
    const id = res.id;
    const pokemon = {
      id: res.id,
      name: res.species.name,
      img: res.sprites.front_shiny,
    };
    dispatch(getPokeAll(pokemon));
    // await getPokeImg(id)
  }

  // const getPokeImg = async (id) => {
  //   // const res = await api.getPokeImg(id)
  //   const res = await fetch(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`)
  //   const rome = {...image, res};
  //   setImage({image, ...rome})
    
  // }

  useEffect(() => {
    if (!pokeList.length) {
      _getPokeAll();
    }
  }, []);

  console.log(pokeList)
  return <>
    <h3>List Pokemon</h3> <hr/><br/>
    {/* <SearchPoke/> */}
    <div className="card-grid">
      {pokeList.map(({ name, img, id }) => (
        <div>
          <CardPoke key={id} img={img} name={name} />
        </div>
      ))}
    </div>
  </>
};

export default HomeScreen;
