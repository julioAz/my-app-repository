import { useState } from 'react'
import './styles.css';

function Counter() {
  // declaring 2 variables, 1 for count and another to state changes;
  const [counter, setCounter] = useState(0);

  //increment function, updating the value of setCounter
  function increment():any{
    setCounter(counter + 1)
  }

  //return the component to be ready to use
  return (
    <div className="counter">
      <h1>Click in button</h1>
      <button onClick={increment}>{counter}</button>
    </div>
  );
}

export default Counter;
