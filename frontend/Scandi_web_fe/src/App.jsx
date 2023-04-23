import { useState } from "react";
import AddProduct from "./AddProduct";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <main style={{ width: "100vw" }}>
        <AddProduct />
      </main>
    </div>
  );
}

export default App;
