import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Home } from "./views/Home";
import { Cart } from "./views/Cart";
import {NavBar} from './components/NavBar'
import store from "./store/store";


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
