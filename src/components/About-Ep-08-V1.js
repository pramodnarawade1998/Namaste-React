import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React!</h2>
//       {/* <User name={"Pramod Narawade (Function)"} /> */}
//       <UserClass name={"Pramod Narawade (Class)"} location={"Pune (Class)"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React!</h2>
        {/* <User name={"Pramod Narawade (Function)"} /> */}
        <UserClass name={"Pramod Narawade (Class)"} location={"Pune (Class)"} />
        {/* <UserClass name={"Rohan Patil (Class)"} location={"Amalner (Class)"} /> */}
      </div>
    );
  }
}

export default About;
