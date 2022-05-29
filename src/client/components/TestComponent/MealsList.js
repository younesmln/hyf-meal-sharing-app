import React from 'react';
import { Link } from 'react-router-dom';
import mealsContext from '../../mealsContext';
import { useMeals } from './useMeals';

function MealsList() {
  const { isLoading, meals } = React.useContext(mealsContext);

  const mealsToRender = isLoading
    ? 'not yet'
    : meals.map((aMeal) => {
        return <li key={aMeal.idmeals}><Link to={`/meal/${aMeal.idmeals}`}>{aMeal.title}</Link></li>;
      });

  return (
    <div className="container">
      <p>meals: </p>
      <ul className="list">{mealsToRender}</ul>
    </div>
  );
}

export default MealsList;
