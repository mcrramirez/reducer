import React from "react";

export const Counter = ({ value, clicks, key, onInc, onDec, ...props }) => {
  return (
    <div {...props} className="" key={key || Math.random()}>
      <div>{value}</div>
      {clicks !== undefined && (
        <div style={{ fontSize: "12px" }}>{clicks} clicks</div>
      )}
      <button onClick={() => onInc()}>+</button>
      <button onClick={() => onDec()}>-</button>
    </div>
  );
};
//export default Counter;
