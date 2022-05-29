import { useState, useEffect } from 'react';
import { getMeals, getMeal } from '../api';

export function useMeals() {
  const {  isLoading, response } = useFetch(getMeals);
  return { isLoading, meals: response }
}


export function useMeal(mealId) {
  const getMealApi = () => getMeal(mealId);
  const {  isLoading, response } = useFetch(getMealApi);
  return { isLoading, meal: response }
}

// fetchFunc parameter has to satisfy 2 conditions:
// - it has to be a function
// - it has to return a promise
function useFetch(fetchFunc) {
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchFunc().then((response) => {
      setResponse(response);
      setIsLoading(false);
    });
  }, []);

  return { isLoading, response }
}