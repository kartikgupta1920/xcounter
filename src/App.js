import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => 
      prev + 1
    );
  }
  const handleDecrement = () => {
    setCount((prev) => 
      prev - 1
    );
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div>Count: {count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
