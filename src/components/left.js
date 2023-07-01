import React from "react";

function Left(props) {
 
  const section = "left";
  function increaseCount(e) {
    props.setLeft(props.left + 1);
  }
  function decreaseCount(e) {
    if (props.left === 0) {
      return;
    }else{
      props.setLeft(props.left - 1);
    }
  }

  return (
    <div className ="section" id="aside">
       {/* Minus button */}
       <img
        src={require(`../icons/${section}_minus.png`)}
        alt=""
        id="minus"
        onClick={(e) => decreaseCount(e)}
      />
      {/* Plus button */}
      <img
        src={require(`../icons/${section}_plus.png`)}
        alt=""
        id="plus"
        onClick={(e) => increaseCount(e)}
      />
      {/* Local section count */}
      <div className="section">Left:{props.left}</div>
      {/* all sections counts display */}
      <div>{`
      Header: ${props.header}
      Left: ${props.left}
      Article: ${props.article}
      Right: ${props.right}
      Footer: ${props.footer}
       `}</div>
    </div>
  );
}
export default Left;
