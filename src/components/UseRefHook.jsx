import React, { useRef } from 'react'

function UseRefHook() {


    const inputRef = useRef(null)

    const handleClick = () => {
        console.log(inputRef.current.value)
        
    }

  return (
    <div>
      <input type="text" placeholder="enter name" ref={inputRef}/>
      <button onClick={handleClick}>click</button>
      
    </div>
  )
}

export default UseRefHook
