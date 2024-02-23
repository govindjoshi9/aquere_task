
export const fetchPlanets = async () => {
  const response = await fetch("https://swapi.dev/api/planets/?format=json");
  const data = await response.json();
  return data;
};
