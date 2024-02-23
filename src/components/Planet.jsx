import React, { useState, useEffect } from "react";

const PlanetCard = () => {
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    const fetchPlanet = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/planets/1/");
        if (!response.ok) {
          throw new Error("Failed to fetch planet data");
        }
        const data = await response.json();
        setPlanet(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlanet();
  }, []);

  return (
    <div className="planet-card">
      {planet ? (
        <>
          <h2>{planet.name}</h2>
          <p>Climate: {planet.climate}</p>
          <p>Population: {planet.population}</p>
          <p>Terrain: {planet.terrain}</p>
        </>
      ) : (
        <p>Loading planet data...</p>
      )}
    </div>
  );
};

export default PlanetCard;
