import './App.css';

import { useState } from 'react';

import logo from '@/assets/logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Count is: {count}
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
