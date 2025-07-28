import React,{useState} from 'react'
import './Counter.css'
const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='inner-container'>
      <h1>Counter : {count}</h1>
      <div className="loader" ></div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    <button    onClick={() => setCount(count - 1)}>Decrement</button> 
    
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
    <div className="progress">
        <div className="progress-bar" style={{ width: `${count * 10}%` }}></div>
        <p>Progress: {count * 10}%</p>
    </div>
    </>
  )
}

export default Counter
