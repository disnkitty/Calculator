import { useState } from 'react';
import './index.css';

function Calculator() {
  const [input, setInput] = useState('0');
  function addOne() {
    const currentInput = eval(input);
    setInput((currentInput + 1).toString());
  }

  function subtractOne() {
    const currentInput = eval(input);
    setInput((currentInput - 1).toString());
  }
  // const [input, setInput]=useState(0)

  // function increment(){
  //   setInput(prev => prev+1)
  // }

  //  function decrement(){
  //   setInput(prev => prev-1)
  // }
  function handleClick(value) {
    if (value === 'C') {
      setInput('0');
      return;
    } else if (value === '=') {
      const result = eval(input);

      if (Number.isInteger(result)) {
        setInput(result.toString());
      } else {
        const rounded = result.toFixed(3);
        setInput(rounded.toString());
      }
    } else setInput((prev) => (prev === '0' ? value : prev + value));
  }
  return (
    <div className="calculator-container">
      <h1 className="calculator-title">UseState Calculator</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="increment-buttons">
          <button onClick={addOne} className="increment">
            +1
          </button>
          <button onClick={subtractOne} className="decrement">
            -1
          </button>
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')} className="operator">
            +
          </button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')} className="operator">
            -
          </button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')} className="operator">
            *
          </button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('=')} className="equals">
            =
          </button>
          <button onClick={() => handleClick('/')} className="operator">
            /
          </button>
          <button onClick={() => handleClick('C')} className="clear">
            C
          </button>
        </div>
      </div>
      <div className="technologies-used">
        <p>
          <strong>Technologies used:</strong> React, JSX, CSS Modules,
          JavaScript (useState, events handling)
        </p>
      </div>
    </div>
  );
}

export default Calculator;
