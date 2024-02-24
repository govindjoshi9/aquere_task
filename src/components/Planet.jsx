import React, { useState, useEffect } from "react";
import "./style.css";
import Resident from "./Resident";

const baseUrl = "https://swapi.dev/api/planets/";

const PlanetsDirectory = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // Add current page state
  const [selectedPlanetResidents, setSelectedPlanetResidents] = useState([]);

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

  const fetchResidents = async (residentUrls) => {
    const residentsData = await Promise.all(
      residentUrls.map(async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch resident data");
        }
        const data = await response.json();
        // console.log(data)
        // Extract required resident information
        const { name, gender, mass , height} = data;
        return { name, gender, mass , height};
      })
    );
    setSelectedPlanetResidents(residentsData);
    // Scroll to the residents section
  document
    .getElementById("residents-section")
    .scrollIntoView({ behavior: "smooth", block: "start" });

  };

  const handleViewResidents = (residentUrls) => {
    fetchResidents(residentUrls);
  };

  const getPageNumber = (url) => {
    const pageNumber = url.match(/page=(\d+)/);
    return pageNumber ? parseInt(pageNumber[1]) : 1;
  };

  return (
    <div className="planets-directory">
      <h1>Star Wars Planets Directory</h1>
      <div className="planet-list">
        {planets.map((planet, index) => (
          <div key={index} className="planet-card">
            <h2>{planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Population: {planet.population}</p>
            <p>Terrain: {planet.terrain}</p>
            <button onClick={() => handleViewResidents(planet.residents)}>
              View Residents
            </button>
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
      {/* Residents modal */}
      <div id="residents-section" className="residents-modal">
        <h2>Residents </h2>
        <ul>
          {selectedPlanetResidents.map((resident, index) => (
            <Resident resident={resident} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanetsDirectory;
