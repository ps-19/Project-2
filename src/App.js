import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./views/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;