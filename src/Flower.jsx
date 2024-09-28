import React, { useState, useEffect } from 'react'
import Petal from './Petal';
const Flower = ({ index, centerSize, centerColor, petalColors, petalNumber, handleFitnessChange, initialfitness }) => {

  //  console.log(initialfitness)
  const petals = [];
  const [fitness, setFitness] = useState(initialfitness);
  const [hovered, setHovered] = useState(false);
  const translateValue = centerSize <= 56 
  ? 30 
  : centerSize <= 64 
  ? 40 
  : centerSize <= 80 
  ? 50 
  : 55;
  const onHover = () => {
    if (!hovered) {
      setFitness(fitness + 1);
      setHovered(true);
    }
  };

  useEffect(() => {
    handleFitnessChange(fitness, index)
  }, [fitness])


  const onHoverClose = () => {
    setHovered(false);
  }
  const dots = Array.from({ length: petalNumber });
  return (
    <div onMouseEnter={onHover} onMouseLeave={onHoverClose} >
      <div className='flex flex-col border-[3px] border-solid border-[black] rounded-sm h-[300px] w-[250px]'>
        <div className='mt-auto'>

          <div className="mx-auto relative rounded-full flex justify-center items-center ">
            {/* Red Circle in the center */}
            <div className="rounded-full z-10" style={{ backgroundColor: centerColor , width: `${centerSize}px`, height: `${centerSize}px` }}></div>

            {/* Circle of dots */}
            {dots.map((_, index) => (
              <div
                key={index}
                className="absolute w-10 h-10 rounded-full"
                style={{
                  backgroundColor: petalColors,
                  transform: `rotate(${(index * 360) / petalNumber}deg) translate(${translateValue}px)` // Adjust the angle and radius
                }}
              />
            ))}

          </div>

          <div className='flex flex-row justify-center'>
            <div className='bg-[#808000] h-[100px] w-[8px]' />
          </div>
        </div>
      </div>
      <div>
        {initialfitness}
      </div>
    </div>
  )
}

export default Flower