import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flower from './Flower'
import { generatePopulation, geneticAlgorithm } from './Main'

function App() {
  const [count, setCount] = useState(0)
  const [population, setPopulation] = useState([])
  const [fitness, setFitness] = useState(0)

  const handleFitnessChange = (fitness , index) => {
    const newPop = [...population]
    newPop[index].fitness = fitness
    console.log(newPop)
    setPopulation(newPop)
  }


  const startNewGeneration = () => {
    const startPop = generatePopulation()
    console.log(startPop)
    setPopulation(startPop)
  }
  const makeNewGeneration = () => {
    const newPop = geneticAlgorithm(population)
    console.log(newPop)
    setPopulation(newPop)
    population.map(({flower , fitness} , index)=>{

      handleFitnessChange(0,index)
    })
  }


  return (
    <div>
      <div className="flex flex-row gap-[20px] flex-wrap justify-center">
        {population.map(({flower , fitness} , index) => {

          if(index == 0){
            console.log(fitness)
          }

            return(
              (
                <Flower key={index} 
                index={index} 
                centerSize={flower[0]} 
                centerColor={`rgb(${flower[1]}, ${flower[2]}, ${flower[3]})`} 
                petalNumber={flower[7]} petalColors={`rgb(${flower[4]}, ${flower[5]}, ${flower[6]})`} 
                handleFitnessChange={handleFitnessChange} 
                initialfitness={fitness}
                />
                
              )
            )
        }
        )}


      </div>
      <div className='flex flex-row gap-[100px] justify-center mt-[50px]'>
        <button onClick={startNewGeneration} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start new Generation
        </button>

        <button onClick={makeNewGeneration} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Make new Generation
        </button>
      </div>
    </div>
  )
}

export default App
