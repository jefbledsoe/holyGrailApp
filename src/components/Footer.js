import React from "react";

function Footer(props) {
 
  const section = "footer";
  function increaseCount(e) {
    props.setFooter(props.footer + 1);
  }
  function decreaseCount(e) {
    if (props.footer === 0) {
      return;
    }else{
      props.setFooter(props.footer - 1);
    }
  }

  return (
    <div className ="section" id="footer">
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
      <div className="section">Footer:{props.footer}</div>
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
export default Footer;
