import React, { useState, useEffect } from "react";
import "./style.css";
const PlanetCard = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(
          "https://swapi.dev/api/planets/?format=json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch planets data");
        }
        const data = await response.json();
        setPlanets(data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  const fetchResidentData = async (residentUrl) => {
    try {
      const response = await fetch(residentUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch resident data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <div className="planet-container">
      {loading ? (
        <p>Loading planet data...</p>
      ) : (
        planets.map((planet) => (
          <div key={planet.name} className="planet-card">
            <div class="planet-info">
              <h2 class="planet-name">{planet.name}</h2>
              <p>
                <strong>Climate: </strong>
                {planet.climate}
              </p>
              <p>
                <strong>Population: </strong>
                {planet.population}
              </p>
              <p>Terrain: {planet.terrain}</p>
            </div>
            <h3>Residents:</h3>
            {/* <ul>
              {planet.residents.length > 0 ? (
                planet.residents.map(async (residentUrl) => {
                  const residentData = await fetchResidentData(residentUrl);
                  return (
                    <li key={residentData.name}>
                      {residentData ? (
                        <>
                          <p>Name: {residentData.name}</p>
                          <p>Height: {residentData.height}</p>
                          <p>Mass: {residentData.mass}</p>
                          <p>Gender: {residentData.gender}</p>
                        </>
                      ) : (
                        <p>Failed to fetch resident data</p>
                      )}
                    </li>
                  );
                })
              ) : (
                <li>No residents</li>
              )}
            </ul> */}
          </div>
        ))
      )}
    </div>
  );
};

export default PlanetCard;
