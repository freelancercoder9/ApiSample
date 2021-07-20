import React from "react";

function Practice(props) {
  return (
    <div>
      <label htmlFor="">DataFromApp:{props.fname}</label>
      <button
        onClick={() => {
          props.clickEvent(props.fname + " dontha");
        }}
      >
        clickMe
      </button>
    </div>
  );
}

export default Practice;
