import React from 'react'
import CardPoke from '../components/CardPoke';
import SearchPoke  from '../components/SearchPoke';

const HomeScreen = () => {
  return (
    <div className='container'>
      <SearchPoke/>
      <CardPoke />
    </div>
  );
};

export default HomeScreen;
