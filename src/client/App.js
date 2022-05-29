import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TestComponent from './components/TestComponent/TestComponent';
import MealsList from './components/TestComponent/MealsList';
import { useMeals } from './components/TestComponent/useMeals';
import { MealsProvider } from './mealsContext';
import './App.css'
import { MealDetails } from './components/TestComponent/MealDetails';

function App() {
  const { isLoading, meals } = useMeals();


  const contextValue = { isLoading, meals }

  return (
    <MealsProvider value={contextValue}>
      <Router>
        <Route exact path="/">
          <MealsList />
        </Route>
        <Route exact path="/meal/:mealId">
          <MealDetails />
        </Route>
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
      </Router>
    </MealsProvider>
  );
}

export default App;
