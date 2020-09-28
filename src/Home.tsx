import React, { useEffect, useState } from 'react';
import { getPopularDrinks } from './api';
import { Drink } from './types';

function Home() {
  const [drinks, setDrinks] = useState<Drink[] | undefined>();

  useEffect(() => {
    getPopularDrinks().then(popularDrinks => setDrinks(popularDrinks.drinks));
  }, [])

  return <div>
    {drinks && drinks.map(drink => drink.strDrink)}
  </div>;
};

export default Home;
