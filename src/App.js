import { useState } from 'react';
import './App.css';

function App() {
  const [Login, setLogin] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>{Login? "Welcome Back":"Please Login"}</h1>
        <div className="button-group">
        <button onClick={() => setLogin(true)}>Login</button>
        <button onClick={() => setLogin(false)}>Log Out</button>
        </div>
      </header>
    </div>
  );
}

export default App;
