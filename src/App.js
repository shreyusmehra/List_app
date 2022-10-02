import "./App.css";
import List from "./components/List";
import { items } from "./data";

const App = () => {
  return (
    <div className="App">
      <List items={items} />
    </div>
  );
};

export default App;
