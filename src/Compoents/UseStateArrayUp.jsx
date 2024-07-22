import { useState } from "react";
import "./UseApp.css";

const UseStateArrayUp = () => {
  let bioData = [
    { id: 0, myName: " FaisAl ", age : 26 },
    { id: 1, myName: " AsIf  ",  age : 24 },
    { id: 2, myName: "NiAZ", age: 25 },
    { id: 3, myName: " JaVeRia ", age : 20 },
    { id: 4, myName: " Sana  ",  age : 21 },
    { id: 5, myName: "Sara", age : 19 }
  ];

  const [myArray, setMyArray] = useState(bioData);

  // Update value m clear Array
  const clearArray = () => {
    setMyArray([]);
  };

  // Remove an item from the array based on its ID ...id not equll to id then remove
  const removeItem = (id) => {
     const updatedArray = myArray.filter((item) => item.id !== id);
    setMyArray(updatedArray);
  };
// filter Array remove the those value that we dont need 
  return (
    <>
      
      {myArray.map((curElm) => {
        return (
          <div key={curElm.id}>
            <h1 className="h1style">
              Name: {curElm.myName} Age: {curElm.age}
            </h1>
            <button className="btn-r" onClick={() => removeItem(curElm.id)}>
              Remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={clearArray}>
        Clear All
      </button> 
    </>
  );
};

export default UseStateArrayUp;
