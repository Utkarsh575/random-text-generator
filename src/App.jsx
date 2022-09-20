import { useState } from "react";
import "./App.css";
import Fetch from "./Fetch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Fetch />
    </div>
  );
}

export default App;
