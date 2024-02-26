import React, { useState } from "react";

function CounterApp() {
  const [counter, setcounter] = useState(8);

  const clickIncrement = () => {
    setcounter(counter + 3);
  };
  const clickDecrement = () => {
    setcounter(counter - 3);
  };
  return (
    <>
<h1>Buttons</h1>
    <div style={{ display: "flex"}}>
        
      <div>
        <button
          onClick={clickIncrement}
          style={{
            color: "white",
            backgroundColor: "black ",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          Increment
        </button>
      </div>
      <div>
        <p style={{margin:"10px"}}>{counter}</p>
      </div>

      <div>
        <button
          onClick={clickDecrement}
          style={{
            color: "white",
            backgroundColor: "black",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          Decrement
        </button>
      </div>
    </div>
    </>
  );
}

export default CounterApp;
