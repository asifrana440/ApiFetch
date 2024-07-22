import { useState } from "react";

const MiniUseState = () => {
    let myArray = [
        {
            id: 0,
            myName: " Asif",
            age: 22,
            col: "white"
        },
        {
            id: 1,
            myName: "Huzaifa",
            age: 24,
            col: "white"
        },
        {
            id: 2,
            myName: "Subhan",
            age: 23,
            col: "white"
        },
           {
            id: 3,
            myName: "Waheed",
            age: 29,
            col: "white"
        },
              {
            id: 4,
            myName: "Niaz",
            age: 28,
            col: "white"
        },
    ];
    
    console.log(myArray);

    const [state, setState] = useState(myArray);

    const changeName = () => {
        setState([]);
    };

    return (
        <>
            {state.map((curElm) => {
                return (
                    <h1 className="h1style" key={curElm.id}>
                        Name: {curElm.myName} & Age: {curElm.age} & Colour: {curElm.col}
                    </h1>
                );
            })}
            <button className="btn" onClick={changeName}>Click me</button>
        </>
    );
};

export default MiniUseState;
