//Always write  it inside  the component or function.
//Component Name must be PascalCase (first letter should be upper case)
// we can directly import  or we can directly write it using React HookName
// Dont call Hooks inside the loop, Condition,or nested functions.

import { useState } from "react"



// usestate hook ka use kiya 
const RulesHooks = () => {
    let [Value,SetValue]= useState("Asif RaNa")
    const myName=()=>{
        SetValue("Javeria Asif ");
    }
  return (
    <div>
      <h1> {Value}</h1>
      <button onClick={myName}>Click Me</button>
    </div>
  )
}

export default RulesHooks
