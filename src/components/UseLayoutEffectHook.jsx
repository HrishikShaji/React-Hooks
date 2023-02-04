import React, { useEffect, useLayoutEffect, useRef } from 'react'

function UseLayoutEffectHook() {
    const inputRef = useRef(null)

    useLayoutEffect(()=>{
        console.log(inputRef.current.value)
    },[])

    useEffect(()=>{
        inputRef.current.value ="yo"
    },[])
  return (
    <div>
      <input ref={inputRef} value="hello"/>
    </div>
  )
}

export default UseLayoutEffectHook
