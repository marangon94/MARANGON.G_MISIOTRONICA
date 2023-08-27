import React, { useState } from "react";
import './Card.css';

const Card = ({ image, title, description, precio }) => {

  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  const handleMouseTrue = () => {
    setIsHovered(true);
  }

  const handleMouseFalse = () => {
    setIsHovered(false);
  }

  const cardStyle = {
    border: isClicked ? '2px  solid violet' : '1px solid gray' 
  }

  const imageStyle = {
    width: isHovered ? '130%' : '80%'
  }

  return (
    <div className="card" onClick={handleClick} style={cardStyle}>
      <div onMouseEnter={handleMouseTrue} onMouseLeave={handleMouseFalse} className="cardimage">
        <img src={image} alt="Card" style={imageStyle}/>
      </div>
      <div className="carddata">
      <h4>{title}</h4>
      <p className="descripcion-item">{description}</p>
      <p className="precio-item">{precio}</p>
      </div>
    </div>
  );
};

export default Card;