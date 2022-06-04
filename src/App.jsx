import React, { useState } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <>
      <div className="app">
        <h1 className={count > 0 ? 'positive' : count < 0 ? 'negative' : null}>
          {count}
        </h1>
        <div className="form-wrapper">
          <label htmlFor="step">Step</label>
          <input
            type="number"
            value={step}
            onChange={(e) => {
              setStep(e.target.value);
            }}
          />
        </div>
        <div className="button-wrapper">
          <button
            onClick={() => {
              setCount((count) => count + parseInt(step));
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              setCount((count) => count - parseInt(step));
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setCount(0);
            }}
          >
            <i className="fa-solid fa-rotate-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
