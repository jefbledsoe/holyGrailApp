import React from "react";

function Right(props) {
 
  const section = "right";
  function increaseCount(e) {
    props.setRight(props.right + 1);
  }
  function decreaseCount(e) {
    if (props.right === 0) {
      return;
    }else{
      props.setRight(props.right - 1);
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
      <div className="section">Right:{props.right}</div>
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
export default Right;
