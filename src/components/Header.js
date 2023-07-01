import React from "react";

function Header(props) {
 
  const section = "header";
  function increaseCount(e) {
    props.setHeader(props.header + 1);
  }
  function decreaseCount(e) {
    if (props.header === 0) {
      return;
    }else{
      props.setHeader(props.header - 1);
    }
  }

  return (
    <div className ="section" id="header">
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
      <div className="section">Header:{props.header}</div>
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
export default Header;
