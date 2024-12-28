import React from "react";
import { useParams, Link } from "react-router-dom";
import './index.scss'
const LockerDetailsPage = () => {
  const { id } = useParams();

  const lockerDetails = {
    1: [
      { date: "2024-01-01", action: "Stored", amount: "5GB" },
      { date: "2024-02-01", action: "Took", amount: "2GB" },
      { date: "2024-03-01", action: "Returned", amount: "2GB" },
    ],
    2: [
      { date: "2024-01-15", action: "Stored", amount: "10GB" },
      { date: "2024-02-20", action: "Took", amount: "5GB" },
    ],
    3: [
      { date: "2024-01-10", action: "Stored", amount: "15GB" },
      { date: "2024-03-01", action: "Took", amount: "5GB" },
      { date: "2024-03-15", action: "Returned", amount: "3GB" },
    ],
  };

  return (
    <div className="details-container">
      <h2>Locker Details: {`L10${id}`}</h2>
      <table className="details-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Action</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {lockerDetails[id]?.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.action}</td>
              <td>{entry.amount}</td>
            </tr>
          )) || (
            <tr>
              <td colSpan="3">No details available.</td>
            </tr>
          )}
        </tbody>
      </table>
      <Link to="/" className="back-button">
        Back to Home
      </Link>
    </div>
  );
};

export default LockerDetailsPage;

