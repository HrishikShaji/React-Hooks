import React, { useCallback, useState } from 'react'
import Child from './Child'

const UseCallBackHook = () => {
    const [toggle,setToggle] = useState(false)
    const [data,setData] = useState("yoyo")

    const returnComment = useCallback(
        (name) => {
        return data + name
    },[data])
  return (
    <div>
      <Child returnComment={returnComment}/>
      <button
      onClick={()=>{
        setToggle(!toggle)
      }}
      >
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </div>
  )
}

export default UseCallBackHook
