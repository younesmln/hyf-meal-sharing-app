import React from 'react';
import mealsContext from '../../mealsContext';
import { useMeals } from './useMeals';

function MealsList() {
  const { isLoading, meals } = React.useContext(mealsContext);

  const mealsToRender = isLoading
    ? 'not yet'
    : meals.map((aMeal) => {
        return <li key={aMeal.idmeals}>{aMeal.title}</li>;
      });

  return (
    <div>
      <p>meals: </p>
      <ul>{mealsToRender}</ul>
    </div>
  );
}

export default MealsList;
