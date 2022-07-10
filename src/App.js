import "./App.css";
import Form from "./Form.js";
import dataJSON from "./data.json";

function App() {
  return (
    <div className="container">
      <Form dataJSON={dataJSON} />
    </div>
  );
}

export default App;
