import { useState } from "react";


const UseState = () => {

    //simple hook use
    // const [val,setVal]=useState("Asif");
    
    // const changeName=()=>{
    //       setVal("Asif in Function");
    //     };
    
    const [value,setValue]=useState("Before Update");

    const changeName=()=>{
        let myName=value;
        // if(myName=="Before Update"){
        //     setValue("Use State Hooks Use")
        // }else{
        //     setValue("Before Update")
        // }
        (myName=="Before Update") ?
        setValue("Use State Hooks Use") : setValue("Before Update");

    }
  return (
    <div>
      
      <h1>{value}</h1>
      <button className="btn" onClick={changeName}>click me</button>
    </div>
  );
}

export default UseState;
