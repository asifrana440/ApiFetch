import { useState } from 'react';

function React() {
  const [inputs, setInputs] = useState({ first: 33, second: 33, third: 34 });

  const handleInputChange = (e, inputName) => {
    const value = Number(e.target.value);
    const remainingSum = 100 - value;
    const otherInputs = Object.keys(inputs).filter(name => name !== inputName);

    const firstOtherValue = Math.round(remainingSum * (inputs[otherInputs[0]] / (inputs[otherInputs[0]] + inputs[otherInputs[1]])));
    const secondOtherValue = remainingSum - firstOtherValue;

    setInputs({
      ...inputs,
      [inputName]: value,
      [otherInputs[0]]: firstOtherValue >= 0 ? firstOtherValue : 0,
      [otherInputs[1]]: secondOtherValue >= 0 ? secondOtherValue : 0,
    });
  };

  return (
    <div>
      <div>
        <label>
          First Input:
          <input
            type="range"
            min="0"
            max="100"
            value={inputs.first}
            onChange={(e) => handleInputChange(e, 'first')}
          />
          {inputs.first}
        </label>
      </div>
      <div>
        <label>
          Second Input:
          <input
            type="range"
            min="0"
            max="100"
            value={inputs.second}
            onChange={(e) => handleInputChange(e, 'second')}
          />
          {inputs.second}
        </label>
      </div>
      <div>
        <label>
          Third Input:
          <input
            type="range"
            min="0"
            max="100"
            value={inputs.third}
            onChange={(e) => handleInputChange(e, 'third')}
          />
          {inputs.third}
        </label>
      </div>
      <div>
        <h2>Total Sum: 100</h2>
      </div>
    </div>
  );
}

export default React;
