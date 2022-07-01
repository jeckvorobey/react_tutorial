import React from "react";
import './App.css';
// import Main from "./components/Main";
import {Main, Counter,} from "./components/props/Main";
import MainEvents from "./components/evnts/MainEvents";

function App () {
  return (
    <div className="container">
      <Main>
        <Counter />
      </Main>
      <hr/>
      <MainEvents />
    </div>
  );
}

export default App;
