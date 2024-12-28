import React, { useState } from "react";
import { Link } from "react-router-dom";
import './index.scss'
const HomePage = () => {
  const [lockers] = useState([
    { id: 1, lockerNumber: "L101", dataStored: "10GB" },
    { id: 2, lockerNumber: "L102", dataStored: "15GB" },
    { id: 3, lockerNumber: "L103", dataStored: "20GB" },
  ]);

  return (
    <div className="home-container">
      <h2>Locker Overview</h2>
      <table className="locker-table">
        <thead>
          <tr>
            <th>Locker Number</th>
            <th>Data Stored</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lockers.map((locker) => (
            <tr key={locker.id}>
              <td>{locker.lockerNumber}</td>
              <td>{locker.dataStored}</td>
              <td>
                <Link to={`/locker/${locker.id}`} className="view-button">
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
