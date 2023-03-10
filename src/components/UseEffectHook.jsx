import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UseEffectHook() {

    const [data,setData] = useState("")
    const [count,setCount] = useState(0)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data[0].name)
            console.log("done")
        })
    },[count])
  return (
    <div>
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button onClick={()=>{setCount(count+1)}}>click</button>
    </div>
  )
}

export default UseEffectHook
