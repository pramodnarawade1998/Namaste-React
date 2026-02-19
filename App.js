{
  /* <div id="parent">
  <div id="child1">
    <h1>I am an h1 Tag!</h1>
    <h2>I am an h2 Tag!</h2>
  </div>
  <div id="child2">
    <h1>I am an h1 Tag!</h1>
    <h2>I am an h2 Tag!</h2>
  </div>
</div>; */
}

// React Element (Object) => HTML (Browser Understands)

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

// JSX

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!",
// );

// console.log(heading); // Object
console.log(parent); // Object

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
