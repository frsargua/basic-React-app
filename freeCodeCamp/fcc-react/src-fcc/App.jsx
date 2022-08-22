import { useState } from "react";
import "./App.css";
import Main from "./components/body";
import boxes from "./db/boxes";

function App() {
  let [getBox, setBox] = useState(boxes);
  let [getStyling, setStyling] = useState(boxes);

  let boxesHTML = getStyling.map((el) => (
    <div
      key={el.id}
      className="border border-primary d-inline-block m-1"
      onClick={() => setBG(el.id)}
      style={{
        height: "200px",
        width: "200px",
        backgroundColor: el.on ? "#ccc" : "",
      }}
    ></div>
  ));

  function setBG(id) {
    let index = getStyling.findIndex((x) => x.id === id);
    let temporaryArr = getStyling.slice();
    temporaryArr[index].on = temporaryArr[index].on ? false : true;
    setStyling(temporaryArr);
  }
  return (
    <div className="mx-auto" style={{ width: "550px" }}>
      <h1>Boxes will go here</h1>
      <Main />
      {boxesHTML}
    </div>
  );
}

export default App;
