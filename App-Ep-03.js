import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

const title = (
  <h1 className="head" tabIndex={5}>
    {elem}
    Namaste React Using JSX 🚀
  </h1>
);

const Title = () => (
  <h1 className="head" tabIndex={5}>
    {elem}
    Namaste React Using JSX 🚀
  </h1>
);

const HeadingCoponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingCoponent />);
