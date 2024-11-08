import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CalculatorContext } from '../context/CalculatorContext';

const Calculator = () => {
  const { addNumber, currentNumber } = useContext(CalculatorContext);

  return (
    <div>
      <h2>Calculadora</h2>
      <div>Pantalla: {currentNumber}</div>
      <div className="buttons">
        {[...Array(10).keys()].map((num) => (
          <button key={num} onClick={() => addNumber(num)}>
            {num}
          </button>
        ))}
      </div>
      <Link to="/result">Ver Resultado</Link>
    </div>
  );
};

export default Calculator;