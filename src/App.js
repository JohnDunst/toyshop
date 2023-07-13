import logo from "./logo.svg";
import "./App.css";
import toys from "./models/toys";
import Toy from "./components/Toy";

const state = { toys };
console.log(state.toys);

function App() {
  return (

    <div className="App">
      <h1>Toy Shop</h1>

      <Toy toyInfo={state.toys[0]} />
      <Toy toyInfo={state.toys[1]} />
      <Toy toyInfo={state.toys[2]} />
    </div>
  );
}

export default App;
