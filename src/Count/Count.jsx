import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(prev => prev + 1);
    }
  return (
    <div>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Count