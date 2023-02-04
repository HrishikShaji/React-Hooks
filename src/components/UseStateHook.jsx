import React from 'react'
import {useState} from 'react'

function UseStateHook() {
    const [counter,setCounter] = useState(0)
    const [value,setValue] = useState("")
    const onIncrement = () => {
        setCounter(counter + 1)
    }
    const inputChange = (e) => {
        let newValue = e.target.value
        setValue(newValue)
    }

    const decrement = () => {
        setCounter(counter-1)
    }

  return (

    <div>
      <div>
        <h1>{counter}</h1>
        <button onClick={onIncrement}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <div>
        <input placeholder="enter text" onChange={inputChange}/>
        
        <h1>{value}</h1>
      </div>
    </div>
  )
}

export default UseStateHook
