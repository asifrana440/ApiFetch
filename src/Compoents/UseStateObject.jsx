
import { useState } from "react"


const UseStateObject = () => {
    const [myObject,setMyObject]=useState(
      {
        myName:"AsiF RaNa",myAge:23, degree:"MCS"
    });
    const changeObject=()=>{
        setMyObject({...myObject ,   myName:"Huzaifa", myAge:24, degree:"MPhil"})
    }
  return (
    <div>
        <h1>Name:{myObject.myName} & Age {myObject.myAge} & Degree:{myObject.degree}</h1>
        <button className="btn" onClick={changeObject}>Update</button>
    </div>
  )
}

export default UseStateObject



// Change with Toogle

//import React, { useState } from "react";

// const UseStateObject = () => {
//   const [toggle, setToggle] = useState(false);

//   const [myObject, setMyObject] = useState({
//     myName: "AsiF RaNa",
//     myAge: 22,
//     degree: "MCS"
//   });

//   const changeObject = () => {
//     setToggle(!toggle);
//     setMyObject(toggle
//       ? { myName: "AsiF RaNa", myAge: 22, degree: "MCS" }
//       : { myName: "HuzIFa", myAge: 24, degree: "MPhil" }
//     );
//   };

//   return (
//     <div>
//       <h1>Name: {myObject.myName} & Age: {myObject.myAge} & Degree: {myObject.degree}</h1>
//       <button className="btn" onClick={changeObject}>Update</button>
//     </div>
//   );
// };

// export default UseStateObject;



// import { useState } from "react";

// const UseStateObject = () => {
//   const [myObject, setMyObject] = useState({
//     myName: "AsiF RaNa",
//     myAge: 23,
//     degree: "MCS"
//   });

//   const changeObject = () => {
//     setMyObject((prevObject) => (
//       prevObject.myName === "AsiF RaNa"
//         ? { myName: "HuzIFa", myAge: 24, degree: "MPhil" }
//         : { myName: "AsiF RaNa", myAge: 23, degree: "MCS" }
//     ));
//   };

//   return (
//     <div>
//       <h1>Name: {myObject.myName} & Age: {myObject.myAge} & Degree: {myObject.degree}</h1>
//       <button className="btn" onClick={changeObject}>Update</button>
//     </div>
//   );
// };

// export default UseStateObject;
