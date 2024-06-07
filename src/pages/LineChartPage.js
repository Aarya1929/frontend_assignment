import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import './chart.css';

const LineChartPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/sample-data.json')
      .then(response => {
        const parsedData = response.data.data.AuthorWorklog.rows[0].dayWiseActivity.map(day => ({
          date: day.date,
          PR_Open: parseInt(day.items.children.find(item => item.label === 'PR Open').count),
          PR_Merged: parseInt(day.items.children.find(item => item.label === 'PR Merged').count),
          Commits: parseInt(day.items.children.find(item => item.label === 'Commits').count),
          PR_Reviewed: parseInt(day.items.children.find(item => item.label === 'PR Reviewed').count),
          PR_Comments: parseInt(day.items.children.find(item => item.label === 'PR Comments').count),
          Incident_Alerts: parseInt(day.items.children.find(item => item.label === 'Incident Alerts').count),
          Incidents_Resolved: parseInt(day.items.children.find(item => item.label === 'Incidents Resolved').count)
        }));
        setData(parsedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="chart-page">
      <div className='header'>
      <h2>Line Chart</h2>
      </div>
      <div className='content'>
        <p>The line chart offers a visual representation of developers' activity metrics, including pull requests, commits, 
            and incident resolutions. Its purpose is to provide a clear overview of individual contributions over time, 
            aiding team leads and managers in performance monitoring and workload management. By identifying trends and 
            potential bottlenecks, it enables informed decision-making for effective team management.</p>
      </div>
      <div className="chart-container">
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="PR_Open" stroke="#EF6B6B" />
          <Line type="monotone" dataKey="PR_Merged" stroke="#61CDBB" />
          <Line type="monotone" dataKey="Commits" stroke="#FAC76E" />
          <Line type="monotone" dataKey="PR_Reviewed" stroke="#C2528B" />
          <Line type="monotone" dataKey="PR_Comments" stroke="#0396A6" />
          <Line type="monotone" dataKey="Incident_Alerts" stroke="#5F50A9" />
          <Line type="monotone" dataKey="Incidents_Resolved" stroke="#8F3519" />
        </LineChart>
      </div>
    </div>
  );
};

export default LineChartPage;
