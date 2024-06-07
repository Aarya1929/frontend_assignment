import React from 'react';
import Button from '../components/Button';

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
        <Button text="Bar Chart" to="/bar-chart" />
        <Button text="Line Chart" to="/line-chart" />
        <Button text="Pie Chart" to="/pie-chart" />
      </div>
    </div>
  );
};

export default HomePage;
