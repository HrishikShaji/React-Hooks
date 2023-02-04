import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

export default function UseMemo(){
    const [data,setData] = useState(null)
    const [toggle,setToggle] = useState(false)

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=>{
            setData(response.data)
        })
    },[])

    const findLongestName = (comments) => {
        if(!comments) return null;

        let longestName = ""
        for (let i = 0;i < comments.length;i++){
            let currentName = comments[i].name
            if(currentName.length > longestName.length){
                longestName = currentName
            }
        }

        console.log("computed")

        return longestName
    }


    const getLongetName = useMemo(()=>findLongestName(data),[data])

  return (
    <div>
      <div>{getLongetName}</div>
      <button
      onClick={()=>{setToggle(!toggle)}}
      >
      {""}
        toggle
      </button>
      {toggle && <h1>toggled</h1>}
    </div>
  )
}

