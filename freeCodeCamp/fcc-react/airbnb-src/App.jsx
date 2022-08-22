import "./App.css";
import Header from "./components/header";
import Main from "./components/body";
import places from "./db/places";

function App() {
  const placesHTML = places.map((el) => {
    return <Main key={el.location} data={el} />;
  });
  console.log(placesHTML);
  return (
    <div className="mx-auto" style={{ width: "550px" }}>
      <Header />
      {placesHTML}
    </div>
  );
}

export default App;
