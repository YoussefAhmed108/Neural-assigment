import React from 'react';

const Petal = ({ angle, distance, size, color }) => {
  const petalStyle = {
    position: 'absolute',
    width: `${size}px`,
    height: `${size * 2}px`,
    backgroundColor: color,
    borderRadius: '50%',
    transform: `rotate(${angle}deg) translate(${distance}px) rotate(-${angle}deg)`,
  };

  return <circle style={petalStyle}></circle>;
};

export default Petal;
