import React from 'react';
import './Button.css';
import { useNavigate } from 'react-router-dom';
import barImage from '../assets/bar.png';
import lineImage from '../assets/line.png';
import pieImage from '../assets/pie.png';

const Button = ({ text }) => {
  let imageSrc;
  switch (text) {
    case 'Bar Chart':
      imageSrc = barImage;
      break;
    case 'Line Chart':
      imageSrc = lineImage;
      break;
    case 'Pie Chart':
      imageSrc = pieImage;
      break;
    default:
      imageSrc = ''; 
  }

  const navigate = useNavigate(); 

  const handleClick = () => {
    let path = '';
    switch (text) {
      case 'Bar Chart':
        path = '/bar-chart';
        break;
      case 'Line Chart':
        path = '/line-chart';
        break;
      case 'Pie Chart':
        path = '/pie-chart';
        break;
      default:
    }
    navigate(path); 
  };

  return (
    <button className="Button" onClick={handleClick}>
      {imageSrc && <img src={imageSrc} alt={text} className="Button-image" />}
      {text}
    </button>
  );
};

export default Button;
