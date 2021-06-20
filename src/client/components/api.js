export function getMeals() {
  const promise = fetch('/api/meals').then((response) =>
    response.json()
  );

  return promise;
}
