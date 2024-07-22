
 import { useState } from "react"
import "./UseApp.css"
const UseStateArray = () => {
    let  bioData=[
        {
            id:0, myName:"JaVeRia AsIf", age:26
        },
        {
            id:1, myName:" Sana AsIf", age:24
        },
        
        {
            id:2, myName:" Alone AsIf", age:25
        },
        {
            id:3, myName:"JaVeRia AsIf", age:26
        },
        {
            id:4, myName:" Sana AsIf", age:24
        }
    ]
// usestate use kr k biodata ke value usko assign kr di gi
  const [myArray,setMyArray] =useState(bioData);

// update value m clear Array
    const clearArray = () =>{
        setMyArray([]);
    }


  return (
    <>
      {/* {
      myArray.map((curElm)=><h1 className="h1style" key={curElm.id} >Name: {curElm.myName} Age:{curElm.age} </h1>
      )
       } */}
          {myArray.map((curElm) => <h1 className="h1style" key={curElm.id}>Name:{curElm.myName} Age:{curElm.age}</h1>)}
           <button className="btn" onClick={clearArray}> Clear All</button>
  </>
  )
}

export default UseStateArray
// myArray Assign as the biodata ke jagha pr maparray use  hota hai value uthna k lya