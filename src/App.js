import CardContainer from "./components/cardcontainer/CardContainer";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
  const [searchQuerry, setSearchQuerry] = useState("");

  return (
    <div className="App">
      <Header searchQuerry={searchQuerry} setSearchQuerry={setSearchQuerry} />
      <CardContainer searchQuerry={searchQuerry} />
    </div>
  );
}

export default App;
