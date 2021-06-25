import "./App.css";
import React, { lazy, Suspense, useReducer, useState } from "react";
const RiverInformation = lazy(() =>
  import(
    /* webpackChunkName: "RiverInformation" */ "../RiverInformation/RiverInformation"
  )
);

function App() {
  const [river, setRiver] = useState("nile");
  const [show, toggle] = useReducer((state) => !state, true);
  return (
    <div className="wrapper">
      <h1>World's Longest Rivers</h1>
      <div>
        <button onClick={toggle}>Toogle</button>
      </div>
      <button onClick={() => setRiver("nile")}>Nile</button>
      <button onClick={() => setRiver("amazon")}>Amazon</button>
      <button onClick={() => setRiver("yangtze")}>Yangtze</button>
      <button onClick={() => setRiver("mississippi")}>Mississippi</button>
      <Suspense fallback={<div>Loading component</div>}>
        {show && <RiverInformation name={river} />}
      </Suspense>
    </div>
  );
}

export default App;

//can add chunk names too//
