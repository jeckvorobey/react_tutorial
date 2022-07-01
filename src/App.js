import React from "react";
import './App.css';
// import Main from "./components/Main";
import {Main, Counter,} from "./components/props/Main";

function App () {
  return (
    <div className="container">
      <Main>
        <Counter />
      </Main>
    </div>
  );
}

export default App;
