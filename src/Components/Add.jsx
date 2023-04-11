import React, { useState } from "react";

function Add() {
  const [firstNum, setFirstNum] = useState(null);
  const [secondNum, setSecondNum] = useState(null);
  const [sum, setSum] = useState(0);
  function sumTheNum() {
    if (isNaN(parseInt(firstNum) + parseInt(secondNum))) {
      setSum(0);
    } else {
      setSum(parseInt(firstNum) + parseInt(secondNum));
    }
  }
  function diffTheNum() {
    if (isNaN(parseInt(firstNum) - parseInt(secondNum))) {
      setSum(0);
    } else {
      setSum(parseInt(firstNum) - parseInt(secondNum));
    }
  }
  function prodTheNum() {
    if (isNaN(parseInt(firstNum) * parseInt(secondNum))) {
      setSum(0);
    } else {
      setSum(parseInt(firstNum) * parseInt(secondNum));
    }
  }
  function quotTheNum() {
    if (isNaN(parseInt(firstNum) / parseInt(secondNum))) {
      setSum(0);
    } else {
      setSum(parseInt(firstNum) / parseInt(secondNum));
    }
  }
  return (
    <main>
      <h2>Enter Two Numbers</h2>
      <div className="addition">
        <p>
          <input
            type="text"
            name="First Number"
            className="Numbers"
            onChange={(e) => setFirstNum(e.target.value)}
          />{" "}
          +{" "}
          <input
            type="text"
            name="Second Number"
            className="Numbers"
            onChange={(e) => setSecondNum(e.target.value)}
          />{" "}
          ={" " + sum}
          <div>
            <span className="buttons" onClick={sumTheNum}>
              <strong>Add</strong>
            </span>
            <span className="buttons" onClick={diffTheNum}>
              <strong>Subtract</strong>
            </span>
            <span className="buttons" onClick={prodTheNum}>
              <strong>Multiply</strong>
            </span>
            <span className="buttons" onClick={quotTheNum}>
              <strong>Divide</strong>
            </span>
          </div>
        </p>
      </div>
    </main>
  );
}

export default Add;
