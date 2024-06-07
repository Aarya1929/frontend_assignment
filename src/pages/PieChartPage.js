import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';
import './chart.css';

const PieChartPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/sample-data.json')
      .then(response => {
        const parsedData = response.data.data.AuthorWorklog.rows.map(row => ({
          name: row.name,
          value: parseInt(row.totalActivity.find(activity => activity.name === 'Commits').value)
        }));
        setData(parsedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="chart-page">
      <div className='header'>
      <h2>Pie Chart</h2>
      </div>
      <div className='content'>
        <p>The pie chart illustrates the distribution of commits among developers in the organization. 
            It provides a clear overview of each developer's contribution to the codebase. 
            By visually representing the proportion of commits attributed to each contributor, 
            it helps assess individual involvement and impact on project development. 
            This visualization aids in identifying key contributors and ensuring equitable workload 
            distribution within the team.</p>
      </div>
      <div className="chart-container">
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartPage;
