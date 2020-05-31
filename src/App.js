import React, { useState, useReducer, useEffect, useContext } from "react";
import "./App.css";
import { Counter } from "./components/Counters";
import { CounterContex, CounterContext } from "./contexts/CounterContext";
import CounterHeader from "./components/CounterHeader";
import { FLApiContainer, FLRow, FLTextInput, FLContext } from "./lib";
import { getDayFromDate } from "./lib/utilities/dateUtil";
import FetchAPI from "./components/FetchAPI";
import { FetchApi4 } from "./components/FetchApi4";
import { LoginPlain } from "./components/LoginPlain";
function App() {
  const [countColor, setCountColor] = useState("blue");
  const counterCtx = useContext(CounterContext);
  const flCtx = useContext(FLContext);

  window.flctx = flCtx;
  window.cctx = counterCtx;

  useEffect(() => {
    //console.log(state);
    const sum = counterCtx.state.counters.reduce((a, b) => a + b);
    if (sum > 0) {
      setCountColor("green");
    } else if (sum < 0) {
      setCountColor("red");
    } else {
      setCountColor("blue");
    }
  }, [counterCtx.state]);

  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      {1 === 1 && (
        <>
          <LoginPlain />
          {/*  <CounterHeader></CounterHeader>
          {counterCtx.state.counters.map((cnt, index) => (
            <Counter
              value={cnt.count}
              clicks={cnt.clicks}
              key={index || Math.random()}
              onInc={() => counterCtx.dispatch({ type: "INC", index })}
              onDec={() => counterCtx.dispatch({ type: "DEC", index })}
              style={{
                fontSize: "2em",
                color: countColor,
                fontWeight: "bold",
              }}
            ></Counter>
          ))} */}
          {/* <button onClick={() => counterCtx.dispatch({ type: "NEW" })}>
            New
          </button> */}
        </>
      )}
    </div>
  );
}

export default App;
