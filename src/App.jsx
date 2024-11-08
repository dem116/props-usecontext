import React from 'react';
import { CalculatorProvider } from './context/CalculatorContext';
import RoutesApp from './routes/RoutesApp';
import './App.css';

function App() {
  return (
    <CalculatorProvider>
      <RoutesApp />
    </CalculatorProvider>
  );
}

export default App;