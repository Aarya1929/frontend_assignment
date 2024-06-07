import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import BarChartPage from './pages/BarChartPage';
import LineChartPage from './pages/LineChartPage';
import PieChartPage from './pages/PieChartPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bar-chart" element={<BarChartPage />} />
          <Route path="/line-chart" element={<LineChartPage />} />
          <Route path="/pie-chart" element={<PieChartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;