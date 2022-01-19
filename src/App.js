import "./App.css";

import { Counter } from "./components/Counter/Counter";
import { CardList } from "./components/CardList/CardList";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <div>
      <Form />
      <Counter />
      <Counter />
      <Counter />
      <CardList />
    </div>
  );
}

export default App;
