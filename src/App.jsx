import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flower from './Flower'

function App() {
  const [count, setCount] = useState(0)

  // Create an array of 10 elements
  const items = Array.from({ length: 8 }, (_, index) => index);

  return (
    <div className="flex flex-row gap-[20px]">
      {items.map((item) => (
        <Flower key={item} centerSize={50} centerColor={'red'} petalNumber={3} petalColors={'green'} />
      ))}
    </div>
  )
}

export default App
