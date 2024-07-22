 
// 1st Task
import { useState } from "react";
 import "./UseApp.css"
const UseStateHook = () => {
    const [Val, setVal] = useState("Javeria  Asif");

    //let val1= "Asif Bhai";

 const  changeName= ()=>{
     let myName =Val;

   //   if (myName==="Javeria Asif") {
   //      setVal("Asif Love U Alwyas");
   //   } else {
   //      setVal("Javeria Asif");
   //   }
     (myName==="Javeria Asif")?
       setVal("Asif Love U Alwyas") : setVal("Javeria Asif");  
     //agr if else use na kro tu yh
    // agr iss k bagir kro refresh krna prhta tha if else k
     //setVal("Asif Love U Alwyas");
  
 }
  return (
    <div>
     <h1> {Val}</h1>
     <button className="btn" onClick={changeName}> Click me plz</button>
    </div>
  )
 }

export default UseStateHook

// Apply on click where we change  after that key pass from usestate  and then change  const changeName   set update value // 
