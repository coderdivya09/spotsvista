import React from 'react'

function Login() {
    const handleClick=()=>{
alert (3+2)
    }


    const handleAdd=()=>{
        alert(3-2)

    }
    
   
  return (
    <div><h1>Login</h1>
    <button onClick={handleClick}>Click me</button>
   
   
    <button onClick={handleAdd}>Add me</button>
    </div>
    
  )
}

export default Login