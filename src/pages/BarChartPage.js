import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import './chart.css';

const BarChartPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/sample-data.json')
      .then(response => {
        const parsedData = response.data.data.AuthorWorklog.rows.map(row => ({
          author: row.name,
          PR_Open: parseInt(row.totalActivity.find(activity => activity.name === 'PR Open').value) || 0,
          PR_Merged: parseInt(row.totalActivity.find(activity => activity.name === 'PR Merged').value) || 0,
          Commits: parseInt(row.totalActivity.find(activity => activity.name === 'Commits').value) || 0,
          PR_Reviewed: parseInt(row.totalActivity.find(activity => activity.name === 'PR Reviewed').value) || 0,
          PR_Comments: parseInt(row.totalActivity.find(activity => activity.name === 'PR Comments').value) || 0,
          Incident_Alerts: parseInt(row.totalActivity.find(activity => activity.name === 'Incident Alerts').value) || 0,
          Incidents_Resolved: parseInt(row.totalActivity.find(activity => activity.name === 'Incidents Resolved').value) || 0,
        }));
        setData(parsedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="chart-page">
      <div className='header'>
      <h2>Bar Chart</h2>
      </div>
      <div className='content'>
        <p>The bar chart visualizes the activity data of developers in an organization, including metrics like pull requests opened and merged, 
            commits made, and incidents resolved. This chart provides a clear overview of each developer's contributions, aiding in performance 
            monitoring and workload management. It helps team leads and managers ensure an even distribution of tasks and identify potential 
            bottlenecks, supporting effective team management.</p>
      </div>
      <div className="chart-container">
        <BarChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="author" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="PR_Open" fill="#EF6B6B" />
          <Bar dataKey="PR_Merged" fill="#61CDBB" />
          <Bar dataKey="Commits" fill="#FAC76E" />
          <Bar dataKey="PR_Reviewed" fill="#C2528B" />
          <Bar dataKey="PR_Comments" fill="#0396A6" />
          <Bar dataKey="Incident_Alerts" fill="#5F50A9" />
          <Bar dataKey="Incidents_Resolved" fill="#8F3519" />
        </BarChart>
      </div>
    </div>
  );
};

export default BarChartPage;
