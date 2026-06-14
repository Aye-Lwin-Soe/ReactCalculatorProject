import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  return (
    <div className="container">
      <div className="calculator_frame">
        {/* <h1>Small Calculator Project</h1> */}
        <Output />
        <Input />
        <Button />
      </div>
    </div>
  );
}

export default App;
