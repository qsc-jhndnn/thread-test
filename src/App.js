import logo from './logo.svg';
import './App.css';
import { spawn, Worker } from "threads"

async function doit(){
   const auth = await spawn(new Worker("./testworker"))
   const hashed = await auth.hashPassword("Super secret password", "1234")
   console.log("Hashed password:", hashed)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={doit}>hey</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
