import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import BarChartPage from './pages/BarChartPage';
import LineChartPage from './pages/LineChartPage';
import PieChartPage from './pages/PieChartPage';
import Button from './components/Button'; 

const HomePage = () => {
  return (
    <div className="App-content">
      <header className="App-header">
          <h1>Developers Activity Dashboard</h1>
      </header>
      <div className="App-intro">
        <p>
          Create a simple dashboard that visualizes organization developers' activity data throughout the day for a week.
          Activities include committing code, opening pull requests, merging pull requests, attending meetings, and writing documentation.
        </p>
      </div>
      <div className="Button-group">
        {/* Use Button component directly */}
        <Button text="Bar Chart" to="/bar-chart" />
        <Button text="Line Chart" to="/line-chart" />
        <Button text="Pie Chart" to="/pie-chart" />
      </div>
    </div>
  );
};

// Define the App component
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
