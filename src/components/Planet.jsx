import React, { useState, useEffect } from "react";
import "./style.css";

const baseUrl = "https://swapi.dev/api/planets/";

const PlanetsDirectory = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Add current page state

  useEffect(() => {
    fetchPlanets(baseUrl);
  }, []);

  const fetchPlanets = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch planets data");
      }
      const data = await response.json();
      setPlanets(data.results);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
      setCurrentPage(getPageNumber(url)); // Update current page number
    } catch (error) {
      console.error(error);
    }
  };

  const handleNextPage = () => {
    if (nextPageUrl) {
      fetchPlanets(nextPageUrl);
    }
  };

  const handlePrevPage = () => {
    if (prevPageUrl) {
      fetchPlanets(prevPageUrl);
    }
  };

  const getPageNumber = (url) => {
    const pageNumber = url.match(/page=(\d+)/);
    return pageNumber ? parseInt(pageNumber[1]) : 1;
  };

  return (
    <div className="planets-directory">
      <h1>Star Wars Planets Directory</h1>
      <div className="planet-list">
        {planets.map((planet) => (
          <div key={planet.name} className="planet-card">
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
            <p>Terrain: {planet.terrain}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={!prevPageUrl}>
          Previous
        </button>
        <span className="page-number">Page {currentPage}</span>{" "}
        {/* Display current page number */}
        <button onClick={handleNextPage} disabled={!nextPageUrl}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PlanetsDirectory;
