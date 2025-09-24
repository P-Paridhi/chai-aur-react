import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let counter = 5;
  let [counter, setCounter] = useState(0);
  const updateValue = () => {
    if (counter < 20){
      counter = counter + 1;
      setCounter(counter);
    }
  }
  const removeValue = () => {
    if(counter > 0){
      counter = counter - 1;
      setCounter(counter);
    }
  }
  return (
    <>
      <h1>Hey this is your counter project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick = {updateValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
      {/* <p>{counter}</p> */}
    </>
  )
}

export default App
