import avatar from "../images/avatar.png";
import memes from "../db/memes";
import { useState } from "react";

export default function Main(props) {
  // console.log(props.data);
  const [getState, setState] = useState("");
  return (
    <div className="d-flex flex-column justify-content-center align-items-center custom-card">
      <form className="d-flex flex-column">
        <div className="my-3">
          <input className="mx-2" placeholder="Top text" />
          <input className="mx-2" placeholder="Bottom text" />
        </div>
        <button type="button" className="p-2" onClick={getMeme}>
          Get Meme
        </button>
      </form>
      {getState && <img src={getState.url} style={{ width: "240px" }} />}
    </div>
  );

  function getImg(input) {
    setState({ image: input });
    let imgComponent = <img src={getState.url} style={{ width: "240px" }} />;
    return imgComponent;
  }

  function updateState() {
    setState("hello");
  }
  function getMeme() {
    let random = Math.floor(Math.random() * (memes.data.memes.length - 0) + 0);
    setState(memes.data.memes[random]);
    console.log(getState);
  }
}
