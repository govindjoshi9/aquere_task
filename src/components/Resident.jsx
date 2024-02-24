import React from 'react'
import './style.css'
export default function Resident({resident, index}) {
  return (
    <div>
      <li key={index} className="resident-card">
        <p>Name: {resident.name}</p>
        <p>Gender: {resident.gender}</p>
        <p>Mass: {resident.mass}</p>
        <p>height: {resident.height}</p>
      </li>
    </div>
  );
}
