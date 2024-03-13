import "./App.css";
import { useState } from "react";

function App() {
  // State variables to store the current result and previous value
  const [result, setResult] = useState("");
  const [previousValue, setPreviousvalue] = useState("");

  // State variables to store the current result and previous value
  const handleClick = (e) => {
    const value = e.target.name;

    // Avoid adding multiple zeros
    if (value === "0" && result === "0") return;

    // Check for duplicate operators or decimal points
    if (value === "." && result.includes(".")) return;
    if (value === "+" && result.includes("+")) return;
    if (value === "*" && result.includes("*")) return;
    if (value === "-" && result.includes("-")) return;
    if (value === "/" && result.includes("/")) return;
    
    // Concatenate the clicked button value to the current result
    setResult(result.concat(e.target.name))
  }

  // Function to clear the calculator
  const clear = () => {
      setResult("")
      setPreviousvalue("")
  }

  // Function to delete the last character from the result
  const backspace = () => {
    setResult(result.slice(0, -1))
  }

  // Function to perform calculation
  const calculate = () => {
    try {

      // Store the current result as the previous value
      setPreviousvalue(result)

      // Evaluate the expression and update the result
      setResult(eval(result).toString())
      
    } catch (error) {

      // If an error occurs during evaluation, set the result to "error"
      setPreviousvalue(result)
      setResult("error")
    }
  }

  return (
    < div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousValue}
        </div>
        <div className="current-operand">{result}</div>
      </div>

      {/* Buttons for calculator operations */}
      <button className="span-two highlight" onClick={clear} id="clear" >AC</button>
      <button onClick={backspace} id="backspace">DEL</button>
      <button name="/" onClick={handleClick} >&divide;</button>
      <button name="1" onClick={handleClick} >1</button>
      <button name="2" onClick={handleClick} >2</button>
      <button name="3" onClick={handleClick} >3</button>
      <button name="*" onClick={handleClick} >*</button>
      <button name="4" onClick={handleClick} >4</button>
      <button name="5" onClick={handleClick} >5</button>
      <button name="6" onClick={handleClick} >6</button>
      <button name="+" onClick={handleClick} >+</button>
      <button name="7" onClick={handleClick} >7</button>
      <button name="8" onClick={handleClick} >8</button>
      <button name="9" onClick={handleClick} >9</button>
      <button name="-" onClick={handleClick} >-</button>
      <button name="." onClick={handleClick} >.</button>
      <button name="0" onClick={handleClick} >0</button>

      {/* Button to perform calculation */}
      <button className="span-two" onClick={calculate } id="" >=</button>
    </div>
  );
}

export default App;
