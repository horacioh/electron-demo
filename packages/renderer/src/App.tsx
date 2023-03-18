import {useState} from "react";
import "./App.css";

function App() {
  let [id, setId] = useState("");
  async function getWindowId() {
    let res = await window.api.getWindowId();
    setId(res);
  }
  function handleClick(url: string) {
    return async function clickEvent() {
      let res = await window.api.openWindow(url);
      console.log("RES", res);
    };
  }
  return (
    <div className="App">
      <h1>Electron Mintter demo</h1>
      <h3>{window.location.href}</h3>
      <button disabled={isSameURL("/")} onClick={handleClick("/")}>
        open Home (/)
      </button>
      <button disabled={isSameURL("/foo")} onClick={handleClick("/foo")}>
        open /foo
      </button>
      <button disabled={isSameURL("/bar")} onClick={handleClick("/bar")}>
        open /bar
      </button>
      <button onClick={getWindowId}>window ID: {id}</button>
      <p>Copy this text to see if we can share information between windows</p>
      <textarea placeholder="paste content here"></textarea>
    </div>
  );
}

function isSameURL(url: string) {
  return window.location.href == `http://localhost:5173${url}`;
}

export default App;
