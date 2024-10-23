import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(15);

  function addCounter()  {
    if(counter < 20) {
      setCounter(counter + 1);
    }
  }

  const decCounter = () => {
    if(counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h2>Demo of useState Hook</h2>
      <button onClick={addCounter}>Click here to increase: {counter}</button>
      <br />
      <br />
      <button onClick={decCounter}>Click here to decrease: {counter}</button>
    </>
  )
}

export default App
