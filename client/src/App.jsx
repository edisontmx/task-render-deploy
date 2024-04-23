import { useState } from "react";
import "./App.css";

const URL= import.meta.env.VITE_BACKEND_URL || "http://localhost:4000/";

function App() {
  const [count, setCount] = useState(0);
  const [result, setResult]= useState('');
  return (
    <>
      <div>
        <h1>MERN RENDER</h1>
        <button
          onClick={async () => {
            const res = await fetch(`${URL}/ping`);
            const data = await res.json();
            console.log(data);
            setResult(data)
          }}
        >
          USERS
        </button>
        <pre>
          {JSON.stringify(result, null, 2)}
        </pre>
      </div>
    </>
  );
}

export default App;
