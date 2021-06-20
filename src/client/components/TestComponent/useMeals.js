import React from 'react';
import { getMeals } from '../api';

export function useMeals() {
    const [meals, setMeals] = React.useState();
    const [isLoading, setIsLoading] = React.useState(true);
  
    React.useEffect(() => {
      setIsLoading(true);
      getMeals().then((response) => {
        setMeals(response);
        setIsLoading(false);
      });
    }, []);

    return { isLoading, meals }
}