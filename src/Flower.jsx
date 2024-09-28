import React, { useState , useEffect } from 'react'
import Petal from './Petal';
const Flower = ({ index , centerSize=10, centerColor, petalColors, petalNumber,handleFitnessChange , initialfitness }) => {

  //  console.log(initialfitness)
  const petals=[];
  const [fitness, setFitness] = useState(0);
  const [hovered, setHovered] = useState(false);

  const onHover = () => {
    if (!hovered) {
      setFitness(fitness + 1);
      setHovered(true);
    }
  };

  useEffect(() => {
    handleFitnessChange(fitness , index)
  },[fitness])


  const onHoverClose = () => {
    setHovered(false);
  }
  console.log('in flower')
  console.log(fitness)
  return (
    <div onMouseEnter={onHover} onMouseLeave={onHoverClose} >
      <div className='flex flex-col border-[3px] border-solid border-[black] rounded-sm h-[300px] w-[250px]'>
        <div className='mt-auto'>

          <div>
            <div className='flex flex-row justify-center h-[70%]'>
              <svg width={centerSize * 2} height={centerSize * 2}>
                <circle
                  cx={centerSize}
                  cy={centerSize}
                  r={centerSize}
                  fill={centerColor}
                />
              </svg>
            </div>
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