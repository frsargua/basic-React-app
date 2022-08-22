import "./App.css";
import Header from "./components/header";
import Main from "./components/body";

function App() {
  return (
    <div className="mx-auto" style={{ width: "550px" }}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
