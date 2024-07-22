import React, { useState } from 'react';

const ShortCir = () => {
  // State to hold the demo value
  const [demo, setDemo] = useState("short circuit value");

  // Function to update the demo state
  const handleClick = () => {
    setDemo("How are U");
  };

  return (
    <div>
      {/* Short Circuit Evaluation */}
      <h1 className="h1">
        {demo || "Asif"} {/* Displays 'demo' if truthy, otherwise "Asif" */}
      </h1>
      <h1>
        {demo && "above Data Given"} {/* Displays "above Data Given" if 'demo' is truthy */}
      </h1>
      {/* Button to trigger handleClick function */}
      <button onClick={handleClick}>Click Here</button>
    </div>
  );
};

export default ShortCir;

// short circuit evualtion   multivalue render in short form.
//Is there a way to render multiple elements right after an inline if condition?