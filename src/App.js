import { useState } from "react";
import "./App.css";
import Form from "./components/Form.js";
import Results from "./components/Results.js";

function App() {
  const [results, setResults] = useState([0, 0, 0, 0]);
  function emiChangeHandler(value) {
    setResults(value);
  }

  return (
    <div className="App">
      <Form onChange={emiChangeHandler} />
      <Results results={results} />
    </div>
  );
}

export default App;
