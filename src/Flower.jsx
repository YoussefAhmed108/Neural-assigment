import React from 'react'

const Flower = ({ centerSize, centerColor, petalColors, petalNumber }) => {
  
  return (
    <div className='flex flex-col border-[3px] border-solid border-[black] rounded-sm h-[300px] w-[200px]'>
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
  )
}

export default Flower