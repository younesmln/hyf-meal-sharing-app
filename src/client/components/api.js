export function getMeals() {
  const promise = fetch('/api/meals').then((response) =>
    response.json()
  );

  return promise;
}


export function getMeal(mealId) {
  const promise = fetch(`/api/meals/${mealId}`).then((response) =>
    response.json()
  );

  return promise;
}