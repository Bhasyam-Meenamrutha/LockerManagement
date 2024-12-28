import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import LockerDetailsPage from "./LockerDetailsPage";
import './index.scss'

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Bank Locker Management</h1>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/locker/:id" element={<LockerDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
