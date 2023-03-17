import "./App.css";

function App() {

  async function handleClick() {
    let res = await window.api.openWindow("Foo");
    console.log("RES", res);
  }
  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={handleClick}>open window</button>
    </div>
  );
}

export default App;
