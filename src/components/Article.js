import React from "react";

function Article(props) {
  const section = "article";
  function increaseCount(e) {
    props.setArticle(props.article + 1);
  }
  function decreaseCount(e) {
    if (props.article === 0) {
      return;
    } else {
      props.setArticle(props.article - 1);
    }
  }

  return (
    <div className="section" id="article">
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
      <div className="section">Article:{props.article}</div>
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
export default Article;
