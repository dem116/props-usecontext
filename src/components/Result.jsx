import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CalculatorContext } from '../context/CalculatorContext';

const Result = () => {
  const { selectedNumbers, currentNumber, resetCalculator } = useContext(CalculatorContext);

  return (
    <div>
      <h2>Resultado</h2>
      <p>Números seleccionados: {selectedNumbers.join(', ')}</p>
      <p>Resultado de la suma: {currentNumber}</p>
      <button onClick={resetCalculator}>Resetear</button>
      <Link to="/">Volver a la Calculadora</Link>
    </div>
  );
};

export default Result;
