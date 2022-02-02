import logo from "./logo.svg";
import "./App.css";
import Greet from "./component/Greet";
import Welcome from "./component/Welcome";
import Hello from "./component/Hello";
import Message from "./component/Message";
import Counter from "./component/Counter";
import FuncationClick from "./component/FuncationClick";
import ClassClick from "./component/ClassClick";
import EventBind from "./component/EventBind";
import ParentComponent from "./component/ParentComponent";
import UserGreeting from "./component/UserGreeting";
import NameList from "./component/NameList";
import ToDoList from "./component/ToDoList";
import StyleSheet from "./component/StyleSheet";
import Inline from "./component/Inline";
import "./appStyles.css";
import styles from "./appStyle.module.css";
import Form from "./component/Form";
function App() {
  return (
    <div className="App">
      <Form />
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary={true} /> */}
      {/* <ToDoList /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FuncationClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Kanchan" heroName="Wife" /> */}
      {/* <Greet name="Aish" heroName="Sisolow" /> */}
      {/* <Greet name="kajal" heroName="Sister" /> */}
      {/* <Welcome name="Kanchan" heroName="Wife" /> */}
      {/* <Welcome name="Aish" heroName="Sisolow" /> */}
      {/* <Welcome name="kajal" heroName="Sister" /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
