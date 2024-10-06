import React from 'react';
import Routing from './routing/routing';
import CounterProvider from './counterContext/counterContext';
function App() {
  return (
    <div className="App">
      <CounterProvider>
      <Routing />
      </CounterProvider>
    </div>
  );
}

export default App;
