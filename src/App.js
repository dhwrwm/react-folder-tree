import React from "react";
import structure from "./api/structure";
import Tree from "./components/Tree";

function App() {
  return (
    <div className="App">
      <Tree data={structure} width={400} />
    </div>
  );
}

export default App;
