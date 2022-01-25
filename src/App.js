import "./App.css";

import { CardList } from "./components/CardList/CardList";
import { CardListFB } from "./components/CardList/CardListFB";
import { OnlinerList } from "./components/Onliner/OnlinerList";

function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          width: "700px",
        }}
      >
        <CardList />
      </div>
      <div>
        <CardListFB />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <OnlinerList />
      </div>
    </div>
  );
}

export default App;
