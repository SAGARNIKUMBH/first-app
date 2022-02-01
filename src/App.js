import logo from "./logo.svg";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Message from "./component/Message";

function App() {
  return (
    <div className="App">
      <Message />
      <Greet name="Kanchan" heroName="Wife" />
      <Greet name="Aish" heroName="Sisolow" />
      <Greet name="kajal" heroName="Sister" />
      <Welcome name="Kanchan" heroName="Wife" />
      <Welcome name="Aish" heroName="Sisolow" />
      <Welcome name="kajal" heroName="Sister" />
      <Hello />
    </div>
  );
}

export default App;
