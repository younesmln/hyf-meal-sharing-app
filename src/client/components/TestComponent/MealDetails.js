import React from 'react';
import { useParams } from 'react-router-dom';
import { useMeal } from './useMeals';

export function MealDetails() {
  const { mealId } = useParams();
  const { isLoading, meal } = useMeal(mealId);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return <div>meal id: {meal.title}</div>;
}
