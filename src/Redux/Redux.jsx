import React from 'react';
import './Redux.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../Actions/index';

const Redux = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <h1>Increment and Decrement Counter</h1>
      <h4>Using React Redux</h4>
      <div className='quantity'>
        <button
          className='quantity-btn'
          title='Decrement'
          onClick={() => dispatch(decNumber())}
        >
          <span>-</span>
        </button>
        <input
          name='quantity'
          type='text'
          className='quantity_input'
          value={myState}
          readOnly
        />
        <button
          className='quantity-btn'
          title='Increment'
          onClick={() => dispatch(incNumber())}
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default Redux;
