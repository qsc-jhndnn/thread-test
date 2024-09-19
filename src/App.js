import './App.css';
import { spawn, Worker } from "threads"

async function doit(){
   const auth = await spawn(new Worker("./testworker.js"))
   const hashed = auth.hashPassword("Super secret password", "1234")
   console.log("Hashed password:", hashed)
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={doit}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
