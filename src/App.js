import React, { useState } from 'react';
import './App.css';

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [delajevu, setDelajevu] = useState('');
  function handleNumber1Change(e) {
    setNumber1(Number(e.target.value));
  }

  function handleNumber2Change(e) {
    setNumber2(+e.target.value);
  }

  function calculateSum() {
   let result = number1 + number2
    setDelajevu("Result = " + result);
  }
  function calculateSubstraction() {
    let result = number1 - number2
    setDelajevu("Result = " + result);
  }
  function calculateMultiplication() {
    let result = number1 * number2
    setDelajevu("Result = " + result);
  }
  function calculateDivision() {
    let result = number1 / number2
    setDelajevu("Result = " + result);
  }
    
    function calculatePercentage(){
    let result = number1 / number2 * 100
    setDelajevu("Result = " + result + " %");
    
    }
    
    function calculateSin() {
    let result = Math.sin(number2) * number1
    setDelajevu("Result = " + result);
    }
    function calculateTan() {
      let result = Math.tan(number2) * number1
      setDelajevu("Result = " + result);
      }
    function calculateCos() {
      let result = Math.cos(number2) * number1
      setDelajevu("Result = " + result);
      }
  return (
    <div className="App">
      <h1>{delajevu}</h1>


      <div className="number-inputs">
        <input type="number" placeholder="0" onChange={handleNumber1Change} />
        <input type="number" placeholder="0" onChange={handleNumber2Change} /></div>
 <div> <button onClick={calculateSum}>+</button>
        <button onClick={calculateSubstraction}>-</button>
        <button onClick={calculateMultiplication}>*</button>
        <button onClick={calculateDivision}>/</button>
      <button onClick={calculatePercentage}>%</button>
          <button onClick={calculateSin}>sin</button>
          <button onClick={calculateTan}>tan</button>
          <button onClick={calculateCos}>cos</button></div>




    </div>
  );
}

export default App;