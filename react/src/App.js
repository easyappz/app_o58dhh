import React, { useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

function App() {
  useEffect(() => {
    window.handleRoutes(['/']);
  }, []);

  const [display, setDisplay] = useState('');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleNumber = (number) => {
    setDisplay(display + number);
  };

  const handleOperator = (op) => {
    if (display === '') return;
    if (previousValue === null) {
      setPreviousValue(parseFloat(display));
      setDisplay('');
    } else if (operation) {
      handleEquals();
      setPreviousValue(parseFloat(display));
      setDisplay('');
    }
    setOperation(op);
  };

  const handleEquals = () => {
    if (previousValue === null || operation === null || display === '') return;
    let result;
    const current = parseFloat(display);
    switch (operation) {
      case '+':
        result = previousValue + current;
        break;
      case '-':
        result = previousValue - current;
        break;
      case '*':
        result = previousValue * current;
        break;
      case '/':
        if (current === 0) {
          setDisplay('Error');
          return;
        }
        result = previousValue / current;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
  };

  const handleClear = () => {
    setDisplay('');
    setPreviousValue(null);
    setOperation(null);
  };

  return (
    <ErrorBoundary>
      <div className="calculator" data-easytag="id1-react/src/App.js-calculator-div">
        <div className="display" data-easytag="id2-react/src/App.js-display-div">{display || '0'}</div>
        <div className="buttons">
          <button onClick={() => handleNumber('7')} data-easytag="id3-react/src/App.js-button-7">7</button>
<button onClick={() => handleNumber('8')} data-easytag="id4-react/src/App.js-button-8">8</button>
<button onClick={() => handleNumber('9')} data-easytag="id5-react/src/App.js-button-9">9</button>
<button onClick={() => handleOperator('/')} data-easytag="id6-react/src/App.js-button-divide">/</button>
<button onClick={() => handleNumber('4')} data-easytag="id7-react/src/App.js-button-4">4</button>
<button onClick={() => handleNumber('5')} data-easytag="id8-react/src/App.js-button-5">5</button>
<button onClick={() => handleNumber('6')} data-easytag="id9-react/src/App.js-button-6">6</button>
<button onClick={() => handleOperator('*')} data-easytag="id10-react/src/App.js-button-multiply">*</button>
<button onClick={() => handleNumber('1')} data-easytag="id11-react/src/App.js-button-1">1</button>
<button onClick={() => handleNumber('2')} data-easytag="id12-react/src/App.js-button-2">2</button>
<button onClick={() => handleNumber('3')} data-easytag="id13-react/src/App.js-button-3">3</button>
<button onClick={() => handleOperator('-')} data-easytag="id14-react/src/App.js-button-subtract">-</button>
<button onClick={() => handleNumber('0')} data-easytag="id15-react/src/App.js-button-0">0</button>
<button onClick={handleClear} data-easytag="id16-react/src/App.js-button-clear">C</button>
<button onClick={handleEquals} data-easytag="id17-react/src/App.js-button-equals">=</button>
<button onClick={() => handleOperator('+')} data-easytag="id18-react/src/App.js-button-add">+</button>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;
