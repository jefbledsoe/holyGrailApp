import React from "react";
import Header from "./components/Header";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Right from "./components/right";
import Left from "./components/left";
import "./styles.css";
import superagent from "superagent";



function App() {
  const [header, setHeader] = React.useState(0);
  const [left, setLeft] = React.useState(0);
  const [article, setArticle] = React.useState(0);
  const [right, setRight] = React.useState(0);
  const [footer, setFooter] = React.useState(0);
  return (
    <div className="App m-3 ">
      <div className="grid">
        <Header
          header={header}
          setHeader={setHeader}
          left={left}
          article={article}
          right={right}
          footer={footer}
        />
        <Left
          left={left}
          setLeft={setLeft}
          header={header}
          article={article}
          right={right}
          footer={footer}
        />
        <Article
          article={article}
          setArticle={setArticle}
          header={header}
          left={left}
          right={right}
          footer={footer}
        />
        <Right
          right={right}
          setRight={setRight}
          header={header}
          left={left}
          article={article}
          footer={footer}
        />
        <Footer
          footer={footer}
          setFooter={setFooter}
          header={header}
          left={left}
          article={article}
          right={right}
        />
      </div>
    </div>
  );
}

export default App;
